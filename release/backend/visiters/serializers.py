from rest_framework.serializers import ModelSerializer
from .models import Visiter
from results.serializers import ResultSerializer

class VisiterSerializer(ModelSerializer):
    result = ResultSerializer(read_only = True)
    class Meta:
        model = Visiter
        exclude = ("result_detail",)
