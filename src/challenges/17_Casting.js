import { wrapSnippit } from "../utils/helpers";

export default {
  title: `Casting`,
  category: `paper3`,
  challenges: [
    {
      title: `What is casting in Java?`,
      subtitle: `Casting Definition 1`,
      choices: [
        `Converting a primitive type to a reference type`,
        `Converting one data type to another`,
        `Copying values between variables`,
        `Assigning a null value to a variable`,
      ],
      solution: `1`,
      explanation: `Casting in Java refers to converting one data type to another.`,
    },
    {
      title: `What is the correct way to cast an int to a double in Java?`,
      subtitle: `Primitive Casting 2`,
      choices: [
        `double d = (double) 10;`,
        `double d = (int) 10;`,
        `double d = (double) "10";`,
        `double d = (int) "10";`,
      ],
      solution: `0`,
      explanation: `To cast an int to a double, you use (double) 10.`,
    },
    {
      title: `Which type of casting must be done explicitly in Java?`,
      subtitle: `Explicit Casting 3`,
      choices: [
        `Narrowing conversion (from larger to smaller type)`,
        `Widening conversion (from smaller to larger type)`,
        `Converting a primitive type to a reference type`,
        `Converting a reference type to a primitive type`,
      ],
      solution: `0`,
      explanation: `Explicit casting is required for narrowing conversion (e.g., from a double to an int).`,
    },
    {
      title: `What will be the output of the following code? ${wrapSnippit(`
public class Test {
  public static void main(String[] args) {
    double d = 9.8;
    int i = (int) d;
    System.out.println(i);
  }
}
      `)}`,
      subtitle: `Casting Output 4`,
      choices: [
        `9`,
        `9.8`,
        `10`,
        `0`,
      ],
      solution: `0`,
      explanation: `Casting a double to an int in Java truncates the decimal part, so the output will be 9.`,
    },
    {
      title: `Which of the following types of casting does not require explicit syntax in Java?`,
      subtitle: `Implicit Casting 5`,
      choices: [
        `Narrowing conversion`,
        `Widening conversion`,
        `Downcasting`,
        `Upcasting`,
      ],
      solution: `1`,
      explanation: `Widening conversion (e.g., from int to double) does not require explicit casting.`,
    },
    {
      title: `What is the result of the following code? ${wrapSnippit(`
public class Test {
  public static void main(String[] args) {
    int i = 5;
    double d = i;
    System.out.println(d);
  }
}
      `)}`,
      subtitle: `Widening Conversion 6`,
      choices: [
        `5`,
        `5.0`,
        `0`,
        `Compilation error`,
      ],
      solution: `1`,
      explanation: `Widening conversion automatically converts int to double, so the output will be 5.0.`,
    },
    {
      title: `How do you perform casting between reference types in Java?`,
      subtitle: `Reference Type Casting 7`,
      choices: [
        `By using the new keyword`,
        `By using explicit cast syntax`,
        `By using type conversion functions`,
        `By using the instanceof operator`,
      ],
      solution: `1`,
      explanation: `Reference type casting in Java is done using explicit cast syntax, e.g., (SubClass) superClassInstance.`,
    },
    {
      title: `What will be the output of the following code? ${wrapSnippit(`
class A {}
class B extends A {}

public class Test {
  public static void main(String[] args) {
    A a = new B();
    B b = (B) a;
    System.out.println("Casted successfully");
  }
}
      `)}`,
      subtitle: `Reference Casting 8`,
      choices: [
        `Runtime error`,
        `Compilation error`,
        `"Casted successfully"`,
        `NullPointerException`,
      ],
      solution: `2`,
      explanation: `The code casts an instance of B (which is a subclass of A) to B successfully, so the output will be "Casted successfully".`,
    },
    {
      title: `What will be the result of attempting to cast a superclass to a subclass inappropriately?`,
      subtitle: `Invalid Casting 9`,
      choices: [
        `Compilation error`,
        `Runtime error: ClassCastException`,
        `The cast will succeed but produce incorrect values`,
        `The cast will be ignored`,
      ],
      solution: `1`,
      explanation: `Attempting to cast a superclass to a subclass inappropriately will result in a ClassCastException at runtime.`,
    },
    {
      title: `What does the instanceof operator do in Java?`,
      subtitle: `instanceof Operator 10`,
      choices: [
        `Checks if an object is of a specified type`,
        `Casts an object to a specified type`,
        `Converts a primitive type to an object`,
        `Returns the class name of an object`,
      ],
      solution: `0`,
      explanation: `The instanceof operator checks if an object is an instance of a specified type.`,
    },
  ],
};
