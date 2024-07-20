import { wrapSnippit } from "../utils/helpers";

export default {
  title: `Overriding`,
  category: `paper5`,
  challenges: [
    {
      title: `What is method overriding in Java?`,
      subtitle: `Method Overriding Definition 1`,
      choices: [
        `Defining a method with the same name but different parameters in the same class`,
        `Defining a method with the same name and parameters in a subclass`,
        `Defining a static method with the same name in a subclass`,
        `Defining a method with the same name and parameters in the same class`,
      ],
      solution: `1`,
      explanation: `Method overriding occurs when a subclass defines a method with the same name and parameters as a method in its superclass.`,
    },
    {
      title: `What will be the output of the following code? ${wrapSnippit(`
class Parent {
  void show() {
    System.out.println("Parent show");
  }
}

class Child extends Parent {
  void show() {
    System.out.println("Child show");
  }
}

public class Test {
  public static void main(String[] args) {
    Parent obj = new Child();
    obj.show();
  }
}
      `)}`,
      subtitle: `Method Overriding Example 2`,
      choices: [
        `Parent show`,
        `Child show`,
        `Compilation error`,
        `Runtime error`,
      ],
      solution: `1`,
      explanation: `The output will be "Child show" because the show method in the Child class overrides the show method in the Parent class.`,
    },
    {
      title: `Which of the following is true about method overriding in Java?`,
      subtitle: `Method Overriding Facts 3`,
      choices: [
        `The method in the subclass must have the same name and different parameters as the method in the superclass`,
        `The method in the subclass must have the same name and parameters as the method in the superclass`,
        `The method in the subclass must have the same name and return type as the method in the superclass`,
        `The method in the subclass must have the same name, parameters, and return type as the method in the superclass`,
      ],
      solution: `3`,
      explanation: `For method overriding, the method in the subclass must have the same name, parameters, and return type as the method in the superclass.`,
    },
    {
      title: `Can a subclass override a static method of the superclass?`,
      subtitle: `Static Method Overriding 4`,
      choices: [
        `Yes, static methods can be overridden`,
        `No, static methods cannot be overridden`,
        `Only if the method is private`,
        `Only if the method is final`,
      ],
      solution: `1`,
      explanation: `Static methods cannot be overridden in Java. If a static method is defined in a subclass, it hides the static method of the superclass.`,
    },
    {
      title: `What will be the output of the following code? ${wrapSnippit(`
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
    Animal obj = new Dog();
    obj.sound();
  }
}
      `)}`,
      subtitle: `Method Overriding Example 5`,
      choices: [
        `Animal makes a sound`,
        `Dog barks`,
        `Compilation error`,
        `Runtime error`,
      ],
      solution: `1`,
      explanation: `The output will be "Dog barks" because the sound method in the Dog class overrides the sound method in the Animal class.`,
    },
    {
      title: `Can a final method be overridden in Java?`,
      subtitle: `Final Method Overriding 6`,
      choices: [
        `Yes, final methods can be overridden`,
        `No, final methods cannot be overridden`,
        `Only if the method is static`,
        `Only if the method is private`,
      ],
      solution: `1`,
      explanation: `Final methods cannot be overridden in Java because the final keyword prevents method overriding.`,
    },
    {
      title: `Which access modifiers allow a method to be overridden in a subclass?`,
      subtitle: `Access Modifiers 7`,
      choices: [
        `private, protected, and public`,
        `protected and public`,
        `private and protected`,
        `public only`,
      ],
      solution: `1`,
      explanation: `Methods with protected and public access modifiers can be overridden in a subclass. Private methods cannot be overridden.`,
    },
    {
      title: `What is the output of the following code? ${wrapSnippit(`
class A {
  int value = 10;
  void display() {
    System.out.println("Class A: " + value);
  }
}

class B extends A {
  int value = 20;
  void display() {
    System.out.println("Class B: " + value);
  }
}

public class Test {
  public static void main(String[] args) {
    A obj = new B();
    obj.display();
  }
}
      `)}`,
      subtitle: `Instance Variable Overriding 8`,
      choices: [
        `Class A: 10`,
        `Class B: 20`,
        `Class A: 20`,
        `Class B: 10`,
      ],
      solution: `1`,
      explanation: `The output will be "Class B: 20" because the display method in the B class overrides the display method in the A class.`,
    },
    {
      title: `What happens if the return type of the overridden method in the subclass is different from the return type of the method in the superclass?`,
      subtitle: `Return Type Mismatch 9`,
      choices: [
        `Compilation error`,
        `Runtime error`,
        `The method is hidden, not overridden`,
        `The method is overridden correctly`,
      ],
      solution: `1`,
      explanation: `A compilation error occurs if the return type of the overridden method in the subclass is different from the return type of the method in the superclass.`,
    },
    {
      title: `What is the output of the following code? ${wrapSnippit(`
class Vehicle {
  void start() {
    System.out.println("Vehicle started");
  }
}

class Car extends Vehicle {
  @Override
  void start() {
    System.out.println("Car started");
  }
}

public class Test {
  public static void main(String[] args) {
    Vehicle myCar = new Car();
    myCar.start();
  }
}
      `)}`,
      subtitle: `Method Overriding Example 10`,
      choices: [
        `Vehicle started`,
        `Car started`,
        `Compilation error`,
        `Runtime error`,
      ],
      solution: `1`,
      explanation: `The output will be "Car started" because the start method in the Car class overrides the start method in the Vehicle class.`,
    },
  ],
};
