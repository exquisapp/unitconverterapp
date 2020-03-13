import React from "react";
import { Arr } from "./units";
export const Row = ({ pickSource, pickTarget, answer, pickAnswer, pickInput, input }) => (
    <>
        <input
            type="text"
            id="input1"
            value={input}
            placeholder="Input value"
            onChange={({ target: { value } }) => pickInput(value)}
        />

        <select
            className="selectBox"
            id="select1"
            onChange={({ target: { value } }) => pickSource(value)}>
            <option>Select Unit</option>
            {Arr.map(({ item, id, type }) => (
                <option key={id} value={[item, type]}>
                    {item}
                </option>
            ))}
        </select>

        <select
            className="selectBox"
            id="select2"
            onChange={({ target: { value } }) => pickTarget(value)}>
            <option>Select Unit</option>
            {Arr.map(({ item, id, type }) => (
                <option key={id} value={[item, type]}>
                    {item}
                </option>
            ))}
        </select>

        <input
            placeholder="Answer"
            id="input2"
            value={answer}
            onChange={({ target: { value } }) => pickAnswer(value)}
        />
    </>
);
