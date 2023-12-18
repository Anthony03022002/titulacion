from django.urls import path, include
from rest_framework import routers
from pagosMensuales import views

router = routers.DefaultRouter()
router.register(r'pagosMensuales', views.pagosMensualesView, 'pagosMensuales')

urlpatterns = [
    path('pagosMensuales/', include(router.urls)),
    
]