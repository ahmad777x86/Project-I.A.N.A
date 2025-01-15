from rest_framework import serializers
from .models import NT_App_Data

class NT_App_DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = NT_App_Data
        fields = ['title','description']
