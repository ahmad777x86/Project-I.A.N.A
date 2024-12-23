from django.urls import path
from . import views
from django.urls import path, include

urlpatterns = [
    path('', views.main, name='main'),  
    path('about/', views.about, name='about'),  
]
