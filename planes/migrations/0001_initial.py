# Generated by Django 5.0 on 2023-12-29 20:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Planes',
            fields=[
                ('meses_diferidos', models.IntegerField(primary_key=True, serialize=False)),
            ],
            options={
                'db_table': 'Planes',
            },
        ),
    ]
