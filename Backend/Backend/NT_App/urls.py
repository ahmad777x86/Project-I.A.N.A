from django.urls import path
from . import views
from django.urls import path, include

urlpatterns = [
    path('', views.add_note.as_view(), name='add-note'), 
    path('<int:pk>/', views.update_note.as_view(), name='update-note'), 
    path('about/', views.about, name='about'),  
]
