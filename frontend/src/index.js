import React, { Component } from "react";
import { render } from "react-dom";
import "./style.scss";
import { Row } from "./reuse/qa_row";
import { postFunc } from "./reuse/api";
const _setState = (prop, val, el = this) => el.setState({ [prop]: val });

class App extends Component {
    state = {
        data: {
            input: "",
            source: "",
            source_type: "",
            target_type: "",
            target: "",
            answer: ""
        },
        error: "",
        output: "",
        loading: false
    };

    pickSource = value => {
        this.setState(
            prevState => {
                return {
                    ...prevState,
                    data: {
                        ...prevState.data,
                        source: value.split(",")[0],
                        source_type: value.split(",")[1]
                    }
                };
            },
            () => this.onSubmit()
        );
    };

    pickTarget = value => {
        this.setState(
            prevState => {
                return {
                    ...prevState,
                    data: {
                        ...prevState.data,
                        target: value.split(",")[0],
                        target_type: value.split(",")[1]
                    }
                };
            },
            () => this.onSubmit()
        );
    };

    pickInput = input =>
        this.setState(
            prevState => {
                return {
                    ...prevState,
                    data: {
                        ...prevState.data,
                        input
                    }
                };
            },
            () => this.onSubmit()
        );

    pickAnswer = answer =>
        this.setState(
            prevState => {
                return {
                    ...prevState,
                    data: {
                        ...prevState.data,
                        answer
                    }
                };
            },
            () => this.onSubmit()
        );

    onSubmit = () => {
        _setState("output", "", this);
        const { data } = this.state;
        const error =
            Object.values(data).filter(item => item === "").length > 0
                ? true
                : false;
        if (error) return;
        else if (data.source_type !== data.target_type)
            return _setState("output", "invalid", this);
        this.setState({ error: "", loading: true }, () =>
            postFunc(data).then(({ data: { message } }) =>
                this.setState({ output: message, loading: false })
            )
        );
    };

    render() {
        const { output } = this.state;
        return (
            <div className="container">
                <div className="top">
                    <h1>Unit Conversion App</h1>
                    <div className="table">
                        <div className="table-header">
                            <span>Input Numerical Value </span>
                            <span>Input Unit of Measure</span>
                            <span>Target Unit of Measure</span>
                            <span>Student Response</span>
                        </div>
                        <form className="table-body">
                            <Row
                                pickSource={this.pickSource}
                                pickTarget={this.pickTarget}
                                pickInput={this.pickInput}
                                pickAnswer={this.pickAnswer}
                            />
                        </form>
                    </div>
                </div>
                <div className="bottom">
                    <h2>Output (to 1d.p)</h2>
                    <span
                        id="output-text"
                        className={output}
                        style={{
                            color:
                                output.toLowerCase() === "invalid" ||
                                output.toLowerCase() === "incorrect"
                                    ? "#FE0002"
                                    : "#32A636"
                        }}>
                        {output}
                    </span>
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));
