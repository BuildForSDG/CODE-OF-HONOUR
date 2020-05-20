# CODE OF HONOR SIMPLE DOCS

## Query Student Class
```Class.objects.filter(is_student=True).first()```

## Query Student Users
```clss = Class.objects.filter(is_student=True).first()```
```users = clss.user_set.all()```

## Add User to students group
```user = 'any created user object'```
```clss = Class.objects.filter(is_student=True).first()```
```clss.user_set.add(user)```


## Check User permission in templates
SYNTAX: ```if perms.<app_name>.<permission_code>```

persmission_code is action (add, view, change, delete) underscore model name

``` if perms.app.view_class ```
