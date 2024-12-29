from django.contrib import admin
from .models import NT_App_Data
# Register your models here.

@admin.register(NT_App_Data)
class NT_App_DataAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')
