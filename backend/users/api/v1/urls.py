
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CallCenterViewSet
router = DefaultRouter()
router.register('callcenter', CallCenterViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
