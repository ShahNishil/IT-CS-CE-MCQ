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
"QUESTION":"What should be the execution order, if a class has a method, static block, instance block, and constructor, as shown below?

            public class First_C {
                  public void myMethod()
                {
                System.out.println("Method");
                }

                {
                System.out.println(" Instance Block");
                }

                public void First_C()
                {
                System.out.println("Constructor ");
                }
                static {
                    System.out.println("static block");
                }
                public static void main(String[] args) {
                First_C c = new First_C();
                c.First_C();
                c.myMethod();
              }
            }   ",
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
}
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
