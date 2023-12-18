from rest_framework import serializers
from .models import Planes

class planesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Planes
        #fields = 'meses_diferidos'
        fields = '__all__'