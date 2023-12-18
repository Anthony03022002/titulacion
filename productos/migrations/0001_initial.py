# Generated by Django 5.0 on 2023-12-17 22:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Productos',
            fields=[
                ('nombre_producto', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('cantidad', models.IntegerField()),
                ('precio', models.DecimalField(decimal_places=2, max_digits=50)),
            ],
            options={
                'db_table': 'Productos',
            },
        ),
    ]
