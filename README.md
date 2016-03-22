##Makers BnB Rails and Angular
==============================

##Description

The challenge for this week was to build a replica AirBnB app using a Ruby on Rails backend and AngularJS frontend.

##Team Members

-Eduardo M. Sanchez Delgado https://github.com/hedudelgado
-Russel; Vaugham https://github.com/russellvaughan
-Matt Gough https://github.com/MattGough
-Mark Hill https://github.com/markcmhill

##Technology Used

AngularJS
- Protractor
- Karma

Ruby on Rails
- Rspec


###Installation Instructions

```
git clone https://github.com/russellvaughan/makers-bnb-ra.git
cd makersBnB
bundle install
rake db:create
rake db:migrate
npm install bower -g
rake bower:install
rake routes 
rails s
```

Launch the Angular server
--------------------------
Go to http://localhost:3000 (or any other path the Api uses) in your browser, make sure the server is running.

Testing Instructions
----------------------

RSpec (unit and feature tests)

```
rails g rspec:install
rspec
```


JavaScript/Angular - Testing
-----------------------------

Make sure the rails server is running for testing angular as they interact within the end to end tests(e2e)

Make sure you are in Frontend directory.
for  JavaScript/Angular - e2e tests run:

```
npm install
rails s (separate command line)
npm run Protractor
```

To test drive the app, make sure you have the Rails and Angular severs running in different command line windows, then in your brower visit:
For Rails http://localhost:3000 
For Angularjs http://localhost:8000 