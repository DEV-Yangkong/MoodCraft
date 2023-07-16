from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from .serializers import ResultSerializer, ResultDetailSerializer
from .models import Result, ResultDetailModel
class ResultInfo(APIView):
    # def get_object(self, pk):
    #     try:
    #         return Result.objects.get(pk = pk)
    #     except Result.DoesNotExist:
    #         raise NotFound

    def get(self, request):
        drink_kind = request.GET.get("drink_kind", None)
        result = Result.objects.get(drink_kind=drink_kind)
        result.drink_count += 1
        result.save()
        serializer = ResultSerializer(result)
        return Response(serializer.data)



class ResultDetail(APIView):
        def get(self, request, *args, **kwargs):     
            drink_kind = request.GET.get("drink_kind",None)
            dosu = request.GET.get("dosu",None)
            sugar = request.GET.get("sugar",None)
            print('도수 : ', dosu)
            drink_kind = Result.objects.get(drink_kind=drink_kind)
            detail_drink = drink_kind.results.filter(dosu = dosu, sugar = sugar)
            serializer = ResultDetailSerializer(detail_drink, many = True)
            return Response(serializer.data)
        
        