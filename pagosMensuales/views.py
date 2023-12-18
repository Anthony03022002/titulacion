from rest_framework import viewsets
from .serializer import pagosMensualesSerializer
from .models import pagosMensuales

# Create your views here.

class pagosMensualesView(viewsets.ModelViewSet):
    serializer_class = pagosMensualesSerializer
    queryset = pagosMensuales.objects.all()

# Create your views here.
