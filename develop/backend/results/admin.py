from django.contrib import admin
from .models import Result, ResultDetailModel
@admin.action(description = "Count Set Zero")
def reset_count(model_admin, request, results):
    for result in results.all():
        result.drink_count = 0
        result.save()
@admin.register(Result)
class ResultAdmin(admin.ModelAdmin):
    list_display = (
        "drink_kind",
        "drink_count",
        "description",
    )

@admin.register(ResultDetailModel)
class ResultDetailAdmin(admin.ModelAdmin):
    list_display = (
        "drink_name",
        "description",
        "before_result",
        "dosu",
        "sugar",
        "image",
    )
# Register your models here.
