from django.urls import path
from .views import index

#Holds the URL path for the application 
urlpatterns = [
   path('', index), #This is the path for home 
   path('donate', index),
   path('testing', index),
   path('about', index),
   path('register', index),
   path('login', index)
]
