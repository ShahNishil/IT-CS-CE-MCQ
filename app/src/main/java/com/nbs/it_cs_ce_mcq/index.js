const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
apiKey: "AIzaSyB5GiFIrm4q9Q3s2LRlXdamiHleCXYb9hM",
authDomain: "<it-cs-ce-mcqs.firebaseapp.com>",
projectId: "it-cs-ce-mcqs"
});

var db = firebase.firestore();

var menu =[
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST1",
"QUESTION":"Which of the following option leads to the portability and security of Java?",
"A":"Bytecode is executed by JVM",
"B":"The applet makes the Java code secure and portable",
"C":" Use of exception handling",
"D":"Dynamic binding between objects",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST1",
"QUESTION":"Which of the following is not a Java features?",
"A":"Dynamic",
"B":"Architectural neutral",
"C":"use of pointers",
"D":"object oriented ",
"ANSWER":3,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST1",
"QUESTION":" The \u0021 article referred to as a",
"A":"Unicode escape sequence",
"B":"Octal escape",
"C":"Hexadecimal",
"D":"Hexadecimal",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST1",
"QUESTION":"_____ is used to find and fix bugs in the Java programs.",
"A":"JVM",
"B":"JRE",
"C":"JDK",
"D":"JDB",
"ANSWER":4,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST1",
"QUESTION":"What is the return type of the hashCode() method in the Object class",
"A":"object",
"B":"int",
"C":"long",
"D":"void",
"ANSWER":2,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST1",
"QUESTION":"What does the expression float a = 35 / 0 return?",
"A":"0",
"B":"not a number",
"C":"infinity",
"D":"run time",
"ANSWER":3,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST1",
"QUESTION":"Which of the following is used to interpret and execute Java Applet Classes hosted by HTML.",
"A":"appletviewer",
"B":"appletwatcher",
"C":"appletshow",
"D":"appletscreen",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST1",
"QUESTION":"Single line comment starts with _________ in Java.",
"A":"/**",
"B":"//",
"C":"/*",
"D":"none of the above",
"ANSWER":2,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST1",
"QUESTION":"How to run java program in command prompt?",
"A":"javac filename.java",
"B":"java filename.java",
"C":"javac filename",
"D":"java filename",
"ANSWER":4,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST1",
"QUESTION":"Java is case sensitive?",
"A":"True",
"B":"False",
"C":"depends on compiler",
"D":"may be true or false",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST1",
"QUESTION":"What should be the execution order, if a class has a method, static block, instance block, and constructor, as shown below? \n public class First_C { \n public void myMethod() \n { \n System.out.println(\"Method\"); \n } \n { \n System.out.println(\" Instance Block\"); \n } \n public void First_C() \n { \n System.out.println(\"Constructor \"); \n } \n static { \n System.out.println(\"static block\"); \n } \n public static void main(String[] args) { \n First_C c = new First_C(); \n c.First_C(); \n c.myMethod(); \n } \n }",
"A":"Instance block, method, static block, and constructor",
"B":"Method, constructor, instance block, and static block",
"C":"Static block, method, instance block, and constructor",
"D":"Static block, instance block, constructor, and method",
"ANSWER":4,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST2",
"QUESTION":"Which of these selection statements test only for equality?",
"A":"if",
"B":"switch",
"C":"if and switch",
"D":"none of the above",
"ANSWER":2,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST2",
"QUESTION":"Which of these are selection statements in Java?",
"A":"if()",
"B":"for()",
"C":"continue",
"D":"break",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST2",
"QUESTION":"What will be the output of the following Java program?
 class selection_statements
    {
        public static void main(String args[])
        {
            int var1 = 5;
            int var2 = 6;
            if ((var2 = 1) == var1)
                System.out.print(var2);
            else
                System.out.print(++var2);
        }
    }",
"A":"1",
"B":"2",
"C":"3",
"D":"4",
"ANSWER":2,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST2",
"QUESTION":"What will be the output of the following Java program?

                class Output
                {
                    public static void main(String args[])
                    {
                         int a = 5;
                         int b = 10;
                         first:
                         {
                            second:
                            {
                               third:
                               {
                                   if (a ==  b >> 1)
                                       break second;
                               }
                               System.out.println(a);
                            }
                            System.out.println(b);
                         }
                    }
                }",
"A":"5 10",
"B":"10 5",
"C":"5",
"D":"10",
"ANSWER":4,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST2",
"QUESTION":" What is true about a break?",
"A":"Break stops the execution of entire program",
"B":"Break halts the execution and forces the control out of the loop",
"C":"Break forces the control out of the loop and starts the execution of next iteration",
"D":"Break halts the execution of the loop for certain time frame",
"ANSWER":2,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST2",
"QUESTION":" Which of the following is used with the switch statement?",
"A":"continue",
"B":"break",
"C":"exit",
"D":"do",
"ANSWER":3,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST2",
"QUESTION":"What is the valid data type for variable “a” to print “Hello World”?
switch(a)
{
   System.out.println("Hello World");
}",
"A":" int and float",
"B":" byte and short",
"C":" char and long",
"D":"byte and char",
"ANSWER":4,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST2",
"QUESTION":" Which of the following is not a decision making statement?",
"A":"if",
"B":"if-else",
"C":"switch",
"D":"do-while",
"ANSWER":4,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST2",
"QUESTION":"Which of the following is not a valid jump statement?",
"A":"break",
"B":"goto",
"C":"continue",
"D":"return",
"ANSWER":2,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST2",
"QUESTION":"Which of the following is not a valid flow control statement?",
"A":"exit()",
"B":"break",
"C":"continue",
"D":"return",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST3",
"QUESTION":" What will be the output of the following Java program?

class Output
{
        public static void main(String args[])
        {
           final int a=10,b=20;
          while(a<b)
          {

          System.out.println("Hello");
          }
          System.out.println("World");

        }
}",
"A":"Hello",
"B":"run time error",
"C":"Hello world",
"D":"compilation error",
"ANSWER":4,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST3",
"QUESTION":"The while loop repeats a set of code while the condition is not met?",
"A":"true",
"B":"false",
"ANSWER":2,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST3",
"QUESTION":"Choose a valid loop name in Java below.",
"A":"for",
"B":"while",
"C":"do-while",
"D":"all of the above",
"ANSWER":4,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST3",
"QUESTION":"Every loop in Java has a condition that should be ___ in order to proceed for execution. (TRUE / FALSE)",
"A":"true",
"B":"false",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST3",
"QUESTION":"Choose the correct syntax of the WHILE loop in Java below.",
"A":"while(condition)
{
  //statements
}",
"B":"while(condition);
{
  //statements
}",
"C":"while
{
  //statements
}(condition)",
"D":" None",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST3",
"QUESTION":"A CONTINUE statement inside a Loop like WHILE, FOR, DO-WHILE and Enhanced-FOR causes the program execution ___ the loop.",
"A":"skip",
"B":"Skip present iteration and continue with next iteration of the loop",
"C":"exit",
"D":"none of the above",
"ANSWER":2,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST3",
"QUESTION":"Which of the following loops will execute the body of loop even when condition controlling the loop is initially false?",
"A":"do-while",
"B":"while",
"C":"for",
"D":"none of the above",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST3",
"QUESTION":"What will be the output of the following Java program?

    class comma_operator
    {
        public static void main(String args[])
        {
             int sum = 0;
             for (int i = 0, j = 0; i < 5 & j < 5; ++i, j = i + 1)
                 sum += i;
 	     System.out.println(sum);
        }
    }",
"A":"5",
"B":"6",
"C":"14",
"D":"compilation error",
"ANSWER":2,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST3",
"QUESTION":"What will be the output of the following Java program?

    class jump_statments
    {
        public static void main(String args[])
        {
             int x = 2;
             int y = 0;
             for ( ; y < 10; ++y)
             {
                 if (y % x == 0)
                     continue;
                 else if (y == 8)
                      break;
                 else
                    System.out.print(y + " ");
             }
        }
    }",
"A":"1 3 5 7",
"B":"2 4 6 8",
"C":"1 3 5 7 9",
"D":"1 2 3 4 5 6 7 8 9",
"ANSWER":3,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST3",
"QUESTION":"Choose the Java-Code below with a never-ending loop.",
"A":"while(true);",
"B":"for(;true;);",
"C":"do
     {
       ;
     }while(true);",
"D":"all of the above",
"ANSWER":4,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST4",
"QUESTION":"Which of these class contains the methods used to write in a file?",
"A":"FileStream",
"B":"FileInputStream",
"C":"BUfferedOutputStream",
"D":"FileBufferStream",
"ANSWER":2,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST4",
"QUESTION":"Which of these methods are used to read in from file?",
"A":" get()",
"B":" read()",
"C":"scan()",
"D":"readFileInput()",
"ANSWER":2,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST4",
"QUESTION":"Which of these exception is thrown in cases when the file specified for writing is not found?",
"A":" IOException",
"B":"FileException",
"C":"FileNotFoundException",
"D":"FileInputException",
"ANSWER":3,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST4",
"QUESTION":" Which of these values is returned by read() method is end of file (EOF) is encountered?",
"A":"0",
"B":"1",
"C":"-1",
"D":"null",
"ANSWER":3,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST4",
"QUESTION":" Which of these methods is used to write() into a file?",
"A":"put()",
"B":"putfile()",
"C":"write()",
"D":"writefile()",
"ANSWER":3,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST4",
"QUESTION":"What will be the output of the following Java program?

                import java.io.*;
                class filesinputoutput
                {
                    public static void main(String args[])
                    {
                        InputStream obj = new FileInputStream("inputoutput.java");
                        System.out.print(obj.available());
                    }
                }",
"A":" true",
"B":" false",
"C":" prints number of bytes in file",
"D":"prints number of characters in the file",
"ANSWER":3,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST4",
"QUESTION":"",
"A":"",
"B":"",
"C":"",
"D":"",
"ANSWER":,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST4",
"QUESTION":"What will be the output of the following Java program?

                import java.io.*;
                class Chararrayinput
                {
                    public static void main(String[] args)
                    {
            	    String obj  = "abcdefgh";
                        int length = obj.length();
                        char c[] = new char[length];
                        obj.getChars(0, length, c, 0);
                        CharArrayReader input1 = new CharArrayReader(c);
                        CharArrayReader input2 = new CharArrayReader(c, 1, 4);
                        int i;
                        int j;
                        try
                        {
            		while((i = input1.read()) == (j = input2.read()))
                            {
                                System.out.print((char)i);
                            }
                   	    }
                        catch (IOException e)
                        {
                            e.printStackTrace();
            	    }
            	}
                }",
"A":"abc",
"B":"abcd",
"C":"abcde",
"D":"none of the above",
"ANSWER":4,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST4",
"QUESTION":"What will be the output of the following Java program?

                import java.io.*;
                class Chararrayinput
                {
                    public static void main(String[] args)
                    {
            	    String obj  = "abcdef";
                        int length = obj.length();
                        char c[] = new char[length];
                        obj.getChars(0, length, c, 0);
                        CharArrayReader input1 = new CharArrayReader(c);
                        CharArrayReader input2 = new CharArrayReader(c, 0, 3);
                        int i;
                        try
                        {
            		while((i = input2.read()) != -1)
                            {
                                System.out.print((char)i);
                            }
                   	    }
                        catch (IOException e)
                        {
                            e.printStackTrace();
            	    }
            	}
                }",
"A":"abc",
"B":"abcd",
"C":"abcde",
"D":"abcdef",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST4",
"QUESTION":"What will be the output of the following Java program?

                import java.io.*;
                public class filesinputoutput
                {
                	public static void main(String[] args)
                    {
             	   String obj  = "abc";
                       byte b[] = obj.getBytes();
                       ByteArrayInputStream obj1 = new ByteArrayInputStream(b);
                       for (int i = 0; i < 2; ++ i)
                       {
                           int c;
                           while((c = obj1.read()) != -1)
                           {
                        	   if(i == 0)
                               {
                        	       System.out.print(Character.toUpperCase((char)c));
                                   obj2.write(1);
                        	   }
                           }
                           System.out.print(obj2);
                       }
                    }
                }",
"A":"AaBaCa",
"B":" ABCaaa",
"C":"AaaBaaCaa",
"D":"AaBaaCaaa",
"ANSWER":4,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST5",
"QUESTION":" What is the range of short data type in Java?",
"A":"-128 to 127",
"B":"-32768 to 32767",
"C":"-2147483648 to 2147483647",
"D":"None of the mentioned",
"ANSWER":2,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST5",
"QUESTION":"What is the range of byte data type in Java?",
"A":"-128 to 127",
"B":"-32768 to 32767",
"C":"-2147483648 to 2147483647",
"D":"None of the mentioned",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST5",
"QUESTION":" Which of the following are legal lines of Java code?
   1. int w = (int)888.8;
   2. byte x = (byte)100L;
   3. long y = (byte)100;
   4. byte z = (byte)100L;
",
"A":" 1 and 2 ",
"B":"2 and 3",
"C":" 3 and 4",
"D":"All statements are correct",
"ANSWER":4,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST5",
"QUESTION":"An expression involving byte, int, and literal numbers is promoted to which of these?",
"A":"int",
"B":"long",
"C":"byte",
"D":"float",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST5",
"QUESTION":" Which of these literals can be contained in float data type variable?",
"A":" -1.7e+308",
"B":"-3.4e+038",
"C":" +1.7e+308",
"D":"-3.4e+050",
"ANSWER":2,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST5",
"QUESTION":" Which data type value is returned by all transcendental math functions?",
"A":" int",
"B":"float",
"C":"double",
"D":"long",
"ANSWER":3,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST5",
"QUESTION":"Which of these coding types is used for data type characters in Java?",
"A":" ASCII",
"B":"ISO-LATIN-1",
"C":"UNICODE",
"D":" None of the mentioned",
"ANSWER":3,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST5",
"QUESTION":"Which of these values can a boolean variable contain?",
"A":"True & False",
"B":" 0 & 1",
"C":"Any integer value",
"D":"true",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST5",
"QUESTION":" Which one is a valid declaration of a boolean?",
"A":" boolean b1 = 1;",
"B":" boolean b2 = ‘false’;",
"C":" boolean b3 = false;",
"D":" boolean b4 = ‘true’",
"ANSWER":3,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST5",
"QUESTION":" What will be the output of the following Java code?

    class booloperators {
        public static void main(String args[])
        {
            boolean var1 = true;
	    boolean var2 = false;
	    System.out.println((var1 & var2));
        }
    }",
"A":"0",
"B":"1",
"C":"true",
"D":"false",
"ANSWER":4,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST6",
"QUESTION":" Which of these operators is used to allocate memory to array variable in Java?",
"A":"malloc",
"B":"alloc",
"C":"new",
"D":"new malloc",
"ANSWER":3,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST6",
"QUESTION":"Which of these is an incorrect array declaration?",
"A":" int arr[] = new int[5] ",
"B":"int [] arr = new int[5]",
"C":"int arr[] = new int[5]",
"D":"int arr[] = int [5] new",
"ANSWER":4,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST6",
"QUESTION":"What will be the output of the following Java code?
    int arr[] = new int [5];
    System.out.print(arr);",
"A":"0 ",
"B":"value stored in arr[0]",
"C":"00000",
"D":"Class name@ hashcode in hexadecimal form",
"ANSWER":4,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST6",
"QUESTION":"Which of these is an incorrect Statement?",
"A":"It is necessary to use new operator to initialize an array",
"B":"Array can be initialized using comma separated expressions surrounded by curly braces",
"C":"Array can be initialized when they are declared",
"D":"None of the mentioned",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST6",
"QUESTION":" What will be the output of the following Java code?

                class array_output
                {
                    public static void main(String args[])
                    {
                        int array_variable [] = new int[10];
            	    for (int i = 0; i < 10; ++i)
                        {
                            array_variable[i] = i;
                            System.out.print(array_variable[i] + " ");
                            i++;
                        }
                    }
                }",
"A":" 0 2 4 6 8 ",
"B":" 1 3 5 7 9",
"C":"0 1 2 3 4 5 6 7 8 9",
"D":"1 2 3 4 5 6 7 8 9 10",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST6",
"QUESTION":" What is the type of variable ‘b’ and ‘d’ in the following Java snippet?

            int a[], b;
            int []c, d;",
"A":" ‘b’ and ‘d’ are int  ",
"B":"‘b’ and ‘d’ are arrays of type int",
"C":" ‘b’ is int variable; ‘d’ is int array",
"D":"‘d’ is int variable; ‘b’ is int array",
"ANSWER":3,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST6",
"QUESTION":"Generics does not work with?",
"A":"Set",
"B":"List",
"C":"Tree",
"D":"Array",
"ANSWER":4,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST6",
"QUESTION":"How to sort an array?",
"A":"Array.sort() ",
"B":"Arrays.sort()",
"C":"Collection.sort()",
"D":"System.sort()",
"ANSWER":2,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST6",
"QUESTION":"How to copy contents of array?",
"A":" System.arrayCopy()  ",
"B":"Array.copy()",
"C":"Arrays.copy()",
"D":"Collection.copy()",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST6",
"QUESTION":"Can you make an array volatile?",
"A":"true ",
"B":"false",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST7",
"QUESTION":" Which of the following is not OOPS concept in Java?",
"A":"inheritance",
"B":"polymorphism",
"C":"encapsulation",
"D":"all",
"ANSWER":4,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST7",
"QUESTION":" Which of the following is a type of polymorphism in Java?",
"A":"Compile time polymorphism ",
"B":"Execution time polymorphism",
"C":" Multiple polymorphism",
"D":"Multilevel polymorphism",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST7",
"QUESTION":" Which concept of Java is a way of converting real world objects in terms of class?",
"A":" Polymorphism ",
"B":"Encapsulation",
"C":"Abstraction",
"D":"Inheritance",
"ANSWER":3,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST7",
"QUESTION":"Which concept of Java is achieved by combining methods and attribute into a class?",
"A":" Encapsulation",
"B":"Inheritance",
"C":"Polymorphism",
"D":" Abstraction",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST7",
"QUESTION":"What is it called if an object has its own lifecycle and there is no owner?",
"A":"Aggregation",
"B":"Composition",
"C":"Encapsulation",
"D":"Association",
"ANSWER":4,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST7",
"QUESTION":"What is it called where child object gets killed if parent object is killed?",
"A":"Aggregation",
"B":"Composition",
"C":"Encapsulation",
"D":"Associatio",
"ANSWER":2,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST7",
"QUESTION":"What is it called where object has its own lifecycle and child object cannot belong to another parent object?",
"A":"Aggregation",
"B":"Composition",
"C":"Encapsulation",
"D":" Association",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST7",
"QUESTION":"Which of the following is not an OOPS concept?",
"A":"Encapsulation",
"B":"Polymorphism",
"C":"Exception",
"D":"Abstraction",
"ANSWER":3,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST7",
"QUESTION":"Which among the following cannot be used for the concept of polymorphism?",
"A":"Static member function",
"B":"Constructor Overloading",
"C":"Member function overloading",
"D":"Global member function",
"ANSWER":1,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST7",
"QUESTION":" Which function best describe the concept of polymorphism in programming languages?",
"A":"Class member function",
"B":"Virtual function",
"C":"Inline function",
"D":"Undefined function",
"ANSWER":2,
},


