from rest_framework import viewsets
from .serializer import crearPagoSerializer
from .models import Crear_Pagos

# Create your views here.

class crearPagosView(viewsets.ModelViewSet):
    serializer_class = crearPagoSerializer
    queryset = Crear_Pagos.objects.all()

# Create your views here.
