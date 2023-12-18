from rest_framework import serializers
from .models import Crear_Pagos

class crearPagoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crear_Pagos
        #fields = ('fecha_inicio', 'total_pagar')  
        fields = '__all__'# Utiliza una tupla, no una cadena