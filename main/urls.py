from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name="index"),
    path('studies/', views.studies, name='studies'),
    path('skills/', views.skills, name='skills'),
    path('experience/', views.experience, name="experience"),
    path('hobbies/', views.hobbies, name="hobbies"),
    path('about/', views.about, name="about")
]
