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
		
		
		
		
		
		
#  Model Structure		
'''

class student(models.Model):
    gender_choices = (('male','male'), ('female','female'))
    religion_choices = (('muslim','muslim'), ('christian','christian'))
    Students_class = (
			('Nursery School', 'Nursery School'),
			('Primary School', 'Primary School'),
            ('Junior Secondry', 'Junior Secondry'),
            ('Senior Secondry', 'Senior Secondry'),
            ('Undergraduate', 'Undergraduate'),
            ('Graduate', 'Graduate'),
            ('Phd', 'Phd'),
			)


    first_name  = models.CharField(max_length=50,null=True,blank=True)
    last_name   = models.CharField(max_length=50, null=True, blank=True)
    phone = models.CharField(max_length=200, null=True)
    date_birth  = models.DateField(null=True, blank=True)
    email = models.EmailField(max_length=100, null=True, blank=True)
    students_class = models.CharField(max_length=200, null=True, choices=Students_class)
    gender = models.CharField(max_length=50, null=True, blank=True,choices=gender_choices)
    religion = models.CharField(max_length=50, null=True, blank=True,choices=religion_choices)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    student_img = models.ImageField(upload_to='images/logos', null=True, blank=True)

    def __str__(self):
        return self.first_name + " " + self.last_name

class leader(models.Model):
    gender_choices = (('male','male'), ('female','female'))
    religion_choices = (('muslim','muslim'), ('christian','christian'))
    Leaders_class = (
			('Community Leaders', 'Community Leaders'),
			('Religious Leaders', 'Religious Leaders'),
            ('Business Leaders', 'Business Leaders'),
            ('Government Leaders', 'Government Leaders'),
			)


    first_name  = models.CharField(max_length=50,null=True,blank=True)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    phone = models.CharField(max_length=200, null=True)
    date_birth  = models.DateField(null=True, blank=True)
    email = models.EmailField(max_length=100, null=True, blank=True)
    occupation = models.CharField(max_length=50, null=True, blank=True)
    leaders_class = models.CharField(max_length=200, null=True, choices=Leaders_class)
    gender = models.CharField(max_length=50, null=True, blank=True,choices=gender_choices)
    religion = models.CharField(max_length=50, null=True, blank=True,choices=religion_choices)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    #img = models.ImageField(upload_to=upload_img,null=True, blank=True)
    leader_img = models.ImageField(upload_to='images/logos', null=True, blank=True)

    def __str__(self):
        return self.first_name + " " + self.last_name


class citizen(models.Model):
    gender_choices = (('male','male'), ('female','female'))
    religion_choices = (('muslim','muslim'), ('christian','christian'))
    Citizens_class = (
			('Architecture And Engineering', 'Architecture And Engineering'),
			('Art Design Entertaiment sport Media', 'Art Design Entertaiment sport Media'),
            ('Building And Grounds Maintenance', 'Building And Grounds Maintenance'),
            ('Business And Financial', 'Business And Financial'),
            ('Community And Social Services', 'Community And Social Services'),
            ('Computer And Information Technology', 'Computer And Information Technology'),
            ('Construction', 'Construction'),
            ('Education', 'Education'),
            ('Farming  Fishing And Forestry', 'Farming  Fishing And Forestry'),
            ('Food Preparation', 'Food Preparation'),
            ('Health Care', 'Health Care'),
            ('Maintenance And Repair', 'Maintenance And Repair'),
            ('Law And Legal', 'Law And Legal'),
            ('Life Physical And Social Science', 'Life Physical And Social Science'),
            ('Management', 'Management'),
            ('Millitary', 'Millitary'),
            ('Office And Administrative Support', 'Office And Administrative Support'),
            ('Personal Care And Service', 'Personal Care And Service'),
            ('Production', 'Production'),
            ('Protective', 'Protective'),
            ('Sales', 'Sales'),
            ('Transportation', 'Transportation'),
			)


    first_name  = models.CharField(max_length=50,null=True,blank=True)
    last_name   = models.CharField(max_length=50, null=True, blank=True)
    phone = models.CharField(max_length=200, null=True)
    date_birth  = models.DateField(null=True, blank=True)
    email = models.EmailField(max_length=100, null=True, blank=True)
    occupation   = models.CharField(max_length=50, null=True, blank=True)
    citizens_class = models.CharField(max_length=200, null=True, choices=Citizens_class)
    gender = models.CharField(max_length=50, null=True, blank=True,choices=gender_choices)
    religion = models.CharField(max_length=50, null=True, blank=True,choices=religion_choices)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    #img = models.ImageField(upload_to=upload_img,null=True, blank=True)
    citizen_img = models.ImageField(upload_to='images/logos', null=True, blank=True)

    def __str__(self):
        return self.first_name + " " + self.last_name
	
'''
