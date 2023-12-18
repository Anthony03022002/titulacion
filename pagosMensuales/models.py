from django.db import models
from django.contrib.auth.models import User
from clientes.models import Clientes
from planes.models import Planes


opciones_estado = [
    ('opcion1','Cancelado'),
    ('opcion2','Por pagar'),
]

# Create your models here.
class pagosMensuales(models.Model):
    pagos_mensuales = models.AutoField(primary_key=True)
    vencimiento = models.DateField()
    estado = models.CharField(max_length=20,choices=opciones_estado, default='opcion2')
    total_cobrar = models.DecimalField(max_digits=20, decimal_places=2)
    fecha_inicio = models.DateTimeField(auto_now_add = True)


    #ForeingKey
    nombre_completo = models.ForeignKey(Clientes, null=True, blank=True, on_delete=models.CASCADE)
    planes = models.ForeignKey(Planes, null=True, blank=True, on_delete=models.CASCADE)
    User = models.ForeignKey(User,null=True, blank=True,on_delete=models.CASCADE)





    class Meta:
        db_table = 'Pagos_mensuales'
    
    def __str__(self):
        return self.estado

