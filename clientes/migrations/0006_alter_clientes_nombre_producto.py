# Generated by Django 5.0 on 2023-12-23 20:25

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clientes', '0005_alter_clientes_nombre_producto'),
        ('productos', '0002_productos_meses_diferidos'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clientes',
            name='nombre_producto',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='productos.productos'),
        ),
    ]
