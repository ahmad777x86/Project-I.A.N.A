from django.urls import path
from . import views
from django.urls import path, include

urlpatterns = [
    path('addnote/', views.add_note, name='add-note'), 
    path('getnotes/', views.get_notes, name='get-notes'),
    path('<int:pk>/', views.update_note.as_view(), name='update-note'), 
    path('about/', views.about, name='about'),  
]
