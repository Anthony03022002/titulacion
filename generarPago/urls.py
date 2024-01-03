from django.urls import path, include
from rest_framework import routers
from generarPago import views


router = routers.DefaultRouter()
router.register(r'generarPago', views.generarPagoView, 'generarPago')


urlpatterns = [
    path('generarPago/', include(router.urls)),
]