from django.shortcuts import render
from rest_framework import generics
from rest_framework.decorators import api_view
from .models import NT_App_Data
from .serializers import NT_App_DataSerializer
from rest_framework.response import Response

@api_view(['POST', 'GET'])
def add_note(request):
    serializer = NT_App_DataSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors,status=400)

class update_note(generics.RetrieveUpdateDestroyAPIView):
    queryset = NT_App_Data.objects.all()
    serializer_class = NT_App_DataSerializer
    lookup_field = "pk"

def about(request):
    return render(request,'NT_App/about.html')
    