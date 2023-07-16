from django.contrib import admin
from .models import Visiter
from results.models import Result,ResultDetailModel
# Register your models here.
@admin.register(Visiter)
class VisiterAdmin(admin.ModelAdmin):
    list_per_page = 10
    list_display = ("age", "gender","result","result_detail")
    list_filter = ['age','gender']
    
