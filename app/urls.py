from django.urls import path
from . import views

app_name = 'main'
urlpatterns = [
		path('', views.HomePage.as_view(), name='home'),
		path('user/add/', views.Registration.as_view(), name='register'),
		path('dashboard/', views.AssessmentView.as_view(), name='dashboard'),
		path('certificate/<int:pk>/', views.GetCerticateView.as_view(), name='certificate'),
		path('certificate/generate/', views.generate_certificate, name='gencertificate'),
	]