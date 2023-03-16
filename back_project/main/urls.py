from django.contrib import admin
from django.urls import path, include

from rest_framework import routers

from app.usuario.api import viewsets as UsuariosViewset


route = routers.DefaultRouter()

route.register(r'usuarios', UsuariosViewset.UsuariosViewset, basename='Usuarios')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(route.urls))
]
