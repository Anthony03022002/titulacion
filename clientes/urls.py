from django.urls import path, include
from rest_framework import routers
from clientes import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'clientes', views.clientesView, 'clientes')

urlpatterns = [
    path('clientes/', include(router.urls)),
    path('docs/', include_docs_urls(title= 'Backend Api')),

]