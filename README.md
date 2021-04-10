# Project 2: Few Fries Short (ffs)

## Description
In this project we have created a Content Management System (CMS) restuarant review site to publish reviews, comments and thoughts about restaurants and fast food outlets. It is created using the Model-View-Controller paradigm.

Features of this application include:
* Creating an account
* Adding restaurants
* Uploading photos of restaurants
* Adding reviews to restaurants
* Editing and deleting your own reviews
* Commenting on restaurants

The app is deployed on Heroku here: https://few-fries-short.herokuapp.com/

### MVC Model-View-Controller
MVC is short for Model, View, and Controller. MVC is a popular way of organizing code. The big idea behind MVC is that each section of your code has a purpose, and those purposes are different. Some of your code holds the data of your app, some of your code makes your app look nice, and some of your code controls how your app functions.

MVC is a way to organize your code’s core functions into their own, neatly organized boxes. This makes thinking about your app, revisiting your app, and sharing your app with others much easier and cleaner.

The parts of MVC Model: Model code typically reflects real-world things. This code can hold raw data, or it will define the essential components of your app. View: View code is made up of all the functions that directly interact with the user. This is the code that makes your app look nice, and otherwise defines how your user sees and interacts with it. Controller: Controller code acts as a liaison between the Model and the View, receiving user input and deciding what to do with it. It’s the brains of the application, and ties together the model and the view.

### Technologies Used
On the back-end:
* Node.js
* Express (sessions and handlebars included)
* MySQL
* Sequelize ORM
* BCrypt
* Cloudinary 

On the front-end:
* JavaScript/jQuery
* Semantic UI
* Handlebars.js

## Collaborators 
This was a collaborative project, made in equal parts by:
* [George](https://github.com/MyDryDay)
* [Livvy](https://github.com/oliviaowen1)
* [Sally](https://github.com/sallyxp)
* And myself, [Alisha](https://github.com/AlishaSaleh)

## Installation

* To install the necessary packages to run this application, run ``npm install`` in your CLI
* To use the database: change the credientials in ``config/connection.js`` to your own and run ``schema.sql`` in your database management application
* To use the application in a localhost run ``node server.js``

## Usage

The screenshot below demonstrates the homepage of the application: 

![homepage](/images/ffs-screenshot.png)

## License

> This project was created under the [MIT License](https://opensource.org/licenses/MIT)

[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://shields.io/)


