from django.shortcuts import render

# Create your views here.
def main(request):
    return render(request, "index.html")

def about(request):
    return render(request, "about.html")

def sign(request):
    return render(request, "sign.html")