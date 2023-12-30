# Generated by Django 5.0 on 2023-12-29 20:12

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('planes', '0001_initial'),
        ('productos', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Clientes',
            fields=[
                ('cedula', models.BigIntegerField(primary_key=True, serialize=False)),
                ('nombre_completo', models.CharField(max_length=150)),
                ('email', models.EmailField(max_length=100)),
                ('direccion', models.CharField(max_length=100)),
                ('fecha_inicio', models.DateField(auto_now_add=True, null=True)),
                ('cantidad_producto', models.IntegerField()),
                ('total_pagar', models.DecimalField(decimal_places=2, max_digits=50)),
                ('pagos_mensuales', models.DecimalField(decimal_places=2, max_digits=50)),
                ('vencimiento', models.DateField(auto_now_add=True, null=True)),
                ('estado', models.CharField(max_length=100)),
                ('meses_diferidos', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='planes.planes')),
                ('nombre_producto', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='productos.productos')),
            ],
            options={
                'db_table': 'Clientes',
            },
        ),
    ]
