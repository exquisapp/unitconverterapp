const express = require('express');
const control = require('./controllers/app.controller');
const app = express();
const bodyParser = require('body-parser');

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


app.post('/input', (req, res, next) => {

  try {
    const { source, target, answer, input } = req.body;
    const _source = source.toLowerCase(),
          _target = target.toLowerCase(),
          student_response = parseFloat(Number(answer).toFixed(1)),
          _input = parseFloat(Number(input).toFixed(1));

    const { valid, type } = control.checkIfSameType(_source, _target);

    if(valid){
      // do the conversion
      return res.status(200).json({...control.getAnswerAndIfCorrect(_source, _target, type, _input, student_response)});
    } else {
        // return invalid message
        return res.status(200).json({ message: "invalid" });
    }
  } catch(err){
    return res.status(500).json({ err });
  }
  next();

});

app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Welcome to Units Conversion App!' });
});

module.exports = app;