from django.urls import path
from . import views


app_name = 'main'
urlpatterns = [
		path('', views.HomePage.as_view(), name='home'),
		path('user/add/', views.Registration.as_view(), name='register'),
		path('dashboard/', views.AssessmentView.as_view(), name='assessment'),
	]