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
