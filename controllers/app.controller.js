const t_module = require("./../modules/temperature.module");
const v_module = require("./../modules/volume.module");

const getAnswerAndIfCorrect = (
    _source,
    _target,
    type,
    input,
    student_response
) => {

    _source = _source.toLowerCase();
    _target = _target.toLowerCase();
    
    if (type === "T") {
        return t_module.reduce((acc, eachTempConversion) => {
            if (_source === eachTempConversion.a && _target === eachTempConversion.b) {
                acc.correct_answer = parseFloat(Number(eachTempConversion.convert(input)).toFixed(1));
                acc.message = acc.correct_answer === student_response? "correct" : "incorrect";
            }
            return acc;
        }, {});
    } else if (type === "V") {
        return v_module.reduce((acc, eachVolConversion) => {
            if (_source === eachVolConversion.a && _target === eachVolConversion.b) {
                acc.correct_answer = parseFloat(Number(eachVolConversion.convert(input)).toFixed(1));
                acc.message = acc.correct_answer === student_response ? "correct" : "incorrect";
            }
            return acc;
        }, {});
    }
};

const checkIfSameType = (_source, _target) => {
    //convert all to lowercase
    const source = _source.toLowerCase();
    const target = _target.toLowerCase();

    //declare known types
    const temperatureTypes = ["kelvin", "fahrenheit", "celsius", "rankine"];
    const volumeTypes = [
        "litres",
        "tablespoons",
        "cubic-inches",
        "cups",
        "cubic-feets",
        "gallons"
    ];

    if (temperatureTypes.includes(source)) {
        return { type: "T", valid: temperatureTypes.includes(target) };
    } else if (temperatureTypes.includes(target)) {
        return { type: "T", valid: temperatureTypes.includes(source) };
    } else if (volumeTypes.includes(source)) {
        return { type: "V", valid: volumeTypes.includes(target) };
    } else if (volumeTypes.includes(target)) {
        return { type: "V", valid: volumeTypes.includes(source) };
    } else {
        return { type: null, valid: false };
    }
};

module.exports = {
    checkIfSameType,
    getAnswerAndIfCorrect
};
