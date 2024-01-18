from rest_framework import serializers
from .models import generarPago


class generarPagoSerializer(serializers.ModelSerializer):
    class Meta:
        model = generarPago
        fields = '__all__'
