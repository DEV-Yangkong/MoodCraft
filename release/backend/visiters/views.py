# from django.shortcuts import render
# from .models import Visiter
# from rest_framework.views import APIView
# from rest_framework.serializers import ModelSerializer
# from rest_framework.response import Response
# from .serializers import VisiterSerializer
# from results.models import Result

# # Create your views here.


# class AllVisiters(APIView):

#     def get(self, request):
#         visiter = Visiter.objects.all()
#         count = visiter.count()
#         serializer = VisiterSerializer(visiter, many = True)
#         return Response(serializer.data, {"count": count})
  
#     def post(self, request):
#         serializer = VisiterSerializer(data = request.data)

#         if serializer.is_valid():
#             result_kind = request.data.get("drink_kind", None)
#             result = Result.objects.get(drink_kind = result_kind)
#             save_data = serializer.save(
#                 result = result
#             )
#             return Response(VisiterSerializer(save_data).data)
#         else:
#             return Response(serializer.errors) 


# 진우님 방문자수 오류 떠서 위에 주석처리하고 수정좀해보겠습니다.(예은)

from django.shortcuts import render
from .models import Visiter
from rest_framework.views import APIView
from rest_framework.serializers import ModelSerializer
from rest_framework.response import Response
from .serializers import VisiterSerializer
from results.models import Result

# Create your views here.

class AllVisiters(APIView):

    def get(self, request):
        visiter = Visiter.objects.all()
        count = visiter.count()
        serializer = VisiterSerializer(visiter, many=True)
        return Response({"visiter_data": serializer.data, "count": count})

    def post(self, request):
        serializer = VisiterSerializer(data=request.data)

        if serializer.is_valid():
            result_kind = request.data.get("drink_kind", None)
            result = Result.objects.get(drink_kind=result_kind)
            save_data = serializer.save(result=result)
            return Response(VisiterSerializer(save_data).data)
        else:
            return Response(serializer.errors)
