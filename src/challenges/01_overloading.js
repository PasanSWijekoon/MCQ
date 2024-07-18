import { wrapSnippit } from "../utils/helpers";

export default {
  title: `Overloading`,
  category: `Overloading`,
  challenges: [
    {
      title: `What is the purpose of method overloading in Java?`,
      subtitle: `Java Programming Concepts`,
      choices: [
        `Creating static methods`,
        `Hiding methods in a superclass`,
        `Redefining methods in a subclass`,
        `Defining multiple methods with the same name but different parameters`,
      ],
      solution: 3,
      explanation: `
        The purpose of method overloading in Java is to <code>Define multiple methods with the same name but different parameters</code>.
        Method overloading allows a class to have more than one method with the same name, as long as the methods have different parameter lists.
      `,
    },
    {
      title: `What will be the output of the following code? ${wrapSnippit(`
class A {
  public static void m(int x) {
    System.out.println("m int");
  }
  public static void m(byte x) {
    System.out.println("m byte");
  }
}
class Test {
  public static void main(String[] args) {
    A.m(10);
  }
}
      `)}`,
      subtitle: `Method Overloading in Java`,
      choices: [`m byte`, `m int`, `Compilation error`, `Runtime error`],
      solution: 1,
      explanation: `
        The output will be <code>m int</code>. Here's why:
        - The value <code>10</code> is an <code>int</code> literal.
        - The method <code>m(int x)</code> directly matches this call.
        - The method <code>m(byte x)</code> is not used because no type conversion is needed.
      `,
    },

    {
      title: `What will be the output of the following code? ${wrapSnippit(`
class A {
  public static void m(int x) { 
    System.out.println("m int");
  }
  public static void m(short x) {
    System.out.println("m short");
  }
}
class Test {
  public static void main(String[] args) {
    byte b = 10;
    A.m(b);
  }
}
      `)}`,
      subtitle: `Method Overloading with Byte, Short, and Int in Java`,
      choices: [`m short`, `m int`, `Compilation error`, `Runtime error`],
      solution: `0`,
      explanation: `
        The output will be <code>m short</code>. Here's why:
        - The value <code>10</code> is a <code>byte</code> literal.
        - The method <code>m(short x)</code> is more specific for the <code>byte</code> value compared to <code>m(int x)</code>.
        - Java prefers the most specific method applicable for the argument.
      `,
    },
    {
      title: `What will be the output of the following code? ${wrapSnippit(`
    class A {
      public void m() {
        System.out.println("A m");
      }
    }
    class B extends A {
      public void m(int x) {
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
      subtitle: `Method Overloading and Inheritance in Java`,
      choices: [
        `It will print A m`,
        `Compilation error at b.m();`,
        `Compilation error at public void m(int x) { ... } in class B`,
        `Runtime error`,
      ],
      solution: `0`,
      explanation: `
        The output will be <code>A m</code>. Here's why:
        - Class <code>B</code> inherits the method <code>m()</</code> from class <code>A</code>.
        - Since class <code>B</code> does not override the no-argument <code>m()</code> method but overloads it with <code>m(int x)</code>, 
        the inherited <code>m()</code> method from class <code>A</code> is used when <code>b.m()</code> is called.
      `,
    },
    {
      title: `What will be the output of the following code? ${wrapSnippit(`
    class A {
      int x = 10;
    }
    class B {
      public void m(A a) {
        System.out.println("A a");
      }
      public void m(String s) {
        System.out.println("String s");
      }
    }
    class Test {
      public static void main(String[] args) {
        B b = new B();
        b.m(null);
      }
    }
      `)}`,
      subtitle: `Method Overloading with Null in Java`,
      choices: [`A a`, `String s`, `Compilation error`, `Runtime error`],
      solution: 2,
      explanation: `
        The code will result in a <code>Compilation error</code>. Here's why:
        - The method <code>m(null)</code> can match both <code>m(A a)</code> and <code>m(String s)</code>.
        - Java cannot determine which overloaded method to call because <code>null</code> can be assigned to both parameter types.
        - This ambiguity leads to a compilation error.
      `,
    },{
      title: `What will be the output of the following code? ${wrapSnippit(`
    class A {
      int x = 10;
      static int x = 20;
      public static void main(String[] args) {
        System.out.println(A.x);
      }
    }
      `)}`,
      subtitle: `Variable Declaration Conflict in Java`,
      choices: [
        `10`,
        `20`,
        `Compilation error`,
        `Runtime error`
      ],
      solution: 2,
      explanation: `
        The code will result in a <code>Compilation error</code>. Here's why:
        - The class <code>A</code> has two variables with the same name <code>x</code>: one instance variable and one static variable.
        - Java does not allow multiple variables with the same name in the same scope, causing a compilation error.
      `,
    },
    {
      title: `What will happen when you attempt to compile and run the following code? ${wrapSnippit(`
    class A {
      private void m() {
        System.out.println("A m");
      }
    }
    class B extends A {
      public static void main(String[] args) {
        A b = new B();
        b.m();
      }
    }
      `)}`,
      subtitle: `Access Levels and Method Visibility in Java`,
      choices: [
        `The code will compile and produce the output: "A m"`,
        `Compilation error: m() has private access in A`,
        `Compilation error: m() cannot be overridden in B`,
        `Runtime error: method m() is not accessible from B`
      ],
      solution: 1,
      explanation: `
        The code will result in a <code>Compilation error</code>. Here's why:
        - The method <code>m()</code> in class <code>A</code> is declared as <code>private</code>.
        - Private methods are not accessible or overrideable by subclasses.
        - The call to <code>b.m()</code> in class <code>B</code> fails because <code>m()</code> is private in <code>A</code> and cannot be accessed from <code>B</code>.
      `,
    },{
      title: `What will be the output of the following code? ${wrapSnippit(`
    class A {
      int x = 10;
      static int y = 20;
      public void m() {
        System.out.println(y);
      }
      public static void main(String[] args) {
        A a = new A();
        a.m();
      }
    }
      `)}`,
      subtitle: `Accessing Static Variables in Java`,
      choices: [
        `20`,
        `Compilation error at a.m();`,
        `Compilation error at System.out.println(y);`,
        `Runtime error`
      ],
      solution: `0`,
      explanation: `
        The output will be <code>20</code>. Here's why:
        - The static variable <code>y</code> belongs to the class <code>A</code>, and it is correctly accessed within the instance method <code>m()</code>.
        - The method <code>m()</code> prints the value of <code>y</code>, which is <code>20</code>.
      `,
    },
    {
      title: `What will be the output of the following code? ${wrapSnippit(`
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
      subtitle: `Constructor and Variable Initialization in Java`,
      choices: [
        `Compilation error at x = i;`,
        `10`,
        `Compilation error at System.out.println(x);`,
        `Compilation error at A a = new A(10);`
      ],
      solution: 1,
      explanation: `
        The output will be <code>10</code>. Here's why:
        - The constructor <code>A(int i)</code> initializes the instance variable <code>x</code> with the value of <code>i</code> and prints it.
        - The instance is correctly created with the value <code>10</code>, and the constructor prints this value.
      `,
    },{
      title: `What compilation error will occur in the following Java code? ${wrapSnippit(`
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
      subtitle: `Private Method Access and Inheritance in Java`,
      choices: [
        `Compilation error at A a = new B();`,
        `Compilation error at a.m();`,
        `Compilation error at private void m() { ... } in class A`,
        `Compilation error at private void m() { ... } in class B`
      ],
      solution: 1,
      explanation: `
        The compilation error occurs at <code>a.m();</code>. Here's why:
        - The method <code>m()</code> in class <code>A</code> is private and not accessible from class <code>B</code>.
        - The method <code>m()</code> in class <code>B</code> is also private and does not override the <code>m()</code> method in class <code>A</code>.
        - Since the <code>m()</code> method in class <code>A</code> is private, it cannot be called on an instance of <code>B</code> via a reference of type <code>A</code>.
      `,
    }
    
    
    
    
    
  ],
};
