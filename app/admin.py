from django.contrib import admin
from .models import *


class UserAdmin(admin.ModelAdmin):
	list_display = ['first_name', 'last_name', 'username']

class OccupationAdmin(admin.ModelAdmin):
	list_display = ['occupation']

admin.site.register(User, UserAdmin)
admin.site.register(Class)
admin.site.register(Subject)
admin.site.register(Occupation, OccupationAdmin)