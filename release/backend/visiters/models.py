from django.db import models
from results.models import Result,ResultDetailModel

class Visiter(models.Model):
    class GenderChoice(models.TextChoices):
        MALE = ("male", "Male")
        FEMALE = ("female", "Female")
    
    class AgeChoice(models.TextChoices):

        TWENTY = ("twenty","20대")
        THIRTY = ("thirty","30대")
        FORTY = ("forty", "40대")
        FIFTY = ("fifty","50대")

    gender = models.CharField(max_length=10, choices=GenderChoice.choices, null=True)
    age = models.CharField(max_length=10,choices=AgeChoice.choices, null=True )    
    result = models.ForeignKey("results.Result",on_delete=models.CASCADE, null=True)
    result_detail = models.ForeignKey("results.ResultDetailModel", on_delete= models.CASCADE, null=True)
    
#무슨 문제일까