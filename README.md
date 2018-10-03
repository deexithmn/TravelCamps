# TravelCamps
Web application for getting Travel camps using NodeJS, express, mongoDB and Semantic UI with passport authentication library. 

Camps can be added by logging in and giving the details and submitting the form.

* NoSQL is used to store, fetch and interact with the database. MongoDB is used as the DB to store the user details and camp details.
* Styling is done using CSS and the semantic UI library.
* npm packages like express, ejs, body-parser, mongoose, method-override, sanitizer, passport-local are used.
* method-override is used as PUT and DELETE can't be written on HTML we use method-override to override the POST method written on HTML-form.
* CRUD operations are performed for Camps and related comments.
* User authorizations is considered to edit an added camp or comment.
