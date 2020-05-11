from django.urls import path
from . import views

urlpatterns = [
		path('', views.HomePage.as_view(), name='home_page'),

		path('students/', views.StudentListView.as_view(), name='student_list'),
		path('students/add/', views.StudentCreateView.as_view(), name='create_student'),

		path('', views.HomePage.as_view(), name='leader_list'),
		path('', views.HomePage.as_view(), name='citizen_list'),


	]