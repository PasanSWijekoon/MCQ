import { wrapSnippit } from "../utils/helpers";

export default {
  title: `Paper 2`,
  category: `paper2`,
  challenges: [
    {
      title: `Study the question and select the correct answer from the answer list given below ${wrapSnippit(`
class A {
public static void main(String[] args) {
char a = 'a'; // 'a' = 97
char b = 'b'; // 'b' = 98
System.out.print(a + b + "" + a + b);
 }}
          `)} What is the result of attempting to compile and run the above program?`,
      subtitle: `Equality in JavaScript 2`,
      choices: [
        `Prints: 290`,
        `Prints: 195195`,
        `Prints: 195ab`,
        `Prints: ab195`,
        `Prints: abab`,
        `Runtime error`,
        `Compiler error`,
        `None of the above`
      ],
      solution: `3`,
      explanation: `
            The output will be <code>195ab</code>. Here's why:
            - \`a + b\` results in the addition of their ASCII values: 97 + 98 = 195.
            - \`""\` is a string, so concatenation begins after this point.
            - \`a + b\` after the \`""\` remains as characters 'a' and 'b'.
            Therefore, the output is the sum of the ASCII values (195) followed by the characters 'a' and 'b'.
      `,
    },
  ],
};
