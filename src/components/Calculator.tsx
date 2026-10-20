import styled from "styled-components";
import { useState } from "react";

const StyledCalculator = styled.section`
    margin-top: 24px;
    padding: 3%;
    border: 1px solid #bcccdc;
    background-color: #d9e2ec;

    #calculator-inputs div { margin-bottom: 12px; }

    label {
        display: block;
        margin-bottom: 4px;
    }

    input {
        width: 100%;
        max-width: 300px;
        padding: 8px;
        border: 1px solid #829ab1;
        font-size: calc(16px + 0.3vw);
    }

    #calculator-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 16px;
    }

    button {
        padding: 8px 12px;
        border: 1px solid #243b53;
        background-color: #243b53;
        color: white;
        font-size: calc(16px + 0.3vw);
    }

    #output {
        min-height: 40px;
        padding: 8px;
        background-color: white;
        border: 1px solid #bcccdc;
    }
`;

function useCalculator() {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [result, setResult] = useState<number | string>("");

    function calculate(operation: string) {
        const first = Number(firstNumber);
        const second = Number(secondNumber);

        if (operation === "+") {
            setResult(first + second);
        } else if (operation === "-") {
            setResult(first - second);
        } else if (operation === "*") {
            setResult(first * second);
        } else if (operation === "/") {
            if (second === 0) {
                setResult("Cannot divide by zero.");
            } else {
                setResult(first / second);
            }
        } else if (operation === "**") {
            let answer = 1;
            let exponent = second;

            if (second % 1 !== 0) {
                setResult("Please use a whole number exponent.");
                return;
            }

            if (first === 0 && second < 0) {
                setResult("Cannot divide by zero.");
                return;
            }

            if (second < 0) {
                exponent = -second;
            }

            for (let i = 0; i < exponent; i = i + 1) {
                answer = answer * first;
            }

            if (second < 0) {
                answer = 1 / answer;
            }

            setResult(answer);
        }
    }

    function clearCalculator() {
        setFirstNumber("");
        setSecondNumber("");
        setResult("");
    }

    return {
        firstNumber, setFirstNumber,
        secondNumber, setSecondNumber,
        result, calculate, clearCalculator,
    };
}

export default function Calculator() {
    const {
        firstNumber, setFirstNumber,
        secondNumber, setSecondNumber,
        result, calculate, clearCalculator,
    } = useCalculator();

    return (
        <StyledCalculator id="calculator">
            <h2>JsCalc</h2>
            <div id="calculator-inputs">
                <div>
                    <label htmlFor="first-number">First Number:</label>
                    <input type="text" id="first-number" value={firstNumber}
                        onChange={(event) => setFirstNumber(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="second-number">Second Number:</label>
                    <input type="text" id="second-number" value={secondNumber}
                        onChange={(event) => setSecondNumber(event.target.value)} />
                </div>
            </div>
            <div id="calculator-buttons">
                <button type="button" onClick={() => calculate("+")}>+</button>
                <button type="button" onClick={() => calculate("-")}>-</button>
                <button type="button" onClick={() => calculate("*")}>*</button>
                <button type="button" onClick={() => calculate("/")}>/</button>
                <button type="button" onClick={() => calculate("**")}>**</button>
                <button type="button" onClick={clearCalculator}>Clear</button>
            </div>
            <div id="calculator-result">
                <h3>Result</h3>
                <p id="output" style={{ color: Number(result) < 0 ? "red" : "" }}>{result}</p>
            </div>
        </StyledCalculator>
    );
}
