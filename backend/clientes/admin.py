from django.contrib import admin
from .models import Clientes
# Register your models here.

class clientesAdmin(admin.ModelAdmin):
    readonly_fields = ('fecha_inicio', )


admin.site.register(Clientes, clientesAdmin)
