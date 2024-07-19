import { wrapSnippit } from "../utils/helpers";

export default {
  title: `Revision Day 3`,
  category: `java`,
  challenges: [
    {
      title: `In Java, which keyword is used to implement inheritance between classes?`,
      subtitle: `Inheritance Keyword 1`,
      choices: [`inherits From`, `inherits`, `implements`, `extends`],
      solution: `3`,
      explanation: `The keyword used to implement inheritance between classes in Java is <code>extends</code>.`,
    },
    {
      title: `What is inheritance in Java?`,
      subtitle: `Definition of Inheritance 2`,
      choices: [
        `The process of acquiring properties and behaviors of one class by another`,
        `The process of creating objects`,
        `The process of encapsulation`,
        `The process of overloading methods`,
      ],
      solution: `0`,
      explanation: `Inheritance in Java is the process of acquiring properties and behaviors of one class by another.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Parent {
 void display() {
 System.out.println("Parent");
 }
}
class Child extends Parent {
 public static void main(String[] args) {
 Child obj = new Child();
 obj.display();
 }
}
      `)}`,
      subtitle: `Code Output 3`,
      choices: [`Runtime exception`, `Compilation error`, `Child`, `Parent`],
      solution: `3`,
      explanation: `The output of the code is <code>Parent</code>. The method display() in the Parent class is called by the Child class object.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Parent {
 int x = 10;
}
class Child extends Parent {
int x = 20;
void display() {
System.out.println(super.x + " " + this.x);
 }
}
public class Main {
 public static void main(String[] args) {
 Child obj = new Child();
 obj.display();
 }
}
      `)}`,
      subtitle: `Code Output 4`,
      choices: [`20 10`, `10 20`, `Runtime Exception`, `20 10`],
      solution: `1`,
      explanation: `The output will be <code>10 20</code> as the super keyword refers to the parent class variable and this refers to the current class variable.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Main {
 public static void main(String[] args) {
 int p = 3;
 switch (p) {
 case 1:
 System.out.print("One");
 case 2:
 System.out.print("Two");
 default:
 System.out.print("Default");
 }
 }
}
      `)}`,
      subtitle: `Switch Case Output 5`,
      choices: [`Default`, `OneTwoDefault`, `One`, `DefaultOneTwo`],
      solution: `0`,
      explanation: `The output will be <code>Default</code> as the switch statement does not have a matching case for the value 3, so it executes the default case.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Main {
 public static void main(String[] args) {
 int j = 0;
 while (j < 5) {
 System.out.print(j + " ");
 j += 2;
 }
 }
}
      `)}`,
      subtitle: `While Loop Output 6`,
      choices: [`5 4 3 2 1`, `2 4 6 8 10`, `0 2 4`, `0 1 2 3 4`],
      solution: 2,
      explanation: `The output will be <code>0 2 4</code> as the while loop increments the value of j by 2 in each iteration.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Main {
 public static void main(String[] args) {
 for (int m = 0; m < 5; m++) {
 if (m == 2) {
 continue;
 }
 System.out.print(m + " ");
 }
 }
}
      `)}`,
      subtitle: `For Loop Output 7`,
      choices: [`0 2 4`, `2 4`, `0 1 3 4`, `0 1 2 3 4`],
      solution: 2,
      explanation: `The output will be <code>0 1 3 4</code> as the continue statement skips the iteration when m equals 2.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Main {
 public static void main(String[] args) {
 for (int m = 0; m < 5; m++) {
 if (m == 2) {
 break;
 }
 System.out.print(m + " ");
 }
 }
}
      `)}`,
      subtitle: `For Loop Output 8`,
      choices: [`0 2 4`, `2 4`, `0 1 3 4`, `0 1`],
      solution: 3,
      explanation: `The output will be <code>0 1</code> as the break statement exits the loop when m equals 2.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Main {
 public static void main(String[] args) {
 EncapsulationDemo d = new EncapsulationDemo();
 d.getname();
 d.setname("Java Institute");
 }
}
class EncapsulationDemo {
 private String name;
 public String getname() {
 return name;
}
public void setname(String text) {
 name = text;
 System.out.println(name);
 }
}
      `)}`,
      subtitle: `Encapsulation Output 9`,
      choices: [`Null`, `Java Institute`, `text`, `Compile Error`],
      solution: 1,
      explanation: `The output will be <code>Java Institute</code> as the setname() method sets the name and the println() method prints it.`,
    },
    {
      title: `What is encapsulation in Java?`,
      subtitle: `Definition of Encapsulation 10`,
      choices: [
        `A mechanism to hide the implementation details of a class`,
        `A way to achieve inheritance between classes`,
        `A technique to perform type casting in Java`,
        `A feature to handle exceptions in Java`,
      ],
      solution: `0`,
      explanation: `Encapsulation is a mechanism to hide the implementation details of a class and only expose the necessary parts.`,
    },
    {
      title: `What is the purpose of getter methods in encapsulation?`,
      subtitle: `Getter Methods 11`,
      choices: [
        `To modify the value of a variable`,
        `To retrieve the value of a variable`,
        `To create a new instance of a class`,
        `To delete an instance of a class`,
      ],
      solution: 1,
      explanation: `The purpose of getter methods is to retrieve the value of a private variable from outside the class.`,
    },
    {
      title: `Which of the following is an example of encapsulation in action?`,
      subtitle: `Encapsulation Example 12`,
      choices: [
        `A class with only public instance variables.`,
        `A class with private instance variables and public getter and setter methods.`,
        `A class with no instance variables.`,
        `A class with only static method`,
      ],
      solution: 1,
      explanation: `Encapsulation is achieved by using private instance variables and providing public getter and setter methods to access and modify them.`,
    },
    {
      title: `Below class ABC doesn't have even a single abstract method, but it has been declared as abstract. Is it
