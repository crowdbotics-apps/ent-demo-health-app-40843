from rest_framework import authentication
from users.models import CallCenter
from .serializers import CallCenterSerializer
from rest_framework import viewsets

class CallCenterViewSet(viewsets.ModelViewSet):
    serializer_class = CallCenterSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = CallCenter.objects.all()