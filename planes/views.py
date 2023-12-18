from rest_framework import viewsets
from .serializer import planesSerializer
from .models import Planes

# Create your views here.

class planesView(viewsets.ModelViewSet):
    serializer_class = planesSerializer
    queryset = Planes.objects.all()

# Create your views here.

