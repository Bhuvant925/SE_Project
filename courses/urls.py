from django.urls import path 
from . import views
urlpatterns = [
    path('',views.courses,name='courses'),
    path('display',views.display,name='display')
]