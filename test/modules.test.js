const assert = require("assert");
const expect = require("chai").expect;
const should = require("chai").should();

const t_module = require("../modules/temperature.module");
const v_module = require("../modules/volume.module");

describe("Conversion of the temperature module", () => {
    it("Is should convert Fahrenheit to Rankine correctly", () => {
        parseFloat(Number(t_module[10].convert(32)).toFixed(1)).should.equal(
            491.7
        );
    });

    it("Is should convert Rankine to Fahrenheit correctly", () => {
        parseFloat(Number(t_module[11].convert(32)).toFixed(1)).should.equal(
            -427.7
        );
    });

    it("Is should convert Kelvin to Celsius correctly", () => {
        parseFloat(Number(t_module[0].convert(32)).toFixed(1)).should.equal(
            -241.1
        );
    });

    it("Is should convert Celsius to Kelvin correctly", () => {
        parseFloat(Number(t_module[1].convert(32)).toFixed(1)).should.equal(
            305.2
        );
    });

    it("Is should convert Kelvin to Fahrenheit correctly", () => {
        parseFloat(Number(t_module[2].convert(32)).toFixed(1)).should.equal(
            -402.1
        );
    });

    it("Is should convert Fahrenheit to Kelvin correctly", () => {
        parseFloat(Number(t_module[3].convert(32)).toFixed(1)).should.equal(
            273.2
        );
    });

    it("Is should convert Fahrenheit to Celsius correctly", () => {
        parseFloat(Number(t_module[7].convert(32)).toFixed(1)).should.equal(0);
    });

    it("Is should convert Celsius to Fahrenheit correctly", () => {
        parseFloat(Number(t_module[6].convert(32)).toFixed(1)).should.equal(
            89.6
        );
    });
});

describe("Conversion of the volume module", () => {
    it("Is should convert Litre to Cubic Inches correctly", () => {
        parseFloat(Number(v_module[2].convert(8)).toFixed(1)).should.equal(
            488.2
        );
    });

    it("Is should convert Cubic Inches to Litres correctly", () => {
        parseFloat(Number(v_module[3].convert(8)).toFixed(1)).should.equal(0.1);
    });

    it("should convert Litres to Cubic Feets correctly", () => {
        parseFloat(Number(v_module[4].convert(8)).toFixed(1)).should.equal(0.3);
    });

    it("should convert Cubic Feets to Litres correctly", () => {
        parseFloat(Number(v_module[5].convert(8)).toFixed(1)).should.equal(
            226.5
        );
    });

    it("should convert Litres to Cups correctly", () => {
        parseFloat(Number(v_module[6].convert(8)).toFixed(1)).should.equal(
            33.3
        );
    });
    it("should convert Cups to Litres correctly", () => {
        parseFloat(Number(v_module[7].convert(8)).toFixed(1)).should.equal(1.9);
    });

    it("should convert Litres to Gallons correctly", () => {
        parseFloat(Number(v_module[8].convert(8)).toFixed(1)).should.equal(2.1);
    });
    it("should convert Gallons to Litres correctly", () => {
        parseFloat(Number(v_module[9].convert(8)).toFixed(1)).should.equal(
            30.3
        );
    });

    it("should convert Cubic Inches to Tablespoons correctly", () => {
        parseFloat(Number(v_module[10].convert(8)).toFixed(1)).should.equal(
            8.9
        );
    });
    it("should convert Tablespoons to Cubic Inches correctly", () => {
        parseFloat(Number(v_module[11].convert(8)).toFixed(1)).should.equal(
            7.2
        );
    });

    it("should convert Cubic Inches to Cubic Feets correctly", () => {
        parseFloat(Number(v_module[12].convert(8)).toFixed(1)).should.equal(
            0.0
        );
    });
    it("should convert Cubic Feets to Cubic Inches correctly", () => {
        parseFloat(Number(v_module[13].convert(8)).toFixed(1)).should.equal(
            13824.0
        );
    });

    it("should convert Cubic Inches to Cups correctly", () => {
        parseFloat(Number(v_module[14].convert(8)).toFixed(1)).should.equal(
            0.5
        );
    });
    it("should convert Cups to Cubic Inches correctly", () => {
        parseFloat(Number(v_module[15].convert(8)).toFixed(1)).should.equal(
            117.2
        );
    });

    it("should convert Cubic Inches to Gallons correctly", () => {
        parseFloat(Number(v_module[16].convert(8)).toFixed(1)).should.equal(
            0.0
        );
    });
    it("should convert Gallons to Cubic Inches correctly", () => {
        parseFloat(Number(v_module[17].convert(8)).toFixed(1)).should.equal(
            1848.0
        );
    });

    it("should convert Cubic Feets to Tablespoons correctly", () => {
        parseFloat(Number(v_module[18].convert(8)).toFixed(1)).should.equal(
            15320.1
        );
    });
    it("should convert Tablespoons to Cubic Feets correctly", () => {
        parseFloat(Number(v_module[19].convert(8)).toFixed(1)).should.equal(
            0.0
        );
    });

    it("should convert Cubic Feets to Cups correctly", () => {
        parseFloat(Number(v_module[20].convert(8)).toFixed(1)).should.equal(
            943.9
        );
    });
    it("should convert Cups to Cubic Feets correctly", () => {
        parseFloat(Number(v_module[21].convert(8)).toFixed(1)).should.equal(
            0.1
        );
    });

    it("should convert Cubic Feets to Gallons correctly", () => {
        parseFloat(Number(v_module[22].convert(8)).toFixed(1)).should.equal(
            59.8
        );
    });
    it("should convert Gallons to Cubic Feets correctly", () => {
        parseFloat(Number(v_module[23].convert(8)).toFixed(1)).should.equal(
            1.1
        );
    });

    it("should convert Cups to Tablespoons correctly", () => {
        parseFloat(Number(v_module[24].convert(8)).toFixed(1)).should.equal(
            129.8
        );
    });
    it("should convert Tablespoons to Cups correctly", () => {
        parseFloat(Number(v_module[25].convert(8)).toFixed(1)).should.equal(
            0.5
        );
    });

    it("should convert Cups to Gallons correctly", () => {
        parseFloat(Number(v_module[26].convert(8)).toFixed(1)).should.equal(
            0.5
        );
    });
    it("should convert Gallons to Cups correctly", () => {
        parseFloat(Number(v_module[27].convert(8)).toFixed(1)).should.equal(
            126.2
        );
    });

    it("should convert Tablespoons to Gallons correctly", () => {
        parseFloat(Number(v_module[28].convert(8)).toFixed(1)).should.equal(
            0.0
        );
    });
    it("should convert Gallons to Tablespoons correctly", () => {
        parseFloat(Number(v_module[29].convert(8)).toFixed(1)).should.equal(
            2048.0
        );
    });
});
