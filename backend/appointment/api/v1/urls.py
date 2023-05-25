
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ListViewSet
router = DefaultRouter()
router.register('list', ListViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
