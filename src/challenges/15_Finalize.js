import { wrapSnippit } from "../utils/helpers";

export default {
  title: `Finalize`,
  category: `paper3`,
  challenges: [
    {
      title: `What is the primary purpose of the finalize() method in Java?`,
      subtitle: `Finalize Method Purpose 1`,
      choices: [
        `To perform cleanup operations before an object is garbage collected`,
        `To allocate memory for new objects`,
        `To manage thread synchronization`,
        `To override the garbage collection process`,
      ],
      solution: `0`,
      explanation: `The primary purpose of the finalize() method is to perform cleanup operations before an object is garbage collected.`,
    },
    {
      title: `Which of the following statements is true about the finalize() method?`,
      subtitle: `Finalize Method True 2`,
      choices: [
        `It is guaranteed to be called by the garbage collector`,
        `It can be called manually by the programmer`,
        `It can be overridden to define custom cleanup operations`,
        `It is executed immediately when an object becomes unreachable`,
      ],
      solution: `2`,
      explanation: `The finalize() method can be overridden to define custom cleanup operations before an object is garbage collected.`,
    },
    {
      title: `What happens if an exception is thrown from the finalize() method?`,
      subtitle: `Finalize Method Exception 3`,
      choices: [
        `The exception is ignored and the object is garbage collected`,
        `The exception prevents the object from being garbage collected`,
        `The program terminates immediately`,
        `The garbage collector retries finalizing the object`,
      ],
      solution: `0`,
      explanation: `If an exception is thrown from the finalize() method, it is ignored and the object is still eligible for garbage collection.`,
    },
    {
      title: `How many times can the finalize() method be called on an object?`,
      subtitle: `Finalize Method Call Count 4`,
      choices: [
        `Zero or one time`,
        `Multiple times`,
        `Exactly once`,
        `None of the above`,
      ],
      solution: `0`,
      explanation: `The finalize() method can be called zero or one time by the garbage collector on an object.`,
    },
    {
      title: `What will be the output of the following code snippet? ${wrapSnippit(`
public class Test {
  public static void main(String[] args) {
    Test t = new Test();
    t = null;
    System.gc();
    System.out.println("End of main");
  }
  @Override
  protected void finalize() {
    System.out.println("finalize method called");
  }
}
      `)}`,
      subtitle: `Finalize Method Output 5`,
      choices: [
        `End of main`,
        `finalize method called`,
        `End of main\nfinalize method called`,
        `Runtime error`,
      ],
      solution: `2`,
      explanation: `The output will be "End of main\nfinalize method called" because the finalize() method is called before the object is garbage collected.`,
    },
    {
      title: `What does the finalize() method belong to?`,
      subtitle: `Finalize Method Belonging 6`,
      choices: [
        `java.lang.Object class`,
        `java.lang.System class`,
        `java.lang.Runtime class`,
        `java.lang.Thread class`,
      ],
      solution: `0`,
      explanation: `The finalize() method belongs to the java.lang.Object class.`,
    },
    {
      title: `Is it recommended to rely on the finalize() method for releasing resources?`,
      subtitle: `Finalize Method Recommendation 7`,
      choices: [
        `Yes, it is the best way to release resources`,
        `No, it is not recommended`,
        `Only for memory resources`,
        `Only for file resources`,
      ],
      solution: `1`,
      explanation: `It is not recommended to rely on the finalize() method for releasing resources because it is not guaranteed to be called in a timely manner.`,
    },
    {
      title: `Which method can be used as an alternative to finalize() for resource cleanup?`,
      subtitle: `Finalize Method Alternative 8`,
      choices: [
        `close()`,
        `dispose()`,
        `clean()`,
        `clear()`,
      ],
      solution: `0`,
      explanation: `The close() method is commonly used as an alternative to finalize() for resource cleanup, especially for closing streams and connections.`,
    },
    {
      title: `Can the finalize() method be called explicitly by the program?`,
      subtitle: `Finalize Method Explicit Call 9`,
      choices: [
        `Yes, it can be called explicitly`,
        `No, it cannot be called explicitly`,
        `Only in certain circumstances`,
        `Only in the main method`,
      ],
      solution: `0`,
      explanation: `While the finalize() method can be called explicitly by the program, it is not a recommended practice.`,
    },
    {
      title: `What is the visibility of the finalize() method in the Object class?`,
      subtitle: `Finalize Method Visibility 10`,
      choices: [
        `public`,
        `protected`,
        `private`,
        `default`,
      ],
      solution: `1`,
      explanation: `The finalize() method in the Object class has protected visibility, allowing it to be overridden by subclasses.`,
    },
  ],
};
