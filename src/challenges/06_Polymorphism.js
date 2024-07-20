import { wrapSnippit } from "../utils/helpers";

export default {
  title: `Polymorphism 1`,
  category: `paper6`,
  challenges: [
    {
      title: `What is polymorphism in Java?`,
      subtitle: `Definition 1`,
      choices: [
        `The ability of a variable, function, or object to take on multiple forms`,
        `The ability to create multiple constructors in a class`,
        `The ability to inherit from multiple classes`,
        `The ability to encapsulate data`,
      ],
      solution: `0`,
      explanation: `Polymorphism in Java is the ability of a variable, function, or object to take on multiple forms.`,
    },
    {
      title: `Which of the following is an example of polymorphism?`,
      subtitle: `Example 2`,
      choices: [
        `Overloading methods`,
        `Overriding methods`,
        `Both overloading and overriding methods`,
        `Using multiple classes in inheritance`,
      ],
      solution: `2`,
      explanation: `Polymorphism can be achieved through both method overloading and method overriding.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Animal {
 void sound() {
 System.out.println("Animal makes a sound");
 }
}
class Dog extends Animal {
 void sound() {
 System.out.println("Dog barks");
 }
}
public class Test {
 public static void main(String[] args) {
 Animal a = new Dog();
 a.sound();
 }
}
      `)}`,
      subtitle: `Runtime Polymorphism 3`,
      choices: [`Animal makes a sound`, `Dog barks`, `Compilation error`, `Runtime error`],
      solution: `1`,
      explanation: `The output will be "Dog barks" because the method sound() is overridden in the Dog class.`,
    },
    {
      title: `Which concept allows an object to take on many forms?`,
      subtitle: `Concept 4`,
      choices: [
        `Inheritance`,
        `Encapsulation`,
        `Polymorphism`,
        `Abstraction`,
      ],
      solution: `2`,
      explanation: `Polymorphism allows an object to take on many forms.`,
    },
    {
      title: `What is the benefit of polymorphism in Java?`,
      subtitle: `Benefit 5`,
      choices: [
        `Code reusability`,
        `Improved code readability`,
        `Dynamic method resolution`,
        `All of the above`,
      ],
      solution: `3`,
      explanation: `Polymorphism provides benefits such as code reusability, improved code readability, and dynamic method resolution.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Parent {
 void show() {
 System.out.println("Parent's show()");
 }
}
class Child extends Parent {
 void show() {
 System.out.println("Child's show()");
 }
}
public class Test {
 public static void main(String[] args) {
 Parent p = new Child();
 p.show();
 }
}
      `)}`,
      subtitle: `Method Overriding 6`,
      choices: [
        `Parent's show()`,
        `Child's show()`,
        `Compilation error`,
        `Runtime error`,
      ],
      solution: `1`,
      explanation: `The output will be "Child's show()" because the method show() is overridden in the Child class.`,
    },
    {
      title: `In Java, which method is used to achieve polymorphism?`,
      subtitle: `Method 7`,
      choices: [
        `Overloaded method`,
        `Overridden method`,
        `Constructor method`,
        `Static method`,
      ],
      solution: `1`,
      explanation: `Method overriding is used to achieve polymorphism in Java.`,
    },
    {
      title: `Which of the following statements is true about polymorphism?`,
      subtitle: `True Statement 8`,
      choices: [
        `Polymorphism is the ability of a single function to handle different types of inputs`,
        `Polymorphism can only be achieved through method overriding`,
        `Polymorphism does not support method overloading`,
        `Polymorphism is the ability to combine multiple classes into one`,
      ],
      solution: `0`,
      explanation: `Polymorphism is the ability of a single function to handle different types of inputs, achieved through method overloading and overriding.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Shape {
 void draw() {
 System.out.println("Drawing Shape");
 }
}
class Circle extends Shape {
 void draw() {
 System.out.println("Drawing Circle");
 }
}
class Test {
 public static void main(String[] args) {
 Shape s = new Circle();
 s.draw();
 }
}
      `)}`,
      subtitle: `Dynamic Method Dispatch 9`,
      choices: [
        `Drawing Shape`,
        `Drawing Circle`,
        `Compilation error`,
        `Runtime error`,
      ],
      solution: `1`,
      explanation: `The output will be "Drawing Circle" because the method draw() is overridden in the Circle class.`,
    },
    {
      title: `Which of the following types of polymorphism is supported by Java?`,
      subtitle: `Types 10`,
      choices: [
        `Compile-time polymorphism`,
        `Runtime polymorphism`,
        `Both compile-time and runtime polymorphism`,
        `Neither compile-time nor runtime polymorphism`,
      ],
      solution: `2`,
      explanation: `Java supports both compile-time polymorphism (method overloading) and runtime polymorphism (method overriding).`,
    },
  ],
};
