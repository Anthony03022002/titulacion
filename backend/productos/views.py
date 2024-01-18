from rest_framework import viewsets
from .serializer import productosSerializer
from .models import Productos

# Create your views here.

class ProductosView(viewsets.ModelViewSet):
    serializer_class = productosSerializer
    queryset = Productos.objects.all()
# Create your views here.
