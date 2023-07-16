from django.urls import path
from . import views

urlpatterns = [
    path("",views.AllVisiters.as_view()),

]