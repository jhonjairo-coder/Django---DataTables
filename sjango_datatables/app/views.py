from django.shortcuts import render
from .models import Programer
from django.http.response import JsonResponse

# Create your views here.

def index(request):
    return render(request, 'index.html')

def list_programers(request):
    programmers=list(Programer.objects.values())
    data={'programmers':programmers}
    return JsonResponse(data)


