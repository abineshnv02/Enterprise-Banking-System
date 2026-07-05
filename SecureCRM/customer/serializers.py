from rest_framework import serializers
from .models import Customer


class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer
        fields = "__all__"

    def validate_name(self, value):

        if len(value) < 3:
            raise serializers.ValidationError(
                "Name must contain at least 3 characters."
            )

        return value

    def validate(self, data):

        if data["name"] == data["address"]:

            raise serializers.ValidationError(
                "Name and Address cannot be the same."
            )

        return data