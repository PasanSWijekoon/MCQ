import { wrapSnippit } from "../utils/helpers";

export default {
  title: `Garbage GC`,
  category: `paper3`,
  challenges: [
    {
      title: `What is the main purpose of garbage collection in Java?`,
      subtitle: `Garbage Collection Purpose 1`,
      choices: [
        `To allocate memory for new objects`,
        `To destroy unused objects and free memory`,
        `To organize the files in the project`,
        `To manage thread synchronization`,
      ],
      solution: `1`,
      explanation: `The main purpose of garbage collection in Java is to automatically destroy unused objects and free memory, ensuring efficient memory management.`,
    },
    {
      title: `Which of the following methods is used to suggest the JVM to run the garbage collector?`,
      subtitle: `Garbage Collection Method 2`,
      choices: [
        `System.gc()`,
        `Runtime.gc()`,
        `Thread.gc()`,
        `Both System.gc() and Runtime.gc()`,
      ],
      solution: `3`,
      explanation: `Both System.gc() and Runtime.gc() methods can be used to suggest the JVM to run the garbage collector, though it is not guaranteed to run immediately.`,
    },
    {
      title: `Which of the following is true about garbage collection in Java?`,
      subtitle: `Garbage Collection True 3`,
      choices: [
        `Developers need to manually deallocate memory`,
        `Garbage collection is automatic and cannot be forced`,
        `Garbage collection can be disabled`,
        `Java does not support garbage collection`,
      ],
      solution: `1`,
      explanation: `Garbage collection in Java is automatic, meaning developers do not need to manually deallocate memory, and it cannot be forced to run at a specific time.`,
    },
    {
      title: `What is the primary technique used by Java garbage collectors to identify objects that are no longer in use?`,
      subtitle: `Garbage Collection Technique 4`,
      choices: [
        `Reference counting`,
        `Mark and sweep`,
        `Allocation profiling`,
        `Object tracking`,
      ],
      solution: `1`,
      explanation: `Java garbage collectors primarily use the "mark and sweep" technique to identify and remove objects that are no longer in use.`,
    },
    {
      title: `Which of the following can make an object eligible for garbage collection?`,
      subtitle: `Eligibility for Garbage Collection 5`,
      choices: [
        `Setting the object reference to null`,
        `Reassigning the object reference to another object`,
        `Both A and B`,
        `Neither A nor B`,
      ],
      solution: `2`,
      explanation: `An object becomes eligible for garbage collection if its reference is set to null or reassigned to another object, as these actions make the object unreachable.`,
    },
    {
      title: `What is the role of the finalize() method in Java?`,
      subtitle: `Finalize Method 6`,
      choices: [
        `To explicitly release the memory of an object`,
        `To perform cleanup operations before an object is garbage collected`,
        `To override the default garbage collection process`,
        `To create new instances of objects`,
      ],
      solution: `1`,
      explanation: `The finalize() method in Java is called by the garbage collector before an object is removed from memory, allowing for cleanup operations.`,
    },
    {
      title: `Which of the following is NOT a type of garbage collector in Java?`,
      subtitle: `Types of Garbage Collectors 7`,
      choices: [
        `Serial Garbage Collector`,
        `Parallel Garbage Collector`,
        `Concurrent Mark-Sweep (CMS) Garbage Collector`,
        `Dynamic Garbage Collector`,
      ],
      solution: `3`,
      explanation: `Java does not have a "Dynamic Garbage Collector." The common types are Serial, Parallel, and Concurrent Mark-Sweep (CMS) garbage collectors.`,
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
      subtitle: `Garbage Collection Output 8`,
      choices: [
        `End of main`,
        `finalize method called`,
        `End of main\nfinalize method called`,
        `Runtime error`,
      ],
      solution: `0`,
      explanation: `The output will be "End of main" because calling System.gc() does not guarantee that the garbage collector will run immediately.`,
    },
    {
      title: `Which of the following statements is true regarding the finalize() method?`,
      subtitle: `Finalize Method True 9`,
      choices: [
        `It is guaranteed to be called by the garbage collector`,
        `It can be overridden to perform cleanup operations`,
        `It can be used to manually deallocate memory`,
        `It can be used to create new objects`,
      ],
      solution: `1`,
      explanation: `The finalize() method can be overridden to perform cleanup operations before an object is garbage collected, but its execution is not guaranteed.`,
    },
    {
      title: `What does it mean when an object is "unreachable" in Java?`,
      subtitle: `Unreachable Objects 10`,
      choices: [
        `It cannot be referenced or accessed by any part of the code`,
        `It is protected from garbage collection`,
        `It is being used by the program`,
        `It is an object created using a constructor`,
      ],
      solution: `0`,
      explanation: `An object is considered "unreachable" in Java if it cannot be referenced or accessed by any part of the code, making it eligible for garbage collection.`,
    },
  ],
};
