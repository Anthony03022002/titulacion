from django.db import models

from clientes.models import Clientes

# Create your models here.

class generarPago(models.Model):

    fecha_pago = models.DateField()
    cantidad_pagada = models.DecimalField(max_digits=10, decimal_places=3)
    cedula = models.ForeignKey(Clientes,null=True, blank=True, on_delete=models.SET_NULL)
    


    class Meta:
        db_table = 'GenerarPago'
