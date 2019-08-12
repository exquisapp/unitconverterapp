# Units Converter App
App converts from different units of measure of temperature and volumes to the other

## View the App
The responsive design of the app makes it visible on all screen sizes. View the app by navigating to  [https://unit-converter-app.herokuapp.com](https://unit-converter-app.herokuapp.com)

## How to Install
Git clone and install with the following commands:

```sh
$ git clone https://github.com/exquisapp/unitconverterapp.git
$ cd unitconverterapp
$ npm install
$ cd ..
$ npm start
$ cd frontend
$ npm start
```

## For Unit Testing
Test back end Node.js modules with Mocha by running the command:

```sh
$ cd unitconverterapp
$ npm test
```

To test front end React.js with Cypress, first start the app with the commands:

```sh
$ cd unitconverterapp/frontend
$ npm start
```

Test front end by copying the test file(s) to the path "unitconverterapp/frontend/cypress/" and run following commands:

```sh
$ npm run cy:open
```

Cypress automatically launches in the default browser
Click the "Run all Scripts" button in the browser to run all tests