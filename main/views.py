from django.shortcuts import render

def index(request):
    return render(request, 'index.html', {
        'title': 'Profile'
    })

def studies(request):
    return render(request, 'studies.html', {
        'title': 'Studies'
    })
    
def skills(request):
    return render(request, 'skills.html', {
        'title': 'Skills'
    })

def experience(request):
    return render(request, 'experiences.html', {
        'title': 'Experience'
    })

def hobbies(request):
    return render(request, 'hobbies.html', {
        'title': 'Hobbies'
    })

def about(request):
    return render(request, 'about.html', {
        'title': 'About'
    })