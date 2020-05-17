from django.urls import path
from . import views

urlpatterns = [
		path('', views.HomePage.as_view(), name='home_page'),

		path('students/', views.StudentListView.as_view(), name='student_list'),
		path('students/add/', views.StudentCreateView.as_view(), name='create_student'),
		path('user/add/save/', views.ProcessUser.as_view(), name='add_user'),


		path('ajax/occupation/', views.ajax_get_occupation, name='get_occupation'),

		path('', views.HomePage.as_view(), name='leader_list'),
		path('', views.HomePage.as_view(), name='citizen_list'),


	]