import { wrapSnippit } from "../utils/helpers";

export default {
  title: `Constructors`,
  category: `paper3`,
  challenges: [
    {
      title: `Which of the following is true about the default constructor in Java?`,
      subtitle: `Default Constructor 1`,
      choices: [
        `It must be explicitly defined in the class`,
        `It is automatically provided by the compiler if no other constructors are defined`,
        `It cannot initialize instance variables`,
        `It takes parameters`,
      ],
      solution: `1`,
      explanation: `The default constructor is automatically provided by the compiler if no other constructors are defined. It initializes instance variables with default values.`,
    },
    {
      title: `What is the purpose of constructor chaining in Java?`,
      subtitle: `Constructor Chaining 2`,
      choices: [
        `To call one constructor from another constructor within the same class`,
        `To call methods from other classes`,
        `To create new instances of a class`,
        `To access static variables`,
      ],
      solution: `0`,
      explanation: `Constructor chaining refers to calling one constructor from another constructor within the same class, allowing for more flexible initialization.`,
    },
    {
      title: `Which statement is true about constructor overloading in Java?`,
      subtitle: `Constructor Overloading 3`,
      choices: [
        `Overloaded constructors must have different names`,
        `Overloaded constructors must have different parameter lists`,
        `Overloaded constructors must have different return types`,
        `Overloaded constructors must have different access modifiers`,
      ],
      solution: `1`,
      explanation: `Constructor overloading in Java is based on having different parameter lists. The name of the constructor remains the same, but the parameters must differ.`,
    },
    {
      title: `What will be the output of the following code snippet? ${wrapSnippit(`
class MyClass {
 MyClass() {
 System.out.println("Default constructor");
 }
 MyClass(int a) {
 System.out.println("Parameterized constructor");
 }
 public static void main(String[] args) {
 MyClass obj = new MyClass(10);
 }
}
      `)}`,
      subtitle: `Constructor Output 4`,
      choices: [
        `Default constructor`,
        `Parameterized constructor`,
        `Compilation error`,
        `Runtime error`,
      ],
      solution: `1`,
      explanation: `The output will be "Parameterized constructor" because the constructor with the integer parameter is called.`,
    },
    {
      title: `Which of the following statements correctly describes constructor chaining?`,
      subtitle: `Constructor Chaining 5`,
      choices: [
        `It is achieved by calling one constructor from another constructor using 'this'`,
        `It is achieved by calling a constructor from a method`,
        `It is achieved by using inheritance`,
        `It is achieved by calling a method from another method`,
      ],
      solution: `0`,
      explanation: `Constructor chaining is achieved by calling one constructor from another constructor within the same class using the 'this' keyword.`,
    },
    {
      title: `How many constructors can a class have?`,
      subtitle: `Number of Constructors 6`,
      choices: [
        `Only one`,
        `Two`,
        `Multiple`,
        `None`,
      ],
      solution: `2`,
      explanation: `A class in Java can have multiple constructors as long as they have different parameter lists, enabling constructor overloading.`,
    },
    {
      title: `What is the output of the following code snippet? ${wrapSnippit(`
class A {
 A() {
 this(10);
 System.out.println("A");
 }
 A(int x) {
 System.out.println("A(" + x + ")");
 }
 public static void main(String[] args) {
 A obj = new A();
 }
}
      `)}`,
      subtitle: `Constructor Chaining Output 7`,
      choices: [
        `A\nA(10)`,
        `A(10)\nA`,
        `Compilation error`,
        `Runtime error`,
      ],
      solution: `1`,
      explanation: `The output will be "A(10)\nA" because the default constructor calls the parameterized constructor, and then the message from the default constructor is printed.`,
    },
    {
      title: `Which keyword is used to call one constructor from another constructor in the same class?`,
      subtitle: `Constructor Chaining Keyword 8`,
      choices: [
        `this`,
        `super`,
        `new`,
        `return`,
      ],
      solution: `0`,
      explanation: `The 'this' keyword is used to call one constructor from another constructor within the same class.`,
    },
    {
      title: `What happens if no constructors are defined in a class?`,
      subtitle: `Default Constructor 9`,
      choices: [
        `The class will not compile`,
        `The default constructor is automatically provided by the compiler`,
        `A compilation error occurs due to missing constructors`,
        `The class will be abstract`,
      ],
      solution: `1`,
      explanation: `If no constructors are defined in a class, the Java compiler automatically provides a default constructor that initializes instance variables with default values.`,
    },
    {
      title: `What will be the output of the following code snippet? ${wrapSnippit(`
class Test {
 int x;
 Test() {
 x = 10;
 }
 Test(int x) {
 this.x = x;
 }
 public static void main(String[] args) {
 Test t1 = new Test();
 Test t2 = new Test(20);
 System.out.println(t1.x + " " + t2.x);
 }
}
      `)}`,
      subtitle: `Constructor Output 10`,
      choices: [
        `10 10`,
        `20 20`,
        `10 20`,
        `Compilation error`,
      ],
      solution: `2`,
      explanation: `The output will be "10 20" because the default constructor initializes x to 10, and the parameterized constructor initializes x to 20.`,
    },
    {
      title: `Which of the following best describes constructor overloading?`,
      subtitle: `Constructor Overloading Description 11`,
      choices: [
        `Defining multiple constructors with the same parameter list`,
        `Defining multiple constructors with different parameter lists`,
        `Defining a constructor that returns a value`,
        `Defining a constructor that is static`,
      ],
      solution: `1`,
      explanation: `Constructor overloading involves defining multiple constructors with different parameter lists within the same class.`,
    },
  ],
};
