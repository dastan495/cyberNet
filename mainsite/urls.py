
from django.contrib import admin
from django.urls import path
from setting.views import SendEmailAPIView
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('send/', SendEmailAPIView.as_view()),
    
    path('', TemplateView.as_view(template_name='index.html')),
    path('/', TemplateView.as_view(template_name='index.html')),
    path('/meeting', TemplateView.as_view(template_name='index.html')),
    path('/meeting/', TemplateView.as_view(template_name='index.html')),
]
