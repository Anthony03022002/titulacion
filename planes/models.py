from django.db import models


plan_meses = [
    ('opcion1','8 meses'),
    ('opcion2','12 meses'),
    ('opcion3','24 meses'),
    ('opcion4','32 meses'),
]

# Create your models here.
class Planes(models.Model):
    meses_diferidos = models.CharField(max_length=100, choices= plan_meses, default='opcion1', primary_key=True)

    def __str__ (self):
        return self.meses_diferidos
    
    class Meta:
        db_table = 'Planes' 

   