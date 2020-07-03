from django.shortcuts import render
from django.views.generic import CreateView, TemplateView, ListView, UpdateView
from .models import User, Occupation, Class
from .forms import UserForm
from django.views import View
from weasyprint import HTML, CSS
from django.contrib.auth.decorators import login_required
import os
from django.conf import settings
from django.template.loader import get_template
from django.http import HttpResponse


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


@login_required
def generate_certificate(request):
	user = request.user
	certificate_number = "COH-0{0:05}".format(1)

	context = {'user': user, 'certificate_number': certificate_number}
	template = 'app/certificate.html'
	template = get_template(template)
	html = template.render(context)

	css_string = """@page {
		size: a4 portrait;
		margin: 1mm;
		counter-increment: page;
	}"""

	pdf_file = HTML(string=html, base_url=request.build_absolute_uri()).write_pdf(
			stylesheets=[CSS(string=css_string)],presentational_hints=True)

	response = HttpResponse(pdf_file, content_type='application/pdf')
	response['Content-Disposition'] = 'filename="certificate.pdf"'
	return response
	return HttpResponse(response.getvalue(), content_type='application/pdf')


class GetCerticateView(UpdateView):
	model = User
	template_name='app/generate_certificate.html'
	fields = ['first_name', 'last_name', 'othername']
	success_url = '/certificate/generate/'
