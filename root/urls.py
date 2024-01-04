from django.urls import path
from . import views

urlpatterns = [
    path('', views.main),
    path('about/', views.about),
    path('sign/', views.sign)
]