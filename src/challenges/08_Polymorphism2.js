import { wrapSnippit } from "../utils/helpers";

export default {
  title: `Polymorphism 3`,
  category: `paper8`,
  challenges: [
    {
      title: `What is runtime polymorphism?`,
      subtitle: `Definition 1`,
      choices: [
        `The ability to override methods in derived classes`,
        `The ability to overload methods within the same class`,
        `The ability to inherit from multiple classes`,
        `The ability to encapsulate data`,
      ],
      solution: `0`,
      explanation: `Runtime polymorphism, also known as method overriding, is the ability to redefine methods in derived classes.`,
    },
    {
      title: `Which of the following is an example of runtime polymorphism?`,
      subtitle: `Example 2`,
      choices: [
        `Overloading methods`,
        `Overriding methods`,
        `Using abstract classes`,
        `Using interfaces`,
      ],
      solution: `1`,
      explanation: `Runtime polymorphism is achieved through method overriding.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Animal {
 void eat() {
 System.out.println("Animal is eating");
 }
}
class Dog extends Animal {
 void eat() {
 System.out.println("Dog is eating");
 }
}
public class Test {
 public static void main(String[] args) {
 Animal a = new Dog();
 a.eat();
 }
}
      `)}`,
      subtitle: `Method Overriding 3`,
      choices: [
        `Animal is eating`,
        `Dog is eating`,
        `Compilation error`,
        `Runtime error`,
      ],
      solution: `1`,
      explanation: `The output will be "Dog is eating" because the method eat() is overridden in the Dog class.`,
    },
    {
      title: `Which class is the base class in the following code snippet? ${wrapSnippit(`
class Bird {
 void fly() {
 System.out.println("Bird is flying");
 }
}
class Sparrow extends Bird {
 void fly() {
 System.out.println("Sparrow is flying");
 }
}
      `)}`,
      subtitle: `Base Class 4`,
      choices: [
        `Bird`,
        `Sparrow`,
        `Both Bird and Sparrow`,
        `None of the above`,
      ],
      solution: `0`,
      explanation: `The Bird class is the base class, and the Sparrow class is derived from it.`,
    },
    {
      title: `Which of the following is true about method overriding in Java?`,
      subtitle: `True Statement 5`,
      choices: [
        `The method in the base class must be declared final`,
        `The method in the base class must be declared static`,
        `The method in the base class must be non-static`,
        `The method in the base class must be private`,
      ],
      solution: `2`,
      explanation: `For method overriding, the method in the base class must be non-static and should be accessible to the derived class.`,
    },
  ],
};
