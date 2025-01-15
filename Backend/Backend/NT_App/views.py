from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .models import NT_App_Data
from .serializers import NT_App_DataSerializer

class add_note(generics.ListCreateAPIView):
    queryset = NT_App_Data.objects.all()
    serializer_class = NT_App_DataSerializer

class update_note(generics.RetrieveUpdateDestroyAPIView):
    queryset = NT_App_Data.objects.all()
    serializer_class = NT_App_DataSerializer
    lookup_field = "pk"

def about(request):
    return render(request,'NT_App/about.html')
    