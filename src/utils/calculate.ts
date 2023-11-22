import { evaluate, format } from "mathjs";

export const calculate = (input: string) => {
  try {
    const result = evaluate(input);
    return format(result, { precision: 14 });
  } catch (error) {
    throw new Error("Invalid input");
  }
};
