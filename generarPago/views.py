from rest_framework import viewsets
from .serializer import generarPagoSerializer
from .models import generarPago
# Create your views here.

class generarPagoView(viewsets.ModelViewSet):
    serializer_class = generarPagoSerializer
    queryset = generarPago.objects.all()