{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST8",
"QUESTION":"Which of the following can be operands of arithmetic operators?",
"A":"numeric",
"B":"character",
"C":"boolean",
"D":"both a and b",
"ANSWER":4,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST8",
"QUESTION":"Modulus operator, %, can be applied to which of these?",
"A":"integer",
"B":"floating point numbers",
"C":"both a and b",
"D":"none of the above",
"ANSWER":3,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST8",
"QUESTION":"Modulus operator, %, can be applied to which of these?\n x++;\n x = x + 1;\n  x += 1;\n x += 1;",
"A":"1,2&3",
"B":"1&4",
"C":"1,2,3&4",
"D":"3&4",
"ANSWER":3,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST8",
"QUESTION":"Decrement operator, −−, decreases the value of variable by what number?",
"A":"1",
"B":"2",
"C":"3",
"D":"4",
"ANSWER":1,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST8",
"QUESTION":"Can 8 byte long data type be automatically type cast to 4 byte float data type?",
"A":"true",
"B":"false",
"ANSWER":1,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST8",
"QUESTION":"Which of these is not a bitwise operator?",
"A":"&",
"B":"&=",
"C":"!=",
"D":"l",
"ANSWER":4,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST8",
"QUESTION":"Which operator is used to invert all the digits in a binary representation of a number?",
"A":"~",
"B":"<<<",
"C":">>>",
"D":"^",
"ANSWER":1,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST8",
"QUESTION":"On applying Left shift operator, <<, on integer bits are lost one they are shifted past which position bit?",
"A":"1",
"B":"32",
"C":"33",
"D":"31",
"ANSWER":4,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST8",
"QUESTION":"What will be the output of the following Java program?\n  class bitwise_operator\n  { \n public static void main(String args[]) \n  { \n   int var1 = 42;\n    int var2 = ~var1;\n System.out.print(var1 + " " + var2); \n  } \n    }",
"A":"42 42",
"B":"43 43",
"C":"42 -43",
"D":"42 43",
"ANSWER":3,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST8",
"QUESTION":"Which right shift operator preserves the sign of the value?",
"A":"<<",
"B":">>",
"C":"<<=",
"D":">>=",
"ANSWER":2,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST9",
"QUESTION":"Which of these class is superclass of String and StringBuffer class?",
"A":"java.util",
"B":"java.lang",
"C":"ArrayList",
"D":"none of the above",
"ANSWER":2,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST9",
"QUESTION":"Which of these operators can be used to concatenate two or more String objects?",
"A":"+",
"B":"+=",
"C":"&",
"D":"||",
"ANSWER":1,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST9",
"QUESTION":"Which of this method of class String is used to obtain a length of String object?",
"A":"get()",
"B":"sizeof()",
"C":"lengthof()",
"D":"length()",
"ANSWER":4,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST9",
"QUESTION":"Which of these method of class String is used to extract a single character from a String object?",
"A":"CHARAT()",
"B":"chatat()",
"C":"charAt()",
"D":"ChatAt()",
"ANSWER":3,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST9",
"QUESTION":"Which of these constructors is used to create an empty String object?",
"A":"String()",
"B":"String(void)",
"C":"String(0)",
"D":"none of the above",
"ANSWER":1,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST9",
"QUESTION":"Which of these is an incorrect statement?",
"A":"String objects are immutable, they cannot be changed",
"B":"String object can point to some other reference of String variable",
"C":"StringBuffer class is used to store string in a buffer for later use",
"D":"None of the mentioned",
"ANSWER":3,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST9",
"QUESTION":"What will be the output of the following Java program? \nclassString_demo\n {\n  public static void main(String args[]) \n { \n char chars[]
= {'a', 'b', 'c'};\n String s = new String(chars);\n System.out.println(s); \n } \n } ",
"A":"a",
"B":"b",
"C":"c",
"D":"a b c",
"ANSWER":4,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST9",
"QUESTION":"What will be the output of the following Java program?\n class String_demo \n { \n public static void main(String args[]) \n { \n
            int ascii[] = { 65, 66, 67, 68}; \n
            String s = new String(ascii, 1, 3); \n
            System.out.println(s); \n
        } \n
   }",
"A":"ABC",
"B":"BCD",
"C":"CDA",
"D":"ABCD",
"ANSWER":2,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST9",
"QUESTION":"What will be the output of the following Java program?\n class String_demo \n { \n public static void main(String args[]) \n {\n char chars[] = {'a', 'b', 'c'};\n String s = new String(chars);\n String s1 = "abcd";\n int len1 = s1.length(); \n  int len2 = s.length();\n System.out.println(len1 + " " + len2); \n} \n }",
"A":"3 0",
"B":"0 3",
"C":"3 4",
"D":"4 3",
"ANSWER":4,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST9",
"QUESTION":"The string method compareTo() returns",
"A":"true",
"B":"false",
"C":"an int value",
"D":"1",
"ANSWER":3,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST10",
"QUESTION":"Which object Java application uses to create a new process?",
"A":"process",
"B":"builder",
"C":"process builder",
"D":"content builder",
"ANSWER":3,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST10",
"QUESTION":"Java system properties can be set at runtime.",
"A":"true",
"B":"false",
"ANSWER":1,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST10",
"QUESTION":"Which of the following is true about Java system properties?",
"A":"Java system properties are accessible by any process",
"B":"Java system properties are accessible by processes they are added to",
"C":"Java system properties are retrieved by System.getenv()",
"D":"Java system properties are set by System.setenv()",
"ANSWER":2,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST10",
"QUESTION":"Which system property stores installation directory of JRE?",
"A":"user.home",
"B":"java.class.path",
"C":"java.home",
"D":"user.dir",
"ANSWER":3,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST10",
"QUESTION":"What does System.getProperty(“variable”) return?",
"A":"compilation error",
"B":"value stored in variable",
"C":"runtime error",
"D":"null",
"ANSWER":4,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST10",
"QUESTION":"How to use environment properties in the class?",
"A":"@Environment",
"B":"@Variable",
"C":"@Property",
"D":"@Autowired",
"ANSWER":4,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST10",
"QUESTION":"Which environment variable is used to set java path?",
"A":"JAVA",
"B":"JAVA_HOME",
"C":"CLASSPATH",
"D":"MAVEN_HOME",
"ANSWER":2,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST10",
"QUESTION":"How to read a classpath file?",
"A":"InputStream in = this.getClass().getResource(“SomeTextFile.txt”);",
"B":"InputStream in = this.getClass().getResourceClasspath(“SomeTextFile.txt”);",
"C":"InputStream in = this.getClass().getResourceAsStream(“SomeTextFile.txt”);",
"D":"InputStream in = this.getClass().getResource(“classpath:/SomeTextFile.txt”);",
"ANSWER":3,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST10",
"QUESTION":"How to assign values to variable using property?",
"A":"@Value("${my.property}")\n private String prop;",
"B":"@Property("${my.property}")\n private String prop; ",
"C":"@Environment("${my.property}")\n private String prop;",
"D":"@Environment("${my.property}")\n private String prop;",
"ANSWER":1,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST10",
"QUESTION":"What is true about the setProperties method?",
"A":" setProperties method changes the set of Java Properties which are persistent",
"B":"Changing the system properties within an application will affect future invocations",
"C":"setProperties method changes the set of Java Properties which are not persistent",
"D":"setProperties writes the values directly into the file which stores all the properties",
"ANSWER":3,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST11",
"QUESTION":"What is true about private constructor?",
"A":"Private constructor ensures only one instance of a class exist at any point of time",
"B":"Private constructor ensures multiple instances of a class exist at any point of time",
"C":"Private constructor eases the instantiation of a class",
"D":"Private constructor allows creating objects in other classes",
"ANSWER":1,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST11",
"QUESTION":"What would be the behaviour if this() and super() used in a method?",
"A":"Runtime error",
"B":"Throws exception",
"C":"compile time error",
"D":"Runs successfully",
"ANSWER":3,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST11",
"QUESTION":"What is false about constructor?",
"A":"Constructors cannot be synchronized in Java",
"B":"Java does not provide default copy constructor",
"C":"Constructor can have a return type",
"D":"“this” and “super” can be used in a constructor",
"ANSWER":3,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST11",
"QUESTION":"What is true about Class.getInstance()?",
"A":"Class.getInstance calls ",
"B":"Class.getInstance is same as new operator ",
"C":" Class.getInstance needs to have matching constructor",
"D":"Class.getInstance creates object if class does not have any constructor",
"ANSWER":4,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST11",
"QUESTION":"What is true about Class.getInstance()?",
"A":"Class.getInstance calls ",
"B":"Class.getInstance is same as new operator",
"C":"Class.getInstance needs to have matching constructor",
"D":"Class.getInstance creates object if class does not have any constructor",
"ANSWER":4,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST11",
"QUESTION":"What is true about constructor?",
"A":"It can contain return type",
"B":"It can take any number of parameters",
"C":"It can have any non access modifiers",
"D":"Constructor cannot throw an exception",
"ANSWER":2,
},


{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST11",
"QUESTION":"Abstract class cannot have a constructor.",
"A":"true",
"B":"false",
"ANSWER":2,
},


{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST11",
"QUESTION":"What is true about protected constructor?",
"A":"Protected constructor can be called directly",
"B":"Protected constructor can only be called using super()",
"C":"Protected constructor can be used outside package",
"D":"protected constructor can be instantiated even if child is in a different package",
"ANSWER":2,
},


{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST11",
"QUESTION":"What is not the use of “this” keyword in Java?",
"A":"Passing itself to another method",
"B":"Calling another constructor in constructor chaining",
"C":"Referring to the instance variable when local variable has the same name",
"D":"Passing itself to method of the same class",
"ANSWER":4,
},


{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST11",
"QUESTION":"What would be the behaviour if one parameterized constructor is explicitly defined?",
"A":"Compilation error",
"B":"Compilation succeeds",
"C":"Runtime error",
"D":"Compilation succeeds but at the time of creating object using default constructor, it throws compilation error",
"ANSWER":4,
},


{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST12",
"QUESTION":"Which of this keyword must be used to inherit a class?",
"A":"super",
"B":"this",
"C":"extent",
"D":"extends",
"ANSWER":4,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST12",
"QUESTION":" A class member declared protected becomes a member of subclass of which type?",
"A":"public member",
"B":"private member",
"C":"private member",
"D":"static member",
"ANSWER":2,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST12",
"QUESTION":"Which of these is correct way of inheriting class A by class B?",
"A":"class B + class A {}",
"B":"class B inherits class A {}",
"C":"class B extends A {}",
"D":"class B extends class A {}",
"ANSWER":3,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST12",
"QUESTION":" Which two classes use the Shape class correctly?\n A. public class Circle implements Shape \n {\n private int radius;\n} \n B. public abstract class Circle extends Shape \n { \n private int radius; \n   } \nC. public class Circle extends Shape \n { \n private int radius; \npublic void draw(); \n } \nD. public abstract class Circle implements Shape  \n  { \n
    private int radius; \n
    public void draw(); \n
   } \n
E. public class Circle extends Shape  \n
   { \n
    private int radius; \n
    public void draw() \n
    { \n
     /* code here */ \n
    } \n
   } \n
F. public abstract class Circle implements Shape  \n
   { \n
     private int radius; \n
     public void draw() \n
     { \n
      /* code here */ \n
     } \n
   } \n
 ",
"A"":"B,E",
"B": " A,C",
"C": "C,E",
"D": "T,H",
"ANSWER":1,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST12",
"QUESTION":"  What will be the output of the following Java program?

    class A
    {
        int i;
        void display()
        {
            System.out.println(i);
        }
    }
    class B extends A
    {
        int j;
        void display()
        {
            System.out.println(j);
        }
    }
    class inheritance_demo
    {
        public static void main(String args[])
        {
            B obj = new B();
            obj.i=1;
            obj.j=2;
            obj.display();
        }
   }",
"A"":" 0"
"B": "1"
"C": "2"
"D": "compilation error"
"ANSWER":3,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST12",
"QUESTION":"class A \n
    { \n
        int i; \n
        void display() \n
        { \n
            System.out.println(i); \n
        } \n
    }   \n
    class B extends A  \n
    { \n
        int j; \n
        void display()  \n
        { \n
            System.out.println(j); \n
        } \n
    }  \n
    class inheritance_demo  \n
    { \n
        public static void main(String args[]) \n
        { \n
            B obj = new B(); \n
            obj.i=1; \n
            obj.j=2;   \n
            obj.display(); \n
        } \n
   }",
"A":"2 2",
"B":"3 3",
"C":"2 3",
"D":"3 2",
"ANSWER":3,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST12",
"QUESTION":"What will be the output of the following Java program? \n
    class A \n
    { \n
        public int i; \n
        public int j; \n
        A() \n
        { \n
            i = 1; \n
            j = 2; \n
	} \n
    }    \n
    class B extends A \n
    { \n
        int a; \n
        B() \n
        { \n
            super(); \n
        } \n
    }    \n
    class super_use \n
    { \n
        public static void main(String args[]) \n
        { \n
            B obj = new B(); \n
            System.out.println(obj.i + " " + obj.j)   \n
        } \n
   }",
"A":"1 2",
"B":"2 1",
"C":"runtime error",
"D":"compilation error",
"ANSWER":1,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST12",
"QUESTION":"Which inheritance in java programming is not supported",
"A":"Multiple inheritance using classes",
"B":"Multiple inheritance using interfaces",
"C":"Multilevel inheritance",
"D":"Single inheritance",
"ANSWER":1,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST12",
"QUESTION":"Order of execution of constructors in Java Inheritance is",
"A":"Base to derived class",
"B":"Derived to base class",
"C":"Random order",
"D":"none of the above",
"ANSWER":1,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST12",
"QUESTION":"Inheritance relationship in Java language is",
"A":"Association",
"B":"Is-A",
"C":"Has-A",
"D":"None",
"ANSWER":2,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST13",
"QUESTION":" What is the process of defining two or more methods within same class that have same name but different parameters declaration?",
"A":"method overloading",
"B":"method overriding",
"C":"method hiding",
"D":"none of the mentioned",
"ANSWER":1,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST13",
"QUESTION":"Which of these can be overloaded?",
"A":"Methods",
"B":"Constructors",
"C":"All of the mentioned",
"D":"None of the mentioned",
"ANSWER":3,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST13",
"QUESTION":"Which of these is correct about passing an argument by call-by-value process?",
"A":"Copy of argument is made into the formal parameter of the subroutine",
"B":"Reference to original argument is passed to formal parameter of the subroutine",
"C":"Copy of argument is made into the formal parameter of the subroutine and changes made on parameters of subroutine have effect on original argument",
"D":"Reference to original argument is passed to formal parameter of the subroutine and changes made on parameters of subroutine have effect on original argument",
"ANSWER":1,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST13",
"QUESTION":" What is the process of defining a method in terms of itself, that is a method that calls itself",
"A":"Polymorphism",
"B":"Abstraction",
"C":"Encapsulation",
"D":"Recursion",
"ANSWER":4,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST13",
"QUESTION":"What will be the output of the following Java code? \n
class San \n
{ \n
 public void m1 (int i,float f) \n
 { \n
  System.out.println(" int float method"); \n
 } \n

 public void m1(float f,int i); \n
  { \n
  System.out.println("float int method"); \n
  } \n

  public static void main(String[]args) \n
  { \n
    San s=new San(); \n
        s.m1(20,20); \n
  } \n
}",
"A":"int float method",
"B":"float int method",
"C":"compile time error",
"D":"run time error",
"ANSWER":3,
},

 {
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST13",
"QUESTION":"What will be the output of the following Java code?

    class overload
    {
        int x;
 	int y;
        void add(int a)
        {
            x =  a + 1;
        }
        void add(int a, int b)
        {
            x =  a + 2;
        }
    }
    class Overload_methods
    {
        public static void main(String args[])
        {
            overload obj = new overload();
            int a = 0;
           obj.add(6);
            System.out.println(obj.x);
        }
   }
       ",
"A":"5",
"B":"6",
"C":"7",
"D":"8",
"ANSWER":3,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST13",
"QUESTION":"What will be the output of the following Java code?

    class overload
    {
        int x;
 	int y;
        void add(int a)
        {
            x =  a + 1;
        }
        void add(int a , int b)
        {
            x =  a + 2;
        }
    }
    class Overload_methods
    {
        public static void main(String args[])
        {
            overload obj = new overload();
            int a = 0;
            obj.add(6, 7);
            System.out.println(obj.x);
        }
    }",
"A":"6",
"B":"7",
"C":"8",
"D":"9",
"ANSWER":3,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST13",
"QUESTION":"What will be the output of the following Java code?

   class overload
   {
        int x;
 	double y;
        void add(int a , int b)
        {
            x = a + b;
        }
        void add(double c , double d)
        {
            y = c + d;
        }
        overload()
        {
            this.x = 0;
            this.y = 0;
        }
    }
    class Overload_methods
    {
        public static void main(String args[])
        {
            overload obj = new overload();
            int a = 2;
            double b = 3.2;
            obj.add(a, a);
            obj.add(b, b);
            System.out.println(obj.x + " " + obj.y);
        }
   }",
"A":"6 6",
"B":"6.4 6.4",
"C":"6.4 6",
"D":"4 6.4",
"ANSWER":4,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST13",
"QUESTION":"What will be the output of the following Java code?

    class test
    {
        int a;
        int b;
        void meth(int i , int j)
        {
            i *= 2;
            j /= 2;
        }
    }
    class Output
    {
        public static void main(String args[])
        {
            test obj = new test();
	    int a = 10;
            int b = 20;
            obj.meth(a , b);
            System.out.println(a + " " + b);
        }
    }",
"A":"10 20",
"B":"20 10",
"C":"20 40",
"D":"40 20",
"ANSWER":1,
},

{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"TEST13",
"QUESTION":"What will be the output of the following Java code?

    class test
    {
        int a;
        int b;
        test(int i, int j)
        {
            a = i;
            b = j;
        }
        void meth(test o)
        {
            o.a *= 2;
            O.b /= 2;
        }
    }
    class Output
    {
        public static void main(String args[])
        {
            test obj = new test(10 , 20);
            obj.meth(obj);
            System.out.println(obj.a + " " + obj.b);
        }
    }",
"A":"10 20",
"B":"20 10",
"C":"20 40",
"D":"40 20",
"ANSWER":2,
},
]

menu.forEach(function(obj) {
db.collection("Questions").add({
CATEGORY: obj.CATEGORY,
TEST:obj.TEST,
QUESTION:obj.QUESTION,
A:obj.A,
B:obj.B,
C:obj.C,
D:obj.D,
ANSWER:obj.ANSWER,
}).then(function(docRef) {
console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
console.error("Error adding document: ", error);
});
});
