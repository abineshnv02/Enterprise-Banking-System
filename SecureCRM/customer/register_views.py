from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

from .register_serializer import RegisterSerializer


class RegisterAPIView(generics.CreateAPIView):

    serializer_class = RegisterSerializer

    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):

        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)

        serializer.save()

        return Response(

            {
                "message": "Registration Successful"
            },

            status=status.HTTP_201_CREATED,

        )