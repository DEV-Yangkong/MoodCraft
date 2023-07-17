from rest_framework.serializers import ModelSerializer
from .models import Visiter

class VisiterSerializer(ModelSerializer):
    class Meta:
        model = Visiter

        fields = "__all__" 
