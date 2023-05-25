# Generated by Django 2.2.28 on 2023-05-25 16:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_auto_20230525_1619'),
    ]

    operations = [
        migrations.CreateModel(
            name='CallCenter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('patientName', models.CharField(max_length=256)),
                ('inbound', models.BooleanField()),
                ('outbound', models.BooleanField()),
                ('callNotes', models.TextField()),
                ('supportRepName', models.CharField(max_length=256)),
            ],
        ),
    ]
