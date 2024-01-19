from django.db import models




# Create your models here.
class Planes(models.Model):
    meses_diferidos = models.IntegerField(primary_key=True)

    
    
    class Meta:
        db_table = 'Planes' 

   