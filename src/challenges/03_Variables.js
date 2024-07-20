import { wrapSnippit } from "../utils/helpers";

export default {
  title: `Variables`,
  category: `paper3`,
  challenges: [
    {
      title: `Which of the following is true about local variables in Java?`,
      subtitle: `Local Variables 1`,
      choices: [
        `Local variables are declared inside a method or block.`,
        `Local variables are initialized with a default value.`,
        `Local variables can be accessed by any other method in the class.`,
        `Local variables must be static.`,
      ],
      solution: `0`,
      explanation: `Local variables are declared inside a method or block and do not have a default value.`,
    },
    {
      title: `What is the scope of a block variable in Java?`,
      subtitle: `Block Variables 2`,
      choices: [
        `Entire class`,
        `Entire method`,
        `Within the block they are declared in`,
        `Within the package`,
      ],
      solution: `2`,
      explanation: `Block variables are only accessible within the block they are declared in.`,
    },
    {
      title: `What is the default value of an instance variable of type int?`,
      subtitle: `Instance Variables 3`,
      choices: [`0`, `null`, `undefined`, `-1`],
      solution: `0`,
      explanation: `The default value of an instance variable of type int is 0.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Test {
 static int x = 10;
 public static void main(String[] args) {
 System.out.println(x);
 }
}
      `)}`,
      subtitle: `Static Variables 4`,
      choices: [`10`, `0`, `Compile Error`, `Runtime Error`],
      solution: `0`,
      explanation: `The output will be 10 because static variable x is initialized to 10.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
public class Main {
 public static void main(String[] args) {
 int a = 5;
 {
 int b = 10;
 System.out.println(a + b);
 }
 System.out.println(b);
 }
}
      `)}`,
      subtitle: `Block Variables Scope 5`,
      choices: [
        `15 and 10`,
        `15 and Compile Error`,
        `Compile Error`,
        `15 and Runtime Error`,
      ],
      solution: `2`,
      explanation: `A compile error occurs because variable b is not accessible outside the block.`,
    },
    {
      title: `Which of the following is true about instance variables in Java?`,
      subtitle: `Instance Variables 6`,
      choices: [
        `They must be initialized before use.`,
        `They have default values.`,
        `They cannot be static.`,
        `They are declared inside a method or block.`,
      ],
      solution: `1`,
      explanation: `Instance variables have default values.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Test {
 int x;
 public static void main(String[] args) {
 Test t = new Test();
 System.out.println(t.x);
 }
}
      `)}`,
      subtitle: `Instance Variable Default Value 7`,
      choices: [`0`, `null`, `undefined`, `Compile Error`],
      solution: `0`,
      explanation: `The default value of the instance variable x is 0.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Test {
 static int x;
 public static void main(String[] args) {
 System.out.println(x);
 }
}
      `)}`,
      subtitle: `Static Variable Default Value 8`,
      choices: [`0`, `null`, `undefined`, `Compile Error`],
      solution: `0`,
      explanation: `The default value of the static variable x is 0.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Test {
 public void method() {
 int a = 5;
 if (a == 5) {
 int b = 10;
 System.out.println(a + b);
 }
 System.out.println(b);
 }
 public static void main(String[] args) {
 Test t = new Test();
 t.method();
 }
}
      `)}`,
      subtitle: `Block Variable Scope 9`,
      choices: [
        `15 and 10`,
        `15 and Compile Error`,
        `Compile Error`,
        `15 and Runtime Error`,
      ],
      solution: `2`,
      explanation: `A compile error occurs because variable b is not accessible outside the if block.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Test {
 static int x = 10;
 public static void main(String[] args) {
 x = 20;
 System.out.println(x);
 }
}
      `)}`,
      subtitle: `Static Variable Modification 10`,
      choices: [`10`, `20`, `Compile Error`, `Runtime Error`],
      solution: `1`,
      explanation: `The output will be 20 because the static variable x is modified to 20.`,
    },
  ],
};
