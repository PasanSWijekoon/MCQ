import { wrapSnippit } from "../utils/helpers";

export default {
  title: `Polymorphism 2`,
  category: `paper7`,
  challenges: [
    {
      title: `What is compile-time polymorphism?`,
      subtitle: `Definition 1`,
      choices: [
        `The ability to overload methods within the same class`,
        `The ability to override methods in derived classes`,
        `The ability to inherit from multiple classes`,
        `The ability to encapsulate data`,
      ],
      solution: `0`,
      explanation: `Compile-time polymorphism, also known as method overloading, is the ability to define multiple methods with the same name but different parameters within the same class.`,
    },
    {
      title: `Which of the following is an example of compile-time polymorphism?`,
      subtitle: `Example 2`,
      choices: [
        `Overloading methods`,
        `Overriding methods`,
        `Using abstract classes`,
        `Using interfaces`,
      ],
      solution: `0`,
      explanation: `Compile-time polymorphism is achieved through method overloading.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class MathOperation {
 int add(int a, int b) {
 return a + b;
 }
 double add(double a, double b) {
 return a + b;
 }
}
public class Test {
 public static void main(String[] args) {
 MathOperation mo = new MathOperation();
 System.out.println(mo.add(2, 3));
 System.out.println(mo.add(2.5, 3.5));
 }
}
      `)}`,
      subtitle: `Method Overloading 3`,
      choices: [
        `5 and 6.0`,
        `5 and 5.0`,
        `5.0 and 6.0`,
        `Compilation error`,
      ],
      solution: `0`,
      explanation: `The output will be "5" and "6.0" because the method add() is overloaded to handle both int and double parameters.`,
    },
    {
      title: `Can constructors be overloaded in Java?`,
      subtitle: `Constructor Overloading 4`,
      choices: [
        `Yes`,
        `No`,
        `Only if they have different return types`,
        `Only if they belong to different classes`,
      ],
      solution: `0`,
      explanation: `Constructors can be overloaded in Java by defining multiple constructors with different parameter lists within the same class.`,
    },
    {
      title: `Which method signature is valid for overloading the following method? ${wrapSnippit(`
void display(int a) { }
      `)}`,
      subtitle: `Valid Signature 5`,
      choices: [
        `void display(int b)`,
        `void display(int a, int b)`,
        `int display(int a)`,
        `static void display(int a)`,
      ],
      solution: `1`,
      explanation: `The method void display(int a, int b) is valid for overloading as it has a different parameter list.`,
    },
  ],
};
