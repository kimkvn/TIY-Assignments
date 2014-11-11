#HTML Forms

the ``<form>`` element and its attributes contain interactions which allow
users to submit information to a server.

###Attributes

1) ``accept`` - a list of content types that the server will okay. Items separated by commas.
```html
<input type="file" accept="audio/*;capture=microphone">
<input type="file" accept="image/*;capture=camera">
<input type="file" accept="video/*;capture=camcorder">
```

2) ``accept-charset`` - list of character encodings that the server will okay. Browser uses
the list in order in order they are listed.
```html
<form action="#URL#" method="post" accept-charset="UTF-8">
```

3) ``action`` - the URI (Uniform Resource Identifier) of a program that processes information from the form. The form is useless unless action is used to tell the browser what page/script to call after submitting.
```html
<form action="form-to-email.php" method="post"
    accept-charset="windows-1252">
```

4) ``autocapitalize`` - nonstandard and is used by iOS Safari Mobile -- this controls how text in a form
should be automatically cap'd as it's being entered by the user. Can autocap ``none``, ``sentences`` which
will autocap first letter of sentences, ``words`` autocaps all words, ``characters`` autocaps all characters.
```html
 <input
                type="text"
                autocapitalize="off"
                autocorrect="off"
                style="width: 180px ;"
                />
```

5) ``autocomplete`` - indicates whether input elements can have their values be completed automatically by the browser. Can be ``on`` or ``off``.

6) ``enctype`` - fires when the ``method`` atribute is ``post``.

7) ``method`` - HTTP method that the browser uses to submit the form. Values are ``post``: form data are included in form body and sent to the server,  or ``get``: data appended to the action attribute URI and result is sent to the server.
```html
 <FORM action="http://somesite.com/prog/adduser" method="post">
```

8) ``name`` - name of the form. Not really applicable these days, apparently.

9) ``novalidate`` - Boolean in nature, says to not validate the form when submitted. Can be overridden.
```html
<form novalidate>
  <input type=number name=num step=5>
</form>
```

10) ``target`` - is a name or keyword, indicates where to display the response that is received after submitting the form. Several keywords:
  * ``_self``: load response/window into same HTML frame
  * ``_blank``: load response/window into new HTML frame
  * ``_parent``: load response into HTML frameset of the parent of the current frame
  * ``_top``: Load response into the full original window and cancel all other frames.
  ```html
  <a href="newwindow.html" target="_blank">a new window</a>
  ```
