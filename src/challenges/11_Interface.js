import { wrapSnippit } from "../utils/helpers";

export default {
  title: `Interfaces`,
  category: `paper3`,
  challenges: [
    {
      title: `What is an interface in Java?`,
      subtitle: `Definition 1`,
      choices: [
        `A class that cannot be instantiated`,
        `A reference type in Java, similar to a class, that can contain only abstract methods and constants`,
        `A class that has only static methods`,
        `A class that must be declared final`,
      ],
      solution: `1`,
      explanation: `An interface is a reference type in Java, similar to a class, that can contain only abstract methods, default methods, static methods, and constants.`,
    },
    {
      title: `Which keyword is used to declare an interface in Java?`,
      subtitle: `Keyword 2`,
      choices: [
        `interface`,
        `abstract`,
        `implements`,
        `extends`,
      ],
      solution: `0`,
      explanation: `The keyword "interface" is used to declare an interface in Java.`,
    },
    {
      title: `Can an interface contain concrete methods?`,
      subtitle: `Concrete Methods 3`,
      choices: [
        `Yes, but only as default or static methods`,
        `No, it can only contain abstract methods`,
        `Yes, but only if they are private`,
        `No, it must contain only constants and abstract methods`,
      ],
      solution: `0`,
      explanation: `Yes, an interface can contain concrete methods, but they must be either default or static methods.`,
    },
    {
      title: `What will be the output of the following code snippet? ${wrapSnippit(`
interface Animal {
 void makeSound();
}
class Dog implements Animal {
 public void makeSound() {
 System.out.println("Bark");
 }
}
public class Test {
 public static void main(String[] args) {
 Animal a = new Dog();
 a.makeSound();
 }
}
      `)}`,
      subtitle: `Interface Example 4`,
      choices: [
        `Compilation error`,
        `Bark`,
        `Runtime error`,
        `No output`,
      ],
      solution: `1`,
      explanation: `The output will be "Bark" because the Dog class implements the makeSound method from the Animal interface.`,
    },
    {
      title: `Can an interface extend another interface in Java?`,
      subtitle: `Interface Inheritance 5`,
      choices: [
        `Yes`,
        `No`,
        `Only if it does not have any abstract methods`,
        `Only if it is declared final`,
      ],
      solution: `0`,
      explanation: `Yes, an interface can extend another interface in Java.`,
    },
    {
      title: `What will be the result of the following code snippet? ${wrapSnippit(`
interface Animal {
 void makeSound();
}
interface Pet {
 void play();
}
class Dog implements Animal, Pet {
 public void makeSound() {
 System.out.println("Bark");
 }
 public void play() {
 System.out.println("Play");
 }
}
public class Test {
 public static void main(String[] args) {
 Dog d = new Dog();
 d.makeSound();
 d.play();
 }
}
      `)}`,
      subtitle: `Multiple Interface Implementation 6`,
      choices: [
        `Compilation error`,
        `Bark\nPlay`,
        `Runtime error`,
        `No output`,
      ],
      solution: `1`,
      explanation: `The output will be "Bark\nPlay" because the Dog class implements both the makeSound method from the Animal interface and the play method from the Pet interface.`,
    },
    {
      title: `Can an interface have fields in Java?`,
      subtitle: `Fields 7`,
      choices: [
        `Yes, but they must be implicitly public, static, and final`,
        `No, interfaces cannot have fields`,
        `Yes, but they must be protected`,
        `Yes, but they must be private`,
      ],
      solution: `0`,
      explanation: `Yes, an interface can have fields in Java, but they must be implicitly public, static, and final.`,
    },
    {
      title: `What is the default access level of methods in an interface?`,
      subtitle: `Access Level 8`,
      choices: [
        `public`,
        `protected`,
        `private`,
        `default`,
      ],
      solution: `0`,
      explanation: `The default access level of methods in an interface is public.`,
    },
    {
      title: `Can an interface have a constructor in Java?`,
      subtitle: `Constructor 9`,
      choices: [
        `No`,
        `Yes, but it must be private`,
        `Yes, but it must be public`,
        `Yes, but it must be protected`,
      ],
      solution: `0`,
      explanation: `No, an interface cannot have a constructor in Java.`,
    },
    {
      title: `Which of the following statements is true about interfaces in Java?`,
      subtitle: `Interface Characteristics 10`,
      choices: [
        `Interfaces can be instantiated directly`,
        `Interfaces can contain default methods`,
        `Interfaces cannot be extended by other interfaces`,
        `Interfaces can only be implemented by final classes`,
      ],
      solution: `1`,
      explanation: `Interfaces can contain default methods, which are concrete methods with an implementation.`,
    },
  ],
};
