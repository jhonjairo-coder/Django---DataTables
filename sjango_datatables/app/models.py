from django.db import models

# Create your models here.

class Programer(models.Model):
    name = models.CharField( max_length=50)
    country = models.CharField(max_length=50)
    birthday =models.DateField()
    score=models.PositiveIntegerField()

       
    class Meta:
        db_table = 'programer'