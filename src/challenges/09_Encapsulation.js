import { wrapSnippit } from "../utils/helpers";

export default {
  title: `Encapsulation`,
  category: `paper9`,
  challenges: [
    {
      title: `What is encapsulation in Java?`,
      subtitle: `Definition 1`,
      choices: [
        `The ability to hide implementation details and expose only the necessary functionality`,
        `The ability to inherit properties from another class`,
        `The ability to override methods in derived classes`,
        `The ability to overload methods within the same class`,
      ],
      solution: `0`,
      explanation: `Encapsulation is a mechanism that restricts access to certain details of an object and only exposes essential aspects.`,
    },
    {
      title: `Which of the following is NOT a benefit of encapsulation?`,
      subtitle: `Benefit 2`,
      choices: [
        `Improved code maintainability`,
        `Enhanced security of data`,
        `Easy to understand code structure`,
        `Ability to inherit methods`,
      ],
      solution: `3`,
      explanation: `Encapsulation improves code maintainability, enhances security, and simplifies the code structure but does not inherently provide inheritance capabilities.`,
    },
    {
      title: `How is encapsulation achieved in Java?`,
      subtitle: `Achieving Encapsulation 3`,
      choices: [
        `By using private access modifiers for class fields and providing public getter and setter methods`,
        `By using protected access modifiers for class fields`,
        `By using default access modifiers for class fields`,
        `By using abstract classes and interfaces`,
      ],
      solution: `0`,
      explanation: `Encapsulation is achieved by using private access modifiers to restrict direct access to class fields and providing public getter and setter methods to modify and view the field values.`,
    },
    {
      title: `What is the result of the following code snippet? ${wrapSnippit(`
class Person {
 private String name;
 public String getName() {
 return name;
 }
 public void setName(String name) {
 this.name = name;
 }
}
public class Test {
 public static void main(String[] args) {
 Person p = new Person();
 p.setName("John");
 System.out.println(p.getName());
 }
}
      `)}`,
      subtitle: `Encapsulation Example 4`,
      choices: [
        `null`,
        `John`,
        `Compilation error`,
        `Runtime error`,
      ],
      solution: `1`,
      explanation: `The output will be "John" because the setName method sets the name to "John" and the getName method retrieves it.`,
    },
    {
      title: `Which of the following is true about access modifiers in Java?`,
      subtitle: `Access Modifiers 5`,
      choices: [
        `Private access modifier makes fields accessible within the same class only`,
        `Protected access modifier makes fields accessible to any class`,
        `Public access modifier makes fields inaccessible outside the class`,
        `Default access modifier makes fields accessible only within the same method`,
      ],
      solution: `0`,
      explanation: `The private access modifier restricts access to fields to within the same class only.`,
    },
    {
      title: `What is the purpose of getter and setter methods in Java?`,
      subtitle: `Getter and Setter 6`,
      choices: [
        `To initialize object instances`,
        `To provide controlled access to class fields`,
        `To define constructors`,
        `To overload methods`,
      ],
      solution: `1`,
      explanation: `Getter and setter methods provide controlled access to class fields, allowing for encapsulation.`,
    },
    {
      title: `What will be the output of the following code snippet? ${wrapSnippit(`
class Employee {
 private double salary;
 public double getSalary() {
 return salary;
 }
 public void setSalary(double salary) {
 if (salary > 0) {
 this.salary = salary;
 }
 }
}
public class Test {
 public static void main(String[] args) {
 Employee e = new Employee();
 e.setSalary(-1000);
 System.out.println(e.getSalary());
 }
}
      `)}`,
      subtitle: `Controlled Access 7`,
      choices: [
        `-1000`,
        `0.0`,
        `Compilation error`,
        `Runtime error`,
      ],
      solution: `1`,
      explanation: `The output will be "0.0" because the setSalary method checks if the salary is greater than 0 before setting it, preventing negative values.`,
    },
    {
      title: `Which of the following best demonstrates encapsulation?`,
      subtitle: `Encapsulation Demonstration 8`,
      choices: [
        `public int number;`,
        `private int number; public int getNumber() { return number; } public void setNumber(int number) { this.number = number; }`,
        `protected int number;`,
        `int number;`,
      ],
      solution: `1`,
      explanation: `Using a private field with public getter and setter methods is a demonstration of encapsulation.`,
    },
    {
      title: `What access modifier should be used for class fields to ensure they are not accessible directly from outside the class?`,
      subtitle: `Access Modifier 9`,
      choices: [
        `public`,
        `private`,
        `protected`,
        `default`,
      ],
      solution: `1`,
      explanation: `The private access modifier ensures that class fields are not directly accessible from outside the class.`,
    },
    {
      title: `Which principle of OOP is closely related to encapsulation?`,
      subtitle: `OOP Principle 10`,
      choices: [
        `Inheritance`,
        `Polymorphism`,
        `Abstraction`,
        `Association`,
      ],
      solution: `2`,
      explanation: `Abstraction is closely related to encapsulation as both aim to hide complexity and expose only necessary details.`,
    },
  ],
};
