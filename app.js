const express = require('express');
const control = require('./controllers/app.controller');
const approx = require('./modules/helpers/rounder').oneDecimalApproximate;
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
});

app.post('/input', (req, res) => {

  try {
    const { source, target, answer, input } = req.body;
    const _source = source.toLowerCase(),
        _target = target.toLowerCase(),
        student_response = approx(parseFloat(answer)),
		_input = parseFloat(Number(input));

    const { valid, type } = control.checkIfSameType(_source, _target);


    if(valid && source === target) {
      // do the conversion
      return res.status(200).json({...control.getAnswerAndIfCorrect(_source, _target, type, _input, student_response)});
    } else {
        // return invalid message
        return res.status(200).json({ message: "invalid" });
    }
  } catch(err) {
    return res.status(500).json({ err });
  }


});

module.exports = app;