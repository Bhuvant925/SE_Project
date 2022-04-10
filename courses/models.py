from django.db import models
class Course(models.Model):
    Name =models.CharField(max_length=100)
    Price = models.IntegerField()
    Duration=models.CharField(max_length=30)
# Create your models here.
