from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'dock/index.html')

def login(request):
    return render(request, 'dock/login.html')

def register(request):
    return render(request, 'dock/register.html')

def options(request):
    return render(request, 'dock/options.html')