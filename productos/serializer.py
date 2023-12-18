from rest_framework import serializers
from .models import Productos

class productosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productos
        #fields = ('nombre_producto', 'cantidad', 'precio')
        fields = '__all__'