from .jwt_views import CustomTokenObtainPairView
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import dashboard, CustomerViewSet, recent_customers, \
                     export_customers_excel, export_customers_pdf
from .register_views import RegisterAPIView

router = DefaultRouter()

router.register(
    "customers",
    views.CustomerViewSet,
    basename="customer"
)

urlpatterns = [
    path("", views.home),
    path("edit/<int:id>/", views.edit_customer, name="edit_customer"),
    path("delete/<int:id>/", views.delete_customer, name="delete_customer"),
    path("api/", views.customer_api, name="customer_api"),
    path("api/<int:id>/", views.customer_detail_api, name="customer_detail_api"),
    path("generic/customers/", views.CustomerListAPI.as_view(), name="customer_list_generic"),
    path("generic/customers/<int:pk>/", views.CustomerDetailAPI.as_view(), name="customer_detail_generic",),


path(
    "token/",
    CustomTokenObtainPairView.as_view(),
    name="token_obtain_pair",
),
    path(
    "ledger/<int:customer_id>/",
    views.customer_ledger,
    name="customer-ledger",
),
path("dashboard/", dashboard),

path(
        "dashboard/recent-customers/",
        recent_customers
    ),
path(
    "export/excel/",
    export_customers_excel,
),
path(
    "dashboard/customer-growth/",
    views.customer_growth
),
path(
    "ai-summary/",
    views.ai_customer_summary,
    name="ai-summary",
),
path(
    "export/pdf/",
    export_customers_pdf,
),
path(
    "register/",
    RegisterAPIView.as_view(),
    name="register",
),
]


urlpatterns += router.urls

