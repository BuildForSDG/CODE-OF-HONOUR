from django import forms
from .models import User, Occupation
from django.contrib.auth.hashers import make_password


class StudentForm(forms.ModelForm):
	class Meta:
		model = User
		exclude = ['',]


class UserForm(forms.ModelForm):
	occupation = forms.ModelChoiceField(
		queryset=Occupation.objects.all()
	)

	def clean_password(self):
		plain_password = self.cleaned_data['password']
		password = make_password(plain_password)
		return password

	class Meta:
		model = User
		fields = ['username', 'password', 'first_name', 'last_name', 'othername', 'phone', 'email', 'sex', 'age']