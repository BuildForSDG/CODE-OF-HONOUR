from django import forms
from .models import User



class StudentForm(forms.ModelForm):
	class Meta:
		model = User
		exclude = ['occupation',]


class UserForm(forms.ModelForm):
	class Meta:
		model = User
		fields = ['first_name', 'last_name', 'othername', 'phone', 'email', 'sex', 'age', 'occupation']
		