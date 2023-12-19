from rest_framework import viewsets
from .serializer import planesSerializer
from .models import Planes
from django.contrib.auth import login, logout, authenticate
from django.db import IntegrityError
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.shortcuts import render, redirect
from .models import Planes


# Create your views here.

class planesView(viewsets.ModelViewSet):
    serializer_class = planesSerializer
    queryset = Planes.objects.all()

# Create your views here.

def home(request):
    return render(request, 'home.html')


def signup(request):

    if request.method == 'GET':
        return render(request, 'signup.html', {
            'form': UserCreationForm
        })
    else:
        if request.POST['password1'] == request.POST['password2']:
            try:
                user = User.objects.create_user(username=request.POST['username'],
                                                password=request.POST['password1'])
                user.save()
                login(request, user)
                return redirect('pagos')
            except IntegrityError:
                return render(request, 'signup.html', {
                    'form': UserCreationForm,
                    'error': 'El usuario ya existe'
            })
           
        return render(request, 'signup.html', {
            'form': UserCreationForm,
            'error': 'Contraseñas no coinciden'
        })



def pagos(request):
    return render(request, 'pagos.html')

def crearPago(request):
    if request.method == 'GET':
        return render(request, 'crearPago.html', {
        'form': Planes
        })
    else:
        print(request.POST)
        return render(request, 'crearPago.html', {
        'form': Planes
    })
    

def cerrarSesion(request):
    logout(request)
    return redirect('home')

def iniciarSesion(request):
    if request.method == 'GET':
        return render(request, 'login.html', {
            'form': AuthenticationForm
        })
    else:
        user = authenticate(request, username=request.POST['username'], password=request.POST['password'])
        if user is None:
            return render(request, 'login.html', {
                'form': AuthenticationForm,
                'error': 'El usuario o la contraseña es incorrecto'
            })
        else:
            login(request, user)
            # Redirige a http://localhost:5173 después de iniciar sesión con éxito
            return redirect('http://localhost:5173')

