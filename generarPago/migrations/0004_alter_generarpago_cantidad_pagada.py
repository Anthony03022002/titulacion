# Generated by Django 4.2.4 on 2024-01-02 20:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('generarPago', '0003_generarpago_cantidad_pagada'),
    ]

    operations = [
        migrations.AlterField(
            model_name='generarpago',
            name='cantidad_pagada',
            field=models.DecimalField(decimal_places=3, max_digits=10),
        ),
    ]
