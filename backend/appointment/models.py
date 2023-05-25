from django.conf import settings
from django.db import models
class List(models.Model):
    'Generated Model'
    patientId = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="list_patientId",)

# Create your models here.
