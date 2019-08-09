const { oneDecimal } = require("./helpers/rounder");

//functions
const kelvin_celsius = (temp, dir) =>
    dir ? oneDecimal(-273.15 + temp) : oneDecimal(273.15 + temp);
const kelvin_fahrenheit = (temp, dir) =>
    dir
        ? oneDecimal(((temp - 273.15) * 9) / 5 + 32)
        : oneDecimal(((temp - 32) * 5) / 9 + 273.15);
const kelvin_rankine = (temp, dir) =>
    dir ? oneDecimal(temp * 1.8) : oneDecimal(temp / 1.8);
const celsius_fahrenheit = (temp, dir) =>
    dir ? oneDecimal((temp * 9) / 5 + 32) : oneDecimal(((temp - 32) * 5) / 9);
const celsius_rankine = (temp, dir) =>
    dir
        ? oneDecimal((temp * 9) / 5 + 491.67)
        : oneDecimal(((temp - 491.67) * 5) / 9);
const fahrenheit_rankine = (temp, dir) =>
    dir ? oneDecimal(temp + 459.67) : oneDecimal(temp - 459.67);

//conversions
const conversions = [
    {
        a: "kelvin",
        b: "celsius",
        convert: value => kelvin_celsius(value, true)
    },
    {
        a: "celsius",
        b: "kelvin",
        convert: value => kelvin_celsius(value, false)
    },
    {
        a: "kelvin",
        b: "fahrenheit",
        convert: value => kelvin_fahrenheit(value, true)
    },
    {
        a: "fahrenheit",
        b: "kelvin",
        convert: value => kelvin_fahrenheit(value, false)
    },
    {
        a: "kelvin",
        b: "rankine",
        convert: value => kelvin_rankine(value, true)
    },
    {
        a: "rankine",
        b: "kelvin",
        convert: value => kelvin_rankine(value, false)
    },
    {
        a: "celsius",
        b: "fahrenheit",
        convert: value => celsius_fahrenheit(value, true)
    },
    {
        a: "fahrenheit",
        b: "celsius",
        convert: value => celsius_fahrenheit(value, false)
    },
    {
        a: "celsius",
        b: "rankine",
        convert: value => celsius_rankine(value, true)
    },
    {
        a: "rankine",
        b: "celsius",
        convert: value => celsius_rankine(value, false)
    },
    {
        a: "fahrenheit",
        b: "rankine",
        convert: value => fahrenheit_rankine(value, true)
    },
    {
        a: "rankine",
        b: "fahrenheit",
        convert: value => fahrenheit_rankine(value, false)
    }
];

module.exports = conversions;
