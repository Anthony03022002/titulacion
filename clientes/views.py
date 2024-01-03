from rest_framework import viewsets
from .serializer import clientesSerializer
from .models import Clientes

# Create your views here.

class clientesView(viewsets.ModelViewSet):
    serializer_class = clientesSerializer
    queryset = Clientes.objects.all()


    