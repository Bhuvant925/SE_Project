from django.shortcuts import render
from django.http import HttpResponse
from .models import Course
# Create your views here.
def courses(request):
    return render(request,'courses.html')
def display(request):
    if request.method == 'POST':
            p= request.POST['search']
            interns = Course.objects.filter(Name__icontains=p).exists()
            if interns:
                interns=Course.objects.filter(Name__icontains=p)
                
                return render(request,'display.html',{'interns':interns})
            else:
                return render(request,'error.html')
                
    else:
          return render(request,'error.html')

# Create your views here.
