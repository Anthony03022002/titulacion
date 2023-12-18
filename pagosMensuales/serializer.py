from rest_framework import serializers
from .models import pagosMensuales

class pagosMensualesSerializer(serializers.ModelSerializer):
    class Meta:
        model = pagosMensuales
        # fields = ('pagos_mensuales', 'vencimiento', 'estado', 'total_cobrar', 'fecha_inicio')
        fields = '__all__'