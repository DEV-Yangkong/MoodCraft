from rest_framework.serializers import ModelSerializer
from .models import Result, ResultDetailModel
import uuid
import base64
class ResultSerializer(ModelSerializer):
    class Meta:
        model = Result
        fields = ("drink_kind", "description", "drink_count",)

class ResultDetailSerializer(ModelSerializer):
    class Meta:
        model = ResultDetailModel
        fields = "__all__"

    