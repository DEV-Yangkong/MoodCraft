from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path("", views.ResultInfo.as_view()),
    path("detail/", views.ResultDetail.as_view()),
]+ static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)