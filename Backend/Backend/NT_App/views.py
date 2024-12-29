from django.shortcuts import render
from django.http import HttpResponse

def main(request):
    return render(request,'NT_App/main.html')

def about(request):
    return render(request,'NT_App/about.html')
    