from django.urls import path, include
from rest_framework import routers
from planes import views

router = routers.DefaultRouter()
router.register(r'planes', views.planesView, 'planes')

urlpatterns = [
    path('planes/', include(router.urls))
]