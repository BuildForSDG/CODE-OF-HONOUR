from django.db import models
from django.contrib.auth.models import AbstractUser, Group


MALE = 'Male'
FEMALE = 'Female'
OTHER = 'Other'

class User(AbstractUser):
	othername = models.CharField(max_length=20)
	phone = models.CharField(max_length=15)
	_class = models.ForeignKey('Class', on_delete=models.CASCADE, blank=True, null=True)
	age = models.PositiveIntegerField(default=0)
	sex = models.CharField(max_length=6, choices=(('Male', MALE), ('Female', FEMALE), ('Other', OTHER)))
	is_student = models.BooleanField(default=False)
	is_leader = models.BooleanField(default=False)
	is_citizen = models.BooleanField(default=False)


	def __str__(self):
		return self.get_full_name()


	def get_full_name(self):
		return f"{self.first_name or self.username} {self.last_name} {self.othername}"

	def get_user_type(self):
		return "Student" if self.is_student else 'Leader' if self.is_leader else 'Citizen'

	class Meta:
		verbose_name_plural = 'Users'


class Occupation(models.Model):
	occupation = models.CharField(max_length=50)


	def __str__(self):
		return self.occupation

	class Meta:
		verbose_name_plural = 'Occupations'



class Class(models.Model):
	name = models.CharField(max_length=20)

	def __str__(self):
		return self.name


	class Meta:
		permissions = ()
		verbose_name_plural = 'Classes'



class Subject(models.Model):
	name = models.CharField(max_length=20)
	_class = models.ForeignKey(Class, on_delete=models.CASCADE)


	def __str__(self):
		return self.name

	class Meta:
		permissions = ()
		verbose_name_plural = 'Subjects'
