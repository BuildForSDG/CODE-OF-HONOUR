from django import forms
from .models import User, Occupation



class StudentForm(forms.ModelForm):
	class Meta:
		model = User
		exclude = ['',]


class UserForm(forms.ModelForm):
	is_student = forms.BooleanField(required=False)
	occupation = forms.CharField(max_length=100)
	
	def __init__(self, *args, **kwargs):
		super(UserForm, self).__init__()
		self.fields['is_student'].widget.attrs['hidden'] = 'True'
		self.fields['is_student'].widget.attrs['checked'] = 'True'
		self.fields['is_student'].label = ''

		self.fields['occupation'].widget.attrs['class'] = 'occupation'

	class Meta:
		model = User
		fields = ['first_name', 'last_name', 'othername', 'phone', 'email', 'sex', 'age']