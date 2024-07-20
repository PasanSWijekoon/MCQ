import { wrapSnippit } from "../utils/helpers";

export default {
  title: `Access Modifiers`,
  category: `paper3`,
  challenges: [
    {
      title: `Which of the following is not an access modifier in Java?`,
      subtitle: `Basic Access Modifiers 1`,
      choices: [
        `private`,
        `protected`,
        `public`,
        `internal`,
      ],
      solution: `3`,
      explanation: `In Java, 'internal' is not an access modifier. The access modifiers in Java are private, protected, public, and default (package-private).`,
    },
    {
      title: `What is the default access modifier in Java if none is specified?`,
      subtitle: `Default Access Modifier 2`,
      choices: [
        `private`,
        `protected`,
        `public`,
        `package-private`,
      ],
      solution: `3`,
      explanation: `If no access modifier is specified, the default access level in Java is package-private, meaning the member is accessible only within its own package.`,
    },
    {
      title: `Which access modifier allows members to be accessible only within the same class?`,
      subtitle: `Private Access 3`,
      choices: [
        `private`,
        `protected`,
        `public`,
        `default`,
      ],
      solution: `0`,
      explanation: `The 'private' access modifier allows members to be accessible only within the same class.`,
    },
    {
      title: `What does the 'protected' access modifier do?`,
      subtitle: `Protected Access 4`,
      choices: [
        `Allows access within the same class only`,
        `Allows access within the same package and subclasses`,
        `Allows access from anywhere`,
        `Allows access only to subclasses`,
      ],
      solution: `1`,
      explanation: `The 'protected' access modifier allows access within the same package and subclasses.`,
    },
    {
      title: `Which access modifier allows the broadest level of access?`,
      subtitle: `Public Access 5`,
      choices: [
        `private`,
        `protected`,
        `public`,
        `default`,
      ],
      solution: `2`,
      explanation: `The 'public' access modifier allows the broadest level of access, making members accessible from any other class.`,
    },
    {
      title: `Which access modifier should be used if a class member should be accessible within the same package but not by subclasses?`,
      subtitle: `Package-Private Access 6`,
      choices: [
        `private`,
        `protected`,
        `public`,
        `default (package-private)`,
      ],
      solution: `3`,
      explanation: `The default (package-private) access modifier should be used if a class member should be accessible within the same package but not by subclasses.`,
    },
    {
      title: `What will be the output of the following code snippet? ${wrapSnippit(`
public class Test {
 private int a = 5;
 protected int b = 10;
 public int c = 15;
 int d = 20;
 public static void main(String[] args) {
 Test test = new Test();
 System.out.println(test.a);
 System.out.println(test.b);
 System.out.println(test.c);
 System.out.println(test.d);
 }
}
      `)}`,
      subtitle: `Access Modifier Example 7`,
      choices: [
        `5\n10\n15\n20`,
        `Compilation error`,
        `5\n10\n15\nCompilation error`,
        `Runtime error`,
      ],
      solution: `0`,
      explanation: `The output will be "5\n10\n15\n20" because the main method is within the same class, and all access modifiers (private, protected, public, and default) allow access within the same class.`,
    },
    {
      title: `Which of the following statements is true about the 'private' access modifier?`,
      subtitle: `Private Access Characteristics 8`,
      choices: [
        `It allows access within the same package`,
        `It allows access within the same class only`,
        `It allows access from subclasses`,
        `It allows access from any class`,
      ],
      solution: `1`,
      explanation: `The 'private' access modifier allows access within the same class only.`,
    },
    {
      title: `What will be the result of the following code snippet? ${wrapSnippit(`
package package1;
public class A {
 protected void display() {
 System.out.println("Hello");
 }
}
package package2;
import package1.A;
public class B extends A {
 public static void main(String[] args) {
 B obj = new B();
 obj.display();
 }
}
      `)}`,
      subtitle: `Protected Access Example 9`,
      choices: [
        `Compilation error`,
        `Hello`,
        `Runtime error`,
        `No output`,
      ],
      solution: `1`,
      explanation: `The output will be "Hello" because the display method in class A is protected and can be accessed in class B, which is a subclass of A.`,
    },
    {
      title: `Which access modifier should be used for a method that should be accessible by classes in the same package and subclasses?`,
      subtitle: `Protected Method 10`,
      choices: [
        `private`,
        `protected`,
        `public`,
        `default (package-private)`,
      ],
      solution: `1`,
      explanation: `The 'protected' access modifier should be used for a method that should be accessible by classes in the same package and subclasses.`,
    },
  ],
};
