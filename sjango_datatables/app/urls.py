from django.urls import path
from . import views

urlpatterns = [
    path('',views.index, name='index'),
    path('list_programers/', views.list_programers, name='list_programers')
]

