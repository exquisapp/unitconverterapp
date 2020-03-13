const { oneDecimal } = require("./helpers/rounder");

const litres_tablespoons = (volume, dir) =>
    dir ? oneDecimal(volume * 67.628) : oneDecimal(volume / 67.628);
const litres_ci = (volume, dir) =>
    dir ? oneDecimal(volume * 61.024) : oneDecimal(volume / 61.024);
const litres_cf = (volume, dir) =>
    dir ? oneDecimal(volume / 28.317) : oneDecimal(volume * 28.317);
const litres_cups = (volume, dir) =>
    dir ? oneDecimal(volume * 4.167) : oneDecimal(volume / 4.167);
const litres_gallons = (volume, dir) =>
    dir ? oneDecimal(volume / 3.785) : oneDecimal(volume * 3.785);
const ci_tablespoons = (volume, dir) =>
    dir ? oneDecimal(volume * 1.108) : oneDecimal(volume / 1.108);
const ci_cf = (volume, dir) =>
    dir ? oneDecimal(volume / 1728) : oneDecimal(volume * 1728);
const ci_cups = (volume, dir) =>
    dir ? oneDecimal(volume / 14.646) : oneDecimal(volume * 14.646);
const ci_gallons = (volume, dir) =>
    dir ? oneDecimal(volume / 231) : oneDecimal(volume * 231);
const cf_tablespoons = (volume, dir) =>
    dir ? oneDecimal(volume * 1915.013) : volume / 1915.013;
const cf_cups = (volume, dir) =>
    dir ? oneDecimal(volume * 117.987) : oneDecimal(volume / 117.987);
const cf_gallons = (volume, dir) =>
    dir ? oneDecimal(volume * 7.481) : oneDecimal(volume / 7.481);
const cups_tablespoons = (volume, dir) =>
    dir ? oneDecimal(volume * 16.231) : oneDecimal(volume / 16.231);
const cups_gallons = (volume, dir) =>
    dir ? oneDecimal(volume / 15.773) : oneDecimal(volume * 15.773);
const tablespoons_gallons = (volume, dir) =>
    dir ? oneDecimal(volume / 256) : oneDecimal(volume * 256);

const conversions = [
    {
        a: "litres",
        b: "tablespoons",
        convert: value => litres_tablespoons(value, true)
    },
    {
        a: "tablespoons",
        b: "litres",
        convert: value => litres_tablespoons(value, false)
    },
    {
        a: "litres",
        b: "cubic-inches",
        convert: value => litres_ci(value, true)
    },
    {
        a: "cubic-inches",
        b: "litres",
        convert: value => litres_ci(value, false)
    },
    {
        a: "litres",
        b: "cubic-feets",
        convert: value => litres_cf(value, true)
    },
    {
        a: "cubic-feets",
        b: "litres",
        convert: value => litres_cf(value, false)
    },
    {
        a: "litres",
        b: "cups",
        convert: value => litres_cups(value, true)
    },
    {
        a: "cups",
        b: "litres",
        convert: value => litres_cups(value, false)
    },
    {
        a: "litres",
        b: "gallons",
        convert: value => litres_gallons(value, true)
    },
    {
        a: "gallons",
        b: "litres",
        convert: value => litres_gallons(value, false)
    },
    //
    {
        a: "cubic-inches",
        b: "tablespoons",
        convert: value => ci_tablespoons(value, true)
    },
    {
        a: "tablespoons",
        b: "cubic-inches",
        convert: value => ci_tablespoons(value, false)
    },
    {
        a: "cubic-inches",
        b: "cubic-feets",
        convert: value => ci_cf(value, true)
    },
    {
        a: "cubic-feets",
        b: "cubic-inches",
        convert: value => ci_cf(value, false)
    },
    {
        a: "cubic-inches",
        b: "cups",
        convert: value => ci_cups(value, true)
    },
    {
        a: "cups",
        b: "cubic-inches",
        convert: value => ci_cups(value, false)
    },
    {
        a: "cubic-inches",
        b: "gallons",
        convert: value => ci_gallons(value, true)
    },
    {
        a: "gallons",
        b: "cubic-inches",
        convert: value => ci_gallons(value, false)
    },
    //

    {
        a: "cubic-feets",
        b: "tablespoons",
        convert: value => cf_tablespoons(value, true)
    },
    {
        a: "tablespoons",
        b: "cubic-feets",
        convert: value => cf_tablespoons(value, false)
    },
    {
        a: "cubic-feets",
        b: "cups",
        convert: value => cf_cups(value, true)
    },
    {
        a: "cups",
        b: "cubic-feets",
        convert: value => cf_cups(value, false)
    },
    {
        a: "cubic-feets",
        b: "gallons",
        convert: value => cf_gallons(value, true)
    },
    {
        a: "gallons",
        b: "cubic-feets",
        convert: value => cf_gallons(value, false)
    },
    //
    {
        a: "cups",
        b: "tablespoons",
        convert: value => cups_tablespoons(value, true)
    },
    {
        a: "tablespoons",
        b: "cups",
        convert: value => cups_tablespoons(value, false)
    },
    {
        a: "cups",
        b: "gallons",
        convert: value => cups_gallons(value, true)
    },
    {
        a: "gallons",
        b: "cups",
        convert: value => cups_gallons(value, false)
    },
    //
    {
        a: "tablespoons",
        b: "gallons",
        convert: value => tablespoons_gallons(value, true)
    },
    {
        a: "gallons",
        b: "tablespoons",
        convert: value => tablespoons_gallons(value, false)
    }
];

module.exports = conversions;
