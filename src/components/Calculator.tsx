import { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import { calculate } from "../utils/calculate";
import styles from "../styles/Calculator.module.scss";

const Calculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleInput = (value: string) => {
    if (error) setError("");
    setInput((prev) => prev + value);
  };

  const handleEquals = () => {
    try {
      let newInput = input;
      const openParenthesis = (input.match(/\(/g) || []).length;
      const closedParenthesis = (input.match(/\)/g) || []).length;
      const missingParenthesis = openParenthesis - closedParenthesis;
      if (missingParenthesis > 0) {
        newInput += ")".repeat(missingParenthesis);
      } else if (missingParenthesis < 0) {
        throw new Error("Missing opening parenthesis");
      }
      const result = calculate(newInput);
      setResult(result);
      setInput("");
    } catch (e: any) {
      setResult("");
      setInput("");
      setError(e.message);
    }
  };

  const handleClear = () => {
    setResult("");
    setInput("");
    setError("");
  };

  const handleFunction = (fn: string) => {
    const lastInput = input[input.length - 1];
    const isNumber = !isNaN(parseInt(lastInput));
    handleInput(isNumber ? `*${fn}(` : `${fn}(`);
  };

  return (
    <div className={styles.calculator}>
      <Display value={input || result} error={error} />
      <div className={styles.keypad}>
        <Button
          type="special"
          label="√"
          onClick={() => handleFunction("sqrt")}
        />
        <Button
          type="special"
          label="!"
          onClick={() => handleFunction("factorial")}
        />
        <Button type="special" label="π" onClick={() => handleInput("pi")} />
        <Button type="special" label="e" onClick={() => handleInput("e")} />

        <Button
          type="special"
          label="sin"
          onClick={() => handleFunction("sin")}
        />
        <Button
          type="special"
          label="cos"
          onClick={() => handleFunction("cos")}
        />
        <Button
          type="special"
          label="tan"
          onClick={() => handleFunction("tan")}
        />
        <Button
          type="special"
          label="In"
          onClick={() => handleFunction("ln")}
        />

        <Button type="special" label="(" onClick={() => handleInput("(")} />
        <Button type="special" label=")" onClick={() => handleInput(")")} />
        <Button type="special" label="%" onClick={() => handleInput("%")} />
        <Button type="special" label="÷" onClick={() => handleInput("/")} />

        <Button label="7" onClick={() => handleInput("7")} />
        <Button label="8" onClick={() => handleInput("8")} />
        <Button label="9" onClick={() => handleInput("9")} />
        <Button type="special" label="×" onClick={() => handleInput("*")} />

        <Button label="4" onClick={() => handleInput("4")} />
        <Button label="5" onClick={() => handleInput("5")} />
        <Button label="6" onClick={() => handleInput("6")} />
        <Button type="special" label="+" onClick={() => handleInput("+")} />

        <Button label="1" onClick={() => handleInput("1")} />
        <Button label="2" onClick={() => handleInput("2")} />
        <Button label="3" onClick={() => handleInput("3")} />
        <Button type="special" label="-" onClick={() => handleInput("-")} />

        <Button label="0" onClick={() => handleInput("0")} />
        <Button label="." onClick={() => handleInput(".")} />
        <Button type="equals" label="=" onClick={handleEquals} />
        <Button type="special" label="C" onClick={handleClear} />
      </div>
    </div>
  );
};

export default Calculator;
