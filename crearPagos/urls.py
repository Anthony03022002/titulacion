from django.urls import path, include
from rest_framework import routers
from crearPagos import views

router = routers.DefaultRouter()
router.register(r'crearPagos', views.crearPagosView, 'crearPagos')

urlpatterns = [
    path('crearPagos/', include(router.urls))
    
]