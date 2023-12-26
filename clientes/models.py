from django.db import models
from django.utils import timezone
from crearPagos.models import Crear_Pagos
from planes.models import Planes
from productos.models import Productos

# Create your models here.
class Clientes(models.Model):
    cedula = models.IntegerField(primary_key=True)
    nombre_completo = models.CharField(max_length=150)
    email = models.EmailField(max_length=100)
    direccion = models.CharField(max_length=100)
    fecha_inicio = models.DateField(null=True,blank=True, auto_now_add = True) 



    #ForeignKey
    nombre_producto = models.ForeignKey(Productos,null=True,blank=True,on_delete=models.SET_NULL)
    total_pagar = models.ForeignKey(Crear_Pagos, null=True,blank=True,on_delete=models.SET_NULL)
    meses_diferidos = models.ForeignKey(Planes, null=True,blank=True,on_delete=models.SET_NULL)
    
    


    class Meta:
        db_table = 'Clientes'

    def __str__(self):
        return self.nombre_completo