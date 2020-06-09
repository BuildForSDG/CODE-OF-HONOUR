from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.contrib.auth.views import LoginView, LogoutView

urlpatterns = [
	path('', include('app.urls'), name='home'),
	path('about/', TemplateView.as_view(template_name='about.html'), name='about'),
	path('account/login/', LoginView.as_view(template_name='login.html'), name='login'),
	path('account/logout/', LogoutView.as_view(), name='logout'),
    path('admin/', admin.site.urls),
]
