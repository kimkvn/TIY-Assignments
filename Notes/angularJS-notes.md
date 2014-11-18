##AngularJS - framework parts

####functions

1) ``angular.module`` - the main hub for all Angular module traffic: creating, registering, and retrieving modules.

2) ``angular.extends`` - affect the destiation ``dst``; copies properties from ``src`` objects to ``dst``. Multiple ``src`` objects can be sourced.

3) ``angular.copy`` - creates a deep copy of ``src``, which is an object or array.

4) ``angular.element`` - wraps a DOM element or HTML string as a jQuery element.


####Directives

5) ``ngApp`` - will auto-bootstrap an AngularJS app. Usually found on the root element of the app, as in on the ``<body>`` tag. Only 1 per HTML document.

6) ``ngBind`` - replaces the text content of a specific HTML element with the value of a given expression. Will update the text content when the expression changes.

7) ``ngClass`` - set CSS classes onto an HTML element

8) ``ngClick`` - specify custom behavior when an element is clicked

9) ``ngController`` - attaches a controller class to the view. VERY IMPORTANT to the overall funcionatlity of angular, and its applying princples behind the Model-View-Controler design pattern.

10) ``ngDblclick`` - specficy behavior when an element is double clicked.

11) ``ngForm`` - alias of ``form`` directive, nestable version.

12) ``ngKeyup`` - specify custom behavior on a keyup event (set the keyup value to its corresponding keyboard value)

13) ``ngModel`` - binds input, select, textarea to a property on the scope. Uses ngModelController, which is created by this directive.

14) ``ngRepeat`` - indicates infomration should be repeated/appended onto specified html templates.

15) ``ngSubmit`` - enables binding angular expressions to onsubmit eevents.
