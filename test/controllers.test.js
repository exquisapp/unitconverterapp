const assert = require("assert"),
    expect = require("chai").expect,
    should = require("chai").should();

const AppController = require("./../controllers/app.controller");

const mockCases = [
    {
        input: 44,
        answer: 24.41,
        source: "rankine",
        target: "kelvin"
    },
    {
        input: 42,
        answer: 2840.4,
        source: "litres",
        target: "tableSpooNs"
    },
    {
        input: 42,
        answer: 2840.38,
        source: "litRes",
        target: "tableSpooNs"
    },
    {
        input: 32,
        answer: 43,
        source: "CelSIus",
        target: "Fahrenheit"
    }
];

describe("conversion type checking", () => {
    try {
        it("different types invalid", () => {
            AppController.checkIfSameType(
                "kelvin",
                "pressure"
            ).valid.should.equal(false);
        });
        it("same types valid", () => {
            AppController.checkIfSameType(
                "cubic-feets",
                "litres"
            ).valid.should.equal(true);
        });
        it("case insensitive in checking", () => {
            AppController.checkIfSameType(
                mockCases[3].source,
                mockCases[3].target
            ).valid.should.equal(true);
            AppController.checkIfSameType(
                mockCases[2].source,
                mockCases[2].target
            ).valid.should.equal(true);
        });
    } catch (e) {
        console.log(e);
    }
});

describe("gives the right answer and correct status", () => {
    try {
        it("give correct answer when correct", () => {
            const { source, target, input, answer } = mockCases[0];
            const type = AppController.checkIfSameType(source, target).type;
            const {
                correct_answer,
                message
            } = AppController.getAnswerAndIfCorrect(
                source,
                target,
                type,
                input,
                answer
            );

            message.should.equal("incorrect");
            correct_answer.should.equal(24.4);
        });

        it("gives correct status when correct", () => {
            const { source, target, input, answer } = mockCases[1];
            const type = AppController.checkIfSameType(source, target).type;
            const {
                correct_answer,
                message
            } = AppController.getAnswerAndIfCorrect(
                source,
                target,
                type,
                input,
                answer
            );

            message.should.equal("correct");
            correct_answer.should.equal(2840.4);
        });
    } catch (e) {
        console.log(e);
    }
});
