import requests
from django.shortcuts import render, redirect, HttpResponse,\
                             get_object_or_404
from .models import Customer
from django.contrib import messages
from django.http import JsonResponse
from .serializers import CustomerSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .services.gemini_service import generate_customer_summary
from rest_framework import status, generics, mixins, viewsets, filters
#from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly,\
                                    #IsAdminUser
from rest_framework.permissions import AllowAny
from .permissions import IsAdminForDeleteOnly  
from django_filters.rest_framework import DjangoFilterBackend   
from django.conf import settings 
from django.db.models import Count
from django.db.models.functions import TruncMonth
                            
def home(request):

    if request.method == "POST":
        print("========== REQUEST.POST ==========")
        print(request.POST)
        print("Name :", request.POST.get("name"))
        print("Email:", request.POST.get("email"))
        print("Phone:", request.POST.get("phone"))
        print("Address:", request.POST.get("address"))
        print("==================================")

        name = request.POST.get("name")
        email = request.POST.get("email")
        phone = request.POST.get("phone")
        address = request.POST.get("address")

        Customer.objects.create(
            name=name,
            email=email,
            phone=phone,
            address=address
        )
        messages.success(request, "Customer added successfully!")
        return redirect("/customer/")

    customers = Customer.objects.all()

    return render(
        request,
        "customer/home.html",
        {"customers": customers}
    )

def edit_customer(request, id):

    customer = Customer.objects.get(id=id)

    if request.method == "POST":

        customer.name = request.POST.get("name")
        customer.email = request.POST.get("email")
        customer.phone = request.POST.get("phone")
        customer.address = request.POST.get("address")

        customer.save()

        return redirect("/customer/")

    return render(
        request,
        "customer/edit_customer.html",
        {
            "customer": customer
        }
    )

def delete_customer(request, id):

    customer = Customer.objects.get(id=id)

    customer.delete()

    return redirect("/customer/")

@api_view(["GET","POST"])
def customer_api(request):

    if request.method == "GET":

        customers = Customer.objects.all()
        serializer = CustomerSerializer(customers, many=True)
        return Response(serializer.data)

    elif request.method == "POST":

        serializer = CustomerSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(
                    serializer.data,
                    status=status.HTTP_201_CREATED
                            )

        return Response(
                    serializer.errors,
                    status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET", "PUT", "DELETE"])
def customer_detail_api(request, id):

    customer = get_object_or_404(Customer, id=id)

    if request.method == "GET":

        serializer = CustomerSerializer(customer)

        return Response(serializer.data)

    elif request.method == "PUT":

        serializer = CustomerSerializer(
            customer,
            data=request.data
        )

        if serializer.is_valid():

            serializer.save()

            return Response(serializer.data)

        return Response(serializer.errors)

    elif request.method == "DELETE":
        
        customer.delete()

        return Response({"message": "Customer deleted successfully!"})

class CustomerDetailAPI(generics.RetrieveUpdateDestroyAPIView):

    queryset = Customer.objects.all()

    serializer_class = CustomerSerializer

class CustomerListAPI(generics.ListCreateAPIView):

    queryset = Customer.objects.all()

    serializer_class = CustomerSerializer

class CustomerViewSet(viewsets.ModelViewSet):

    queryset = Customer.objects.all()

    serializer_class = CustomerSerializer

    #permission_classes = [IsAdminUser, IsAuthenticated, IsAdminForDeleteOnly]
    permission_classes = [AllowAny]

    filter_backends = [filters.SearchFilter, filters.OrderingFilter, DjangoFilterBackend,]

    search_fields = ["name", "email"]

    ordering_fields = ["id", "name", "email"]

    ordering = ["-id"]

    filterset_fields = ["name", "email", "address",]

@api_view(["GET"])
def customer_ledger(request, customer_id):

    try:
        # 1. Get customer from Django database
        customer = Customer.objects.get(id=customer_id)

    except Customer.DoesNotExist:
        return Response(
            {"error": "Customer not found in CRM"},
            status=404
        )

    # 2. Call Flask Ledger API
    flask_url = (
        f"{settings.LEDGER_SERVICE_URL}/customers/{customer_id}"
    )

    try:

        response = requests.get(flask_url, timeout=5)

        if response.status_code != 200:
            return Response(
                {"error": "Customer not found in Ledger"},
                status=response.status_code
            )

        ledger_data = response.json()

    except requests.exceptions.ConnectionError:

        return Response(
            {"error": "Ledger service unavailable"},
            status=503
        )

    # 3. Merge both responses

    result = {
        "crm": {
            "name": customer.name,
            "email": customer.email,
            "phone": customer.phone,
            "address": customer.address,
        },
        "ledger": ledger_data
    }

    return Response(result)

@api_view(["GET"])
def dashboard(request):

    from .models import Customer

    total_customers = Customer.objects.count()

    data = {

        "customers": total_customers,

        "ledgers": 12,

        "revenue": 1520000,

        "active_users": 4,

    }

    return Response(data)

@api_view(["GET"])
def recent_customers(request):

    from .models import Customer

    customers = Customer.objects.order_by("-id")[:5]

    data = []

    for customer in customers:

        data.append({

            "id": customer.id,

            "name": customer.name,

            "email": customer.email,

            "phone": customer.phone,

        })

    return Response(data)

@api_view(["GET"])
def customer_growth(request):

    growth = (
        Customer.objects
        .annotate(month=TruncMonth("created_at"))
        .values("month")
        .annotate(count=Count("id"))
        .order_by("month")
    )

    return Response(growth)

@api_view(["POST"])
def ai_customer_summary(request):

    customer_id = request.data.get("customer_id")

    try:

        customer = Customer.objects.get(id=customer_id)

    except Customer.DoesNotExist:

        return Response(
            {"error": "Customer not found"},
            status=404
        )

    summary = generate_customer_summary(customer)

    return Response({

        "summary": summary

    })