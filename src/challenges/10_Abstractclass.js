import { wrapSnippit } from "../utils/helpers";

export default {
  title: `Abstract Classes`,
  category: `paper10`,
  challenges: [
    {
      title: `What is an abstract class in Java?`,
      subtitle: `Definition 1`,
      choices: [
        `A class that cannot be instantiated and may contain abstract methods`,
        `A class that cannot be subclassed`,
        `A class that has only static methods`,
        `A class that must be declared final`,
      ],
      solution: `0`,
      explanation: `An abstract class is a class that cannot be instantiated and may contain abstract methods, which are methods without an implementation.`,
    },
    {
      title: `Which keyword is used to declare an abstract class in Java?`,
      subtitle: `Keyword 2`,
      choices: [
        `abstract`,
        `final`,
        `static`,
        `transient`,
      ],
      solution: `0`,
      explanation: `The keyword "abstract" is used to declare an abstract class in Java.`,
    },
    {
      title: `Can an abstract class have concrete (non-abstract) methods?`,
      subtitle: `Concrete Methods 3`,
      choices: [
        `Yes`,
        `No`,
        `Only if it has no abstract methods`,
        `Only if it is a subclass`,
      ],
      solution: `0`,
      explanation: `Yes, an abstract class can have both abstract methods (without implementation) and concrete methods (with implementation).`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
abstract class Animal {
 abstract void makeSound();
 void sleep() {
 System.out.println("Sleeping");
 }
}
class Dog extends Animal {
 void makeSound() {
 System.out.println("Bark");
 }
}
public class Test {
 public static void main(String[] args) {
 Animal a = new Dog();
 a.makeSound();
 a.sleep();
 }
}
      `)}`,
      subtitle: `Abstract Class Example 4`,
      choices: [
        `Compilation error`,
        `Bark`,
        `Sleeping`,
        `Bark\nSleeping`,
      ],
      solution: `3`,
      explanation: `The output will be "Bark\nSleeping" because the Dog class provides an implementation for the makeSound method, and the sleep method is inherited from the Animal class.`,
    },
    {
      title: `Can an abstract class have a constructor in Java?`,
      subtitle: `Constructor 5`,
      choices: [
        `Yes`,
        `No`,
        `Only if it is private`,
        `Only if it is protected`,
      ],
      solution: `0`,
      explanation: `Yes, an abstract class can have a constructor. However, the constructor cannot be used to create instances of the abstract class directly.`,
    },
    {
      title: `What happens if a subclass does not implement all abstract methods of its abstract superclass?`,
      subtitle: `Subclass Implementation 6`,
      choices: [
        `It will compile without errors`,
        `It will throw a runtime exception`,
        `It must be declared abstract`,
        `It will cause a compilation error`,
      ],
      solution: `2`,
      explanation: `If a subclass does not implement all abstract methods of its abstract superclass, it must be declared abstract.`,
    },
    {
      title: `Can an abstract class extend another abstract class in Java?`,
      subtitle: `Abstract Inheritance 7`,
      choices: [
        `Yes`,
        `No`,
        `Only if it does not have any abstract methods`,
        `Only if it is declared final`,
      ],
      solution: `0`,
      explanation: `Yes, an abstract class can extend another abstract class in Java.`,
    },
    {
      title: `What will be the output of the following code snippet? ${wrapSnippit(`
abstract class Shape {
 abstract void draw();
}
abstract class Circle extends Shape {
 void draw() {
 System.out.println("Drawing Circle");
 }
}
public class Test {
 public static void main(String[] args) {
 Shape s = new Circle();
 s.draw();
 }
}
      `)}`,
      subtitle: `Abstract Class and Method Implementation 8`,
      choices: [
        `Compilation error`,
        `Drawing Circle`,
        `Runtime error`,
        `No output`,
      ],
      solution: `0`,
      explanation: `The code will result in a compilation error because abstract classes cannot be instantiated directly.`,
    },
    {
      title: `Which of the following statements is true about abstract classes in Java?`,
      subtitle: `Abstract Class Characteristics 9`,
      choices: [
        `Abstract classes can have both abstract and non-abstract methods`,
        `Abstract classes can only have abstract methods`,
        `Abstract classes cannot have any methods`,
        `Abstract classes can be instantiated directly`,
      ],
      solution: `0`,
      explanation: `Abstract classes can have both abstract methods (without implementation) and non-abstract methods (with implementation).`,
    },
    {
      title: `Can an abstract class implement interfaces in Java?`,
      subtitle: `Interfaces 10`,
      choices: [
        `Yes`,
        `No`,
        `Only if it does not have abstract methods`,
        `Only if it is declared final`,
      ],
      solution: `0`,
      explanation: `Yes, an abstract class can implement interfaces in Java.`,
    },
  ],
};
