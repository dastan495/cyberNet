from django.db import models

# Create your models here.
class Response123(models.Model):
    full_name = models.CharField(
        max_length=100
    )
    phone = models.CharField(
        max_length=25
    )
    email = models.EmailField()
    company_name = models.CharField(
        max_length=255
    )
    website = models.CharField(
        max_length=255
    )
    type_of = models.CharField(
        max_length=255
    )
    languages = models.CharField(
        max_length=255
    )
    month = models.CharField(
        max_length=25
    )
    day = models.CharField(
        max_length=24
    )
    time = models.CharField(
        max_length=25
    )
    comment = models.CharField(
        max_length=1000
    )