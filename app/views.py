from django.shortcuts import render
from django.views.generic import CreateView, TemplateView, ListView
from .models import User
from .forms import UserForm


class StudentCreateView(CreateView):
	template_name_suffix = '_create'
	model = User
	form_class = UserForm


class HomePage(TemplateView):
	template_name = 'app/home.html'


class StudentListView(ListView):
	model = User
	template_name_suffix = '_student_list'