correct?
 ${wrapSnippit(`
abstract class ABC 1
 void firstMethod() {
 System.out.printin("First
Method")}
}
 void secondMethod() {

System.out.printin("Second Method");
 }
}
              `)}`,
      subtitle: `Abstract Class with No Abstract Methods 13`,
      choices: [`Yes`, `No`],
      solution: `0`,
      explanation: `Yes, it is correct. An abstract class in Java can have no abstract methods. It can be declared abstract to prevent it from being instantiated.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
abstract class AbstractClass {
 abstract void abstractMethod();
 void firstMethod() {
 System.out.println("First Method");
 }
}
      `)}`,
      subtitle: `Abstract Class Compilation 14`,
      choices: [`Compile Error`, `First Method`],
      solution: `0`,
      explanation: `The code will result in a compile error because the abstract method abstractMethod() is not implemented.`,
    },
    {
      title: `Which class is instantiable? ${wrapSnippit(`
abstract class A {
}
class B extends A {
}
      `)}`,
      subtitle: `Instantiable Class 15`,
      choices: [`Class A`, `Class B`],
      solution: 1,
      explanation: `Class B is instantiable because it is a concrete class that extends the abstract class A.`,
    },
    {
      title: `What does the length attribute of an array in Java represent?`,
      subtitle: `Array Length 16`,
      choices: [
        `The number of elements in the array`,
        `The maximum value of elements in the array`,
        `The length of the variable name`,
        `The number of dimensions`,
      ],
      solution: `0`,
      explanation: `The length attribute of an array in Java represents the number of elements in the array.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Test {
 public static void main(String[] args) {
 int[] a = new int[4];
 a[1] = 1;
 a = new int[2];
 System.out.println("a[1] is " + a[1]);
 }
}
      `)}`,
      subtitle: `Array Output 17`,
      choices: [
        `The program has a compile error because new int[2]`,
        `The program has a runtime error because a[1] = null`,
        `a[1] is 0`,
        `a[1] is 1`,
      ],
      solution: 2,
      explanation: `The output will be <code>a[1] is 0</code> because the array reference a is reassigned to a new array of size 2, which initializes its elements to 0.`,
    },
    {
      title: `What would be the result of attempting to compile and run the following code? ${wrapSnippit(`
public class HelloWorld {
 public static void main(String[] args) {
 double[] x = new double[]{1, 2, 3};
 System.out.println("Value is " + x[1]);
 }
}
      `)}`,
      subtitle: `Array Syntax 18`,
      choices: [
        `The program has a compile error because the syntax new double[]{1, 2, 3} is wrong and it should be replaced by {1, 2, 3}.`,
        `The program has a compile error because the syntax new double[]{1, 2, 3} is wrong and it should be replaced by new double[3]{1, 2, 3}.`,
        `The program has a compile error because the syntax new double[]{1, 2, 3} is wrong and it should be replaced by new double[]{1.0, 2.0, 3.0}.`,
        `The program compiles and runs fine and the output is: Value is 2.0`,
      ],
      solution: 3,
      explanation: `The program compiles and runs fine and the output is <code>Value is 2.0</code>.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Test {
 public static void main(String[] args) {
 int[] fun = new int[5];
 fun[0] = 1;
 fun[1] = 2;
 fun[2] = 3;
 fun[3] = 4;
 fun[4] = 5;
 int j = 3;
 System.out.println(fun[j - 1]);
 }
}
      `)}`,
      subtitle: `Array Indexing 19`,
      choices: [`1`, `2`, `3`, `4`],
      solution: 2,
      explanation: `The output will be <code>3</code> because fun[j - 1] accesses the element at index 2, which is 3.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Test {
 public static void main(String[] args) {
 int[] odd = {1, 3, 5, 7, 9, 11};
 System.out.println(odd[0] + " " + odd[3]);
 }
}
      `)}`,
      subtitle: `Array Output 20`,
      choices: [`1 5`, `6`, `1 7`, `8`],
      solution: 2,
      explanation: `The output will be <code>1 7</code> because odd[0] is 1 and odd[3] is 7.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Test {
 public static void main(String[] args) {
 int[] evens = {2, 4, 6, 8, 10};
 evens[0] = 44;
 evens[4] = evens[2];
 System.out.println(evens[0] + " " + evens[4]);
 }
}
      `)}`,
      subtitle: `Array Modification 21`,
      choices: [`44 10`, `2 10`, `54`, `44 6`],
      solution: 3,
      explanation: `The output will be <code>44 6</code> because evens[0] is set to 44 and evens[4] is set to the value of evens[2], which is 6.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Test {
 public static void main(String[] args) {
 double[] x = new double[4];
 x[0] = 8.5;
 x[1] = 6.5;
 x[2] = 9.5;
 x[3] = 12.5;
 System.out.println(x[1 + 2]);
 }
}
      `)}`,
      subtitle: `Array Index Calculation 22`,
      choices: [`6.5 9.5`, `12.5`, `15.0`, `9.5 12.5`],
      solution: 1,
      explanation: `The output will be <code>12.5</code> because x[1 + 2] accesses the element at index 3, which is 12.5.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Test {
 public static void main(String[] args) {
 int[] car = new int[7];
 car[0] = 2004;
 car[1] = 2006;
 System.out.println(car[0] + " " + car[1] + " " + car[7]);
 }
}
      `)}`,
      subtitle: `Array Index Out of Bounds 23`,
      choices: [`2004 2006 0`, `2004 2006`, `4010`, `An Error will occur`],
      solution: 3,
      explanation: `An error will occur because car[7] is out of bounds for the array size of 7.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class A {
 A(int x) {
 System.out.println("A");
 }
}
class Test {
 public static void main(String[] args) {
 A a = new A();
 }
}
      `)}`,
      subtitle: `Constructor Error 24`,
      choices: [`Compile Error`, `A`],
      solution: `0`,
      explanation: `A compile error will occur because the class A does not have a default constructor.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class A {
 int x;
 A(int i) {
 x = i;
 System.out.println(x);
 }
 public static void main(String[] args) {
 A a = new A(10);
 }
}
      `)}`,
      subtitle: `Constructor Output 25`,
      choices: [
        `Compilation error at x = i;`,
        `10`,
        `Compilation error at System.out.println(x);`,
        `Compilation error at A a = new A(10);`,
      ],
      solution: 1,
      explanation: `The output will be <code>10</code> because the constructor A(int i) sets x to 10 and prints it.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class A {
 A(int x) {
 System.out.println("A");
 }
}
class B extends A {
}
class Test {
 public static void main(String[] args) {
 B b = new B();
 }
}
      `)}`,
      subtitle: `Constructor Error 26`,
      choices: [`Compilation error at class B extends A {... }`, `Code Work`],
      solution: `0`,
      explanation: `A compilation error will occur because the class B does not have a constructor that matches the constructor in class A.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class A {
 A() {
 System.out.println("A");
 }
}
class B extends A {
 B() {
 this(10);
 System.out.println("B1");
 }
 B(int x) {
 System.out.println("B2");
 }
}
class Test {
 public static void main(String[] args) {
 B b = new B();
 }
}
      `)}`,
      subtitle: `Constructor Chaining 27`,
      choices: [`A B2 B1`, `B2 A B1`],
      solution: `0`,
      explanation: `The output will be <code>A B2 B1</code> because the constructor B() calls the constructor B(int x) using this(10), and then B2 is printed followed by B1.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class A {
 public void m() {
 System.out.println("A m");
 }
}
class B extends A {
 public void m() {
 System.out.println("B m");
 }
}
class Test {
 public static void main(String[] args) {
 B b = new A();
 }
}
      `)}`,
      subtitle: `Compile Error 28`,
      choices: [`Compile Error`, `A m`, `B m`],
      solution: `0`,
      explanation: `A compile error will occur because a B reference cannot be assigned an A object without explicit casting.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class A {
 private void m() {
 System.out.println("A m");
 }
}
class B extends A {
 private void m() {
 System.out.println("B m");
 }
}
class Test {
 public static void main(String[] args) {
 A a = new B();
 a.m();
 }
}
      `)}`,
      subtitle: `Private Method Invocation 29`,
      choices: [
        `Compilation error at A a = new B();`,
        `Compilation error at a.m();`,
        `Compilation error at private void m() {...} in class A`,
        `Compilation error at private void m() {...} in class B`,
      ],
      solution: 1,
      explanation: `A compilation error will occur because the method m() in class A is private and cannot be overridden in class B.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class A {
 private void m() {
 System.out.println("A m");
 }
}
class B extends A {
 private void m() {
 System.out.println("B m");
 }
}
class Test {
 public static void main(String[] args) {
 B b = new B();
 b.m();
 }
}
      `)}`,
      subtitle: `Private Method Invocation 30`,
      choices: [`A m`, `B m`, `Compile Error`, `Runtime Error`],
      solution: 1,
      explanation: `The output will be <code>B m</code> because b is an instance of B and calls its own private method m().`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class A {
 private void m() {
 System.out.println("A m");
 }
}
class B extends A {
 protected void m() {
 System.out.println("B m");
 }
}
class Test {
 public static void main(String[] args) {
 B b = new B();
 b.m();
 }
}
      `)}`,
      subtitle: `Protected Method Invocation 31`,
      choices: [`A m`, `B m`, `Compile Error`, `Runtime Error`],
      solution: 1,
      explanation: `The output will be <code>B m</code> because b is an instance of B and calls its own protected method m().`,
    },
    {
      title: "What is the default value of a boolean variable in Java?",
      subtitle: "Default Values 32",
      choices: ["true", "false", "0", "null"],
      solution: 1,
      explanation: "The default value of a boolean variable in Java is false.",
    },
  ],
};
