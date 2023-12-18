from rest_framework import serializers
from .models import Clientes

class clientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clientes
        # fields = ('cedula', 'nombre_completo', 'email', 'direccion')
        fields = '__all__'
      