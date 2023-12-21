from django.db import models

from productos.models import Productos

# Create your models here.
class Clientes(models.Model):
    cedula = models.IntegerField(primary_key=True)
    nombre_completo = models.CharField(max_length=150)
    email = models.EmailField(max_length=100)
    direccion = models.CharField(max_length=100)


    #ForeignKey
    nombre_producto = models.ForeignKey(Productos,null=True,blank=True,on_delete=models.CASCADE)


    class Meta:
        db_table = 'Clientes'

    def __str__(self):
        return self.nombre_completo