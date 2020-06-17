from django.shortcuts import render
from django.views.generic import CreateView, TemplateView, ListView
from .models import User, Occupation, Class
from .forms import UserForm
from django.views import View

class Registration(CreateView):
	template_name_suffix = '_create'
	model = User
	form_class = UserForm
	success_url = '/account/login/'

class HomePage(TemplateView):
	template_name = 'app/home.html'


class AssessmentView(TemplateView):
	template_name = 'app/dashboard.html'


class StudentListView(ListView):
	model = User
	template_name_suffix = '_student_list'


class ProcessUser(View):
	def post(self, request):
		print(request.POST)


def ajax_get_occupation(request):
	occ = request.GET.get('occupation')
	qs = Occupation.objects.filter(occupation__icontains=occ).first() or ''
	return render(request, 'app/occupation_list.html', {'occupation': qs})