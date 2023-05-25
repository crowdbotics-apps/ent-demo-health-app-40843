from rest_framework import authentication
from appointment.models import List
from .serializers import ListSerializer
from rest_framework import viewsets

class ListViewSet(viewsets.ModelViewSet):
    serializer_class = ListSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = List.objects.all()