import { wrapSnippit } from "../utils/helpers";

export default {
  title: `Final Paper`,
  category: `paper3`,
  challenges: [
    {
      title: `Select the correct answer to the following question from the answer list specified below. ${wrapSnippit(`
class A{
  public static void main(String[] args){
    int i = 25;
    double x = 25.0;
    System.out.println(x);
  }
}
      `)}`,
      subtitle: `Java Basics 1`,
      choices: [
        `Compile Error`,
        `25`,
        `25.0`,
        `25.00`,
      ],
      solution: `2`,
      explanation: `The correct answer is 25.0 because the double value 25.0 is being printed.`,
    },
    {
      title: `Select the correct answer to the following question from the answer list specified below. ${wrapSnippit(`
class A{
  public static void main(String[] args){
    char c = 97.7 // 'a'
    int i = 3;
    char x = c + i;
    System.out.println(x);
  }
}
      `)}`,
      subtitle: `Java Basics 2`,
      choices: [
        `Compile Error`,
        `100`,
        `4.0`,
        `Runtime Exception`,
      ],
      solution: `0`,
      explanation: `The code will result in a compile error because assigning a floating point number to a char without explicit casting is not allowed.`,
    },
    {
      title: `Choose the correct answer from the list of answers for the following question. ${wrapSnippit(`
class A{
  static int i = 20;
  int x = 30;
  public static void main(String[] args){
    int x = 10;
    A a = new A();
    System.out.println(a.x + a.i);
  }
}
      `)}`,
      subtitle: `Java Basics 3`,
      choices: [
        `Compile Error At Line 1`,
        `Compile Error At Line 2`,
        `50`,
        `30`,
      ],
      solution: `2`,
      explanation: `The correct answer is 50 because the instance variable x (30) and static variable i (20) are added.`,
    },
    {
      title: `Choose the correct answer from the list of answers for the following question. ${wrapSnippit(`
class A{
  int x; // Line 1
  static int x; // Line 2
  public static void main(String[] args){
    A a = new A();
    if (true){
      System.out.println(a.x);
      System.out.println(B.x); // Line 3
    }
  }
}
class B{
  static int x = 10; // Line 4
}
      `)}`,
      subtitle: `Java Basics 4`,
      choices: [
        `0,10`,
        `Compile Error At Line 1`,
        `Compile Error At Line 2`,
        `Compile Error At Line 3`,
        `Compile Error At Line 4`,
      ],
      solution: `2`,
      explanation: `The correct answer is Compile Error At Line 2 because static variables cannot have the same name as instance variables.`,
    },
    {
      title: `Select the correct answer to the following question from the answer list specified below. ${wrapSnippit(`
class A{
  int r = 30;
  public static void void main(String[] args){
    System.out.println(r);
  }
}
      `)}`,
      subtitle: `Java Basics 5`,
      choices: [
        `0`,
        `compile error`,
        `30`,
        `null`,
        `runtime error`,
      ],
      solution: `1`,
      explanation: `The code will result in a compile error because static methods cannot directly access instance variables.`,
    },
    {
      title: `What are the valid keywords in Java ?`,
      subtitle: `Java Basics 6`,
      choices: [
        `gc`,
        `String`,
        `go`,
        `static`,
        `void`,
      ],
      solution: `4`,
      explanation: `The valid keywords in Java are int, static, and void. String is a class, and array is not a keyword.`,
    },
    {
      title: `What is the invalid OOP concept in Java?`,
      subtitle: `Java Basics 7`,
      choices: [
        `Polymorphism`,
        `Encapsulation`,
        `Casting`,
        `IS-A relationship`,
        `Inheritance`,
      ],
      solution: `2`,
      explanation: `Casting is not an OOP concept; it is a type conversion mechanism.`,
    },
    {
      title: `Class X extends Y{ } class Y{ } An object of class Y can be assigned with (Multiple answers):`,
      subtitle: `Java Basics 8`,
      choices: [
        `Object type variable`,
        `B type variable`,
        `Y type variable`,
        `String type variable`,
        `Only Object type`,
      ],
      solution: `2`,
      explanation: `An object of class Y can be assigned to an Object type variable or a Y type variable.`,
    },
    {
      title: `Study the question and select the correct answer from the answer list given below. ${wrapSnippit(`
class A{
  A m();
  m(); // Line 1
  new A().m(); // Line 2
  new A().m(); // Line 3
}
static void m1() {
  System.out.println("Oracle Java");
}
void m1() {
  System.out.println("Java Institute");
}
      `)}`,
      subtitle: `Java Basics 9`,
      choices: [
        `Compile Error At Line 1`,
        `Compile Error At Line 2`,
        `Compile Error At Line 3`,
        `Oracle Java`,
        `Print "Oracle Java" Infinity Times`,
      ],
      solution: `0`,
      explanation: `The correct answer is Compile Error At Line 1 because the syntax for defining the method is incorrect.`,
    },
  ],
};
