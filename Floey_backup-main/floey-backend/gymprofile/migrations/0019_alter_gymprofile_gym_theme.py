# Generated by Django 3.2 on 2021-09-10 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gymprofile', '0018_classes_seat_available'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gymprofile',
            name='gym_theme',
            field=models.CharField(choices=[('red', 'red'), ('green', 'green'), ('brown', 'brown'), ('orange', 'orange'), ('pink', 'pink'), ('blue', 'blue'), ('lightgreen', 'lightgreen'), ('yellow', 'yellow'), ('purple', 'purple')], default='red', max_length=255),
        ),
    ]
