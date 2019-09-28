# Rise UP Do not be afraid to Rise up


This is the Rise up project for Code for Good 2019 in Delaware

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
latest version of node js
npm
browser

```

### Installing

A step by step series of examples that tell you how to get a development env running on windows only
if you want to test on mac you must download ngrok from https://ngrok.com/

Make sure you get your accountSid and authToken and your twilio number from the console page at Twilio, and change it in the consts in the app.js - side note once I get time I will make sure that process.env will work for the codes so that you only have to edit configs.

This is for a local enviorment to run the code

```
git clone directory
cd Therapy
npm i
node app.js
```
In a seperate Terminal/Command Prompt for windows
```
cd Therapy
ngrok.exe http 3000
```
Open the url that ngrok gives you

You must also takes this url and the post request adress which is /messageComesIn and add it to your phone number in twilio it is in the Twilio Website under your Twilio Number

It should look like this

![Screenshot](ScreenShot.JPG)

You should change the url under the Messaging tab in the webhook field, there is already an example there for you.



## Built With

* [NodeJs](https://nodejs.org/en/) - Backend Server used
* [ExpressJS](https://expressjs.com/) - Routing Service
* [Socket Io](https://socket.io/) - Used to Easily route data from client page to the server
* [Twilio](http://twilio.com) - Used to connect people using their awesome api


## Authors

* **Shreyas Patil** - *Backend and some Front End* - [Shreyas Patil](https://github.com/ShreyasP1a)

* **Annie Brey** - *Front End* 


