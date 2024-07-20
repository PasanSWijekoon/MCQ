import { wrapSnippit } from "../utils/helpers";

export default {
  title: `Arrays`,
  category: `paper3`,
  challenges: [
    {
      title: `How do you declare an array of integers in Java?`,
      subtitle: `Array Declaration 1`,
      choices: [
        `int array[];`,
        `int array;`,
        `int array{};`,
        `int[] array;`,
      ],
      solution: `3`,
      explanation: `In Java, an array of integers can be declared using either int[] array; or int array[];. The recommended form is int[] array; as it clearly shows the type of elements.`,
    },
    {
      title: `How do you instantiate an array of 5 integers in Java?`,
      subtitle: `Array Instantiation 2`,
      choices: [
        `int array = new int[5];`,
        `int[] array = new int[5];`,
        `int array = int[5];`,
        `int array = {5};`,
      ],
      solution: `1`,
      explanation: `To instantiate an array of 5 integers in Java, you use int[] array = new int[5];. This creates an array with 5 elements, each initialized to 0.`,
    },
    {
      title: `What is the default value of an element in a newly allocated array of integers in Java?`,
      subtitle: `Array Default Value 3`,
      choices: [
        `0`,
        `null`,
        `undefined`,
        `1`,
      ],
      solution: `0`,
      explanation: `In Java, the default value for elements of an array of integers is 0.`,
    },
    {
      title: `How do you access the third element of an array named array in Java?`,
      subtitle: `Array Access 4`,
      choices: [
        `array[3]`,
        `array[2]`,
        `array[1]`,
        `array(2)`,
      ],
      solution: `1`,
      explanation: `In Java, array indices are zero-based. Thus, the third element of the array is accessed using array[2].`,
    },
    {
      title: `What is the output of the following code? ${wrapSnippit(`
public class Test {
  public static void main(String[] args) {
    int[] array = {1, 2, 3, 4, 5};
    System.out.println(array[3]);
  }
}
      `)}`,
      subtitle: `Array Output 5`,
      choices: [
        `2`,
        `3`,
        `4`,
        `5`,
      ],
      solution: `2`,
      explanation: `The output of the code will be 4 because array[3] accesses the fourth element of the array, which is 4.`,
    },
    {
      title: `How do you get the length of an array named array in Java?`,
      subtitle: `Array Length 6`,
      choices: [
        `array.length()`,
        `array.size()`,
        `array.length`,
        `array.getLength()`,
      ],
      solution: `2`,
      explanation: `In Java, you get the length of an array using the length property: array.length.`,
    },
    {
      title: `What will happen if you try to access an index outside the bounds of an array in Java?`,
      subtitle: `Array Out of Bounds 7`,
      choices: [
        `The program will crash`,
        `An ArrayIndexOutOfBoundsException will be thrown`,
        `The array will resize to accommodate the index`,
        `A null value will be returned`,
      ],
      solution: `1`,
      explanation: `If you try to access an index outside the bounds of an array in Java, an ArrayIndexOutOfBoundsException will be thrown.`,
    },
    {
      title: `Can arrays in Java hold different data types at the same time?`,
      subtitle: `Array Data Types 8`,
      choices: [
        `Yes, arrays are type flexible`,
        `No, arrays can only hold one data type`,
        `Yes, but only if the data types are similar`,
        `No, unless you use the Object type`,
      ],
      solution: `3`,
      explanation: `In Java, arrays can only hold one data type. However, if the array is of type Object, it can hold different types of objects.`,
    },
    {
      title: `What is the output of the following code? ${wrapSnippit(`
public class Test {
  public static void main(String[] args) {
    int[] array = new int[5];
    for(int i = 0; i < array.length; i++) {
      array[i] = i * 2;
    }
    System.out.println(array[4]);
  }
}
      `)}`,
      subtitle: `Array Loop 9`,
      choices: [
        `4`,
        `6`,
        `8`,
        `10`,
      ],
      solution: `2`,
      explanation: `The code initializes each element of the array to its index multiplied by 2. Thus, array[4] will be 4 * 2 = 8.`,
    },
    {
      title: `Which of the following methods can be used to sort an array in Java?`,
      subtitle: `Array Sorting 10`,
      choices: [
        `Arrays.sort(array)`,
        `Collections.sort(array)`,
        `array.sort()`,
        `array.sort(Comparator)`,
      ],
      solution: `0`,
      explanation: `In Java, the Arrays.sort(array) method is used to sort an array.`,
    },
  ],
};
