import { wrapSnippit } from "../utils/helpers";

export default {
  title: `Inheritance`,
  category: `paper4`,
  challenges: [
    {
      title: `What does "is-a" relationship signify in Java inheritance?`,
      subtitle: `Is-a Relationship 1`,
      choices: [
        `A class contains another class`,
        `A class inherits from another class`,
        `A class implements an interface`,
        `A class has an instance variable`,
      ],
      solution: `1`,
      explanation: `The "is-a" relationship signifies that a class inherits from another class.`,
    },
    {
      title: `What does "has-a" relationship signify in Java inheritance?`,
      subtitle: `Has-a Relationship 2`,
      choices: [
        `A class inherits from another class`,
        `A class implements an interface`,
        `A class contains an instance of another class`,
        `A class overrides a method`,
      ],
      solution: `2`,
      explanation: `The "has-a" relationship signifies that a class contains an instance of another class.`,
    },
    {
      title: `Which of the following demonstrates an "is-a" relationship? ${wrapSnippit(`
class Animal {
}

class Dog extends Animal {
}
      `)}`,
      subtitle: `Is-a Relationship Example 3`,
      choices: [`Dog is a subclass of Animal`, `Animal is a subclass of Dog`, `Dog contains an instance of Animal`, `Animal contains an instance of Dog`],
      solution: `0`,
      explanation: `The "is-a" relationship is demonstrated as Dog is a subclass of Animal.`,
    },
    {
      title: `Which of the following demonstrates a "has-a" relationship? ${wrapSnippit(`
class Engine {
}

class Car {
  private Engine engine;
}
      `)}`,
      subtitle: `Has-a Relationship Example 4`,
      choices: [`Engine is a subclass of Car`, `Car is a subclass of Engine`, `Car contains an instance of Engine`, `Engine contains an instance of Car`],
      solution: `2`,
      explanation: `The "has-a" relationship is demonstrated as Car contains an instance of Engine.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Vehicle {
  void start() {
    System.out.println("Vehicle started");
  }
}

class Car extends Vehicle {
}

public class Test {
  public static void main(String[] args) {
    Car myCar = new Car();
    myCar.start();
  }
}
      `)}`,
      subtitle: `Method Inheritance 5`,
      choices: [
        `Vehicle started`,
        `Car started`,
        `Compilation error`,
        `Runtime error`,
      ],
      solution: `0`,
      explanation: `The output will be "Vehicle started" because the Car class inherits the start method from the Vehicle class.`,
    },
    {
      title: `Which of the following statements about inheritance in Java is true?`,
      subtitle: `Inheritance Facts 6`,
      choices: [
        `A class can extend multiple classes`,
        `A class can implement multiple interfaces`,
        `A class can contain multiple classes`,
        `A class can override multiple methods`,
      ],
      solution: `1`,
      explanation: `In Java, a class can implement multiple interfaces but can only extend one class.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Parent {
  void display() {
    System.out.println("Parent display");
  }
}

class Child extends Parent {
  void display() {
    System.out.println("Child display");
  }
}

public class Test {
  public static void main(String[] args) {
    Parent obj = new Child();
    obj.display();
  }
}
      `)}`,
      subtitle: `Method Overriding 7`,
      choices: [
        `Parent display`,
        `Child display`,
        `Compilation error`,
        `Runtime error`,
      ],
      solution: `1`,
      explanation: `The output will be "Child display" because the display method in the Child class overrides the method in the Parent class.`,
    },
    {
      title: `Which type of relationship is demonstrated in the following code snippet? ${wrapSnippit(`
class Library {
  private Book book;
}
      `)}`,
      subtitle: `Relationship Type 8`,
      choices: [
        `Is-a relationship`,
        `Has-a relationship`,
        `Uses-a relationship`,
        `Contains-a relationship`,
      ],
      solution: `1`,
      explanation: `The code snippet demonstrates a "has-a" relationship because the Library class contains an instance of the Book class.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Animal {
  String name;
  Animal(String name) {
    this.name = name;
  }
}

class Dog extends Animal {
  Dog(String name) {
    super(name);
  }
  void display() {
    System.out.println(name);
  }
}

public class Test {
  public static void main(String[] args) {
    Dog myDog = new Dog("Buddy");
    myDog.display();
  }
}
      `)}`,
      subtitle: `Constructor Inheritance 9`,
      choices: [
        `Buddy`,
        `null`,
        `Compilation error`,
        `Runtime error`,
      ],
      solution: `0`,
      explanation: `The output will be "Buddy" because the Dog class calls the constructor of the Animal class using super(name).`,
    },
    {
      title: `Which of the following best describes the relationship between a superclass and a subclass in Java?`,
      subtitle: `Superclass-Subclass Relationship 10`,
      choices: [
        `The subclass inherits the private members of the superclass`,
        `The subclass inherits the static members of the superclass`,
        `The subclass inherits the public and protected members of the superclass`,
        `The subclass cannot override methods of the superclass`,
      ],
      solution: `2`,
      explanation: `The subclass inherits the public and protected members of the superclass but not the private members.`,
    },
  ],
};
