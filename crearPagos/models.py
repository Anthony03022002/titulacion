from django.db import models

# Create your models here.
class Crear_Pagos(models.Model):
    fecha_inicio = models.DateTimeField(auto_now_add = True)
    total_pagar = models.DecimalField(max_digits=50,decimal_places=2,primary_key=True)

    class Meta:
        db_table = 'Crear_Pagos' 

    