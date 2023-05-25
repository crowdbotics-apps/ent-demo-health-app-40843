from rest_framework import serializers
from users.models import CallCenter

class CallCenterSerializer(serializers.ModelSerializer):

    class Meta:
        model = CallCenter
        fields = "__all__"