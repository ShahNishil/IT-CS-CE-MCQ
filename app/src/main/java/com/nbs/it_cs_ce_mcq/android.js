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
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST1",
"QUESTION":"What is true about Android?",
"A":"Android is an open source",
"B":"Linux-based Operating System",
"C":"Used in mobile devices such as smartphones and tablet computers.",
"D":"All of the above",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST1",
"QUESTION":"Android was developed by the?",
"A":"Sun Microsystem",
"B":"Open Handset Alliance",
"C":"AT & T labs",
"D":"Facebook",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST1",
"QUESTION":"The first beta version of the Android Software Development Kit (SDK) was released by Google in?",
"A":"2007",
"B":"2008",
"C":"2009",
"D":"2016",
"ANSWER":1,
},

{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST1",
"QUESTION":"Jelly Bean is an incremental update, with the primary aim of improving the?",
"A":"user interface",
"B":"functionality",
"C":"performance",
"D":"All of the above",
"ANSWER":4,
},

{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST1",
"QUESTION":"In Which application Android applications are usually developed?",
"A":"C",
"B":"Python",
"C":"Java",
"D":"Ruby",
"ANSWER":3,
},

{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST1",
"QUESTION":"What is API level of Android 5.0?",
"A":"20",
"B":"21",
"C":"22",
"D":"23",
"ANSWER":2,
},

{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST1",
"QUESTION":"Version code of Android 6.0 is?",
"A":"LOLLIPOP_MR1",
"B":"Oreo",
"C":"MARSHMALLOW",
"D":"Nugget",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST1",
"QUESTION":"Android 1.0, was released in?",
"A":"September 2008",
"B":"September 2007",
"C":"September 2006",
"D":"September 2009",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST1",
"QUESTION":"__________________ is a service that lets developers send short message data to their users on Android devices, without needing a proprietary sync solution.",
"A":"SMS",
"B":"MMS",
"C":"CAM",
"D":"GCM",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST1",
"QUESTION":"Which of the following is not a Features of Android?",
"A":"Connectivity",
"B":"Storage",
"C":"Slide Mobango",
"D":"Multi-touch",
"ANSWER":3,
},


{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST2",
"QUESTION":"Android operating system is a stack of software components which is roughly divided into how many layers?",
"A":"2",
"B":"3",
"C":"4",
"D":"5",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST2",
"QUESTION":"Bottom layer is known as?",
"A":"Libraries",
"B":"Linux kernel",
"C":"Application Framework",
"D":" Applications",
"ANSWER":2,
},
{
  "CATEGORY":"fbiNNUS1OlzcZi07x9Os",
  "TEST":"TEST2",
  "QUESTION":"Top Layer is known as?",
  "A":"Libraries",
  "B":"Linux kernel",
  "C":"Application Framework",
  "D":" Applications",
  "ANSWER":4,
},
{
    "CATEGORY":"fbiNNUS1OlzcZi07x9Os",
    "TEST":"TEST2",
    "QUESTION":"Which section provides a key component called Dalvik Virtual Machine?",
    "A":"Libraries",
    "B":"Android Runtime",
    "C":"Application Framework",
    "D":" Applications",
    "ANSWER":2,
    },
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST2",
"QUESTION":"Resource Manager is used for?",
"A":"Controls all aspects of the application lifecycle and activity stack.",
"B":"Allows applications to publish and share data with other applications.",
"C":"Provides access to non-code embedded resources such as strings, color settings and user interface layouts.",
"D":"Allows applications to display alerts and notifications to the user.",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST2",
"QUESTION":"Which of the following is not a layer in Android Architecture?",
"A":"Android Runtime",
"B":"Libraries",
"C":"Application Framework",
"D":" Applications",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST2",
"QUESTION":"Activity Manager is used to?",
"A":"Controls all aspects of the application lifecycle and activity stack.",
"B":"Allows applications to publish and share data with other applications.",
"C":"Provides access to non-code embedded resources such as strings, color settings and user interface layouts.",
"D":"Allows applications to display alerts and notifications to the user.",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST2",
"QUESTION":"Which of the following libraries has Java interface to the OpenGL ES 3D graphics rendering API?",
"A":"android.os",
"B":"android.database",
"C":"android.opengl",
"D":"android.widget",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST2",
"QUESTION":"android.webkit libraries is?",
"A":"Used to render and manipulate text on a device display.",
"B":"The fundamental building blocks of application user interfaces.",
"C":"A set of classes intended to allow web-browsing capabilities to be built into applications.",
"D":"A Java interface to the OpenGL ES 3D graphics rendering API.",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST2",
"QUESTION":"Which of the following libraries provides access to the application model and is the cornerstone of all Android applications?",
"A":"android.app",
"B":"android.content",
"C":"android.database",
"D":"android.widget",
"ANSWER":1,
},



{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST3",
"QUESTION":"How many main components that can be used within an Android application?",
"A":"2",
"B":"3",
"C":"4",
"D":"5",
"ANSWER":3,
},

{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST3",
"QUESTION":"Which component handle background processing associated with an application?",
"A":"Activities",
"B":"Services",
"C":"Broadcast Receivers",
"D":"Content Providers",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST3",
"QUESTION":"What is true about Content Providers?",
"A":"They dictate the UI and handle the user interaction to the smart phone screen",
"B":"They handle background processing associated with an application.",
"C":"They handle communication between Android OS and applications",
"D":"They handle data and database management issues",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST3",
"QUESTION":"What is true about Activities component?",
"A":"An activity represents a single screen with a user interface,in-short Activity performs actions on the screen.",
"B":"Application has more than one activity, then one of them should be marked as the activity that is presented when the application is launched.",
"C":"An activity is implemented as a subclass of Activity class",
"D":"All of the above",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST3",
"QUESTION":"Which of the following statement is false about Broadcast Receivers?",
"A":"A broadcast receiver is implemented as a subclass of ContentProvider class",
"B":"A broadcast receiver is implemented as a subclass of Activity class",
"C":"A broadcast receiver is implemented as a subclass of BroadcastReceiver class",
"D":"A broadcast receiver is implemented as a subclass of Service class",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST3",
"QUESTION":"What is true about Intents component?",
"A":"External elements, such as strings, constants and drawable pictures.",
"B":"UI elements that are drawn on-screen including buttons, lists forms etc.",
"C":"View hierarchies that control screen format and appearance of the views",
"D":"Messages wiring components together",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST3",
"QUESTION":"What is true about Fragments component?",
"A":"Represents a portion of user interface in an Activity.",
"B":"UI elements that are drawn on-screen including buttons, lists forms etc.",
"C":"View hierarchies that control screen format and appearance of the views.",
"D":"Messages wiring components together",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST3",
"QUESTION":"Which of the following component has view hierarchies that control screen format and appearance of the views?",
"A":"Layouts",
"B":"Views",
"C":"Resources",
"D":"Manifest",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST3",
"QUESTION":"Which of the following component has UI elements that are drawn on-screen including buttons, lists forms etc?",
"A":"Fragments",
"B":"Views",
"C":"Resources",
"D":"Manifest",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST3",
"QUESTION":"Which of the following component has Configuration file for the application?",
"A":"Resources",
"B":"Manifest",
"C":"Services",
"D":"Activities",
"ANSWER":2,
},


{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST4",
"QUESTION":"A __________ is a piece of an activity which enable more modular activity design.",
"A":"Fragment",
"B":"sub-activity",
"C":"Intents",
"D":"Filters",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST4",
"QUESTION":"What is true about Fragments ?",
"A":"A fragment has its own layout and its own behaviour with its own life cycle callbacks.",
"B":"You can add or remove fragments in an activity while the activity is running.",
"C":"You can combine multiple fragments in a single activity to build a multi-pane UI.",
"D":"All of the above",
"ANSWER":4,
},

{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST4",
"QUESTION":"Which method is called once the fragment gets visible?",
"A":"onStart",
"B":"onPause",
"C":"onResume",
"D":"onStop",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST4",
"QUESTION":"Which method is called Fragment going to be stopped?",
"A":"onStart",
"B":"onPause",
"C":"onResume",
"D":"onStop",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST4",
"QUESTION":"Which method is called when called to do final clean up of the fragment's state but Not guaranteed to be called by the Android platform?",
"A":"onStart",
"B":"onPause",
"C":"onDestroy",
"D":"onStop",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST4",
"QUESTION":"Which method Fragment becomes active?",
"A":"onStart",
"B":"onPause",
"C":"onResume",
"D":"onStop",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST4",
"QUESTION":"Fragments are divided as ________ stages.",
"A":"2",
"B":"3",
"C":"4",
"D":"5",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST4",
"QUESTION":"In which android version Single frame fragment introduced?",
"A":"android 2.0 version",
"B":"android 3.0 version",
"C":"android 4.0 version",
"D":"android 5.0 version",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST4",
"QUESTION":"Fragments having special list view is called as?",
"A":"list fragment",
"B":"view fragment",
"C":"frame fragment",
"D":"special fragment",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST4",
"QUESTION":"Activity and Fragment transitions in Lollipop are built on top of a relatively new feature in Android called?",
"A":"scenes",
"B":"Activity",
"C":"fragment stack",
"D":"transitions",
"ANSWER":4,
},



{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST5",
"QUESTION":"An Android _____________ is an abstract description of an operation to be performed. It can be used with startActivity to launch an Activity.",
"A":"Filters",
"B":"Intent",
"C":"Service",
"D":"Broadcast Receiver",
"ANSWER":2,
},

{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST5",
"QUESTION":"Which method is used to launch a new activity or get an existing activity to do something new?",
"A":"Context.startActivity()",
"B":"Context.startService()",
"C":"Context.sendBroadcast()",
"D":"All of the above",
"ANSWER":1,
},

{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST5",
"QUESTION":"Which method is used to initiate a service or deliver new instructions to an ongoing service?",
"A":"Context.startActivity()",
"B":"Context.startService()",
"C":"Context.sendBroadcast()",
"D":"All of the above",
"ANSWER":2,
},

{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST5",
"QUESTION":"Which of the following action will display the phone dialer with the given number filled in?",
"A":"ACTION_VIEW tel:123",
"B":"ACTION_SET_WALLPAPER",
"C":"ACTION_DIAL tel:123",
"D":"None of the above",
"ANSWER":3,
},

{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST5",
"QUESTION":"Which of the following is true about ACTION_TIMEZONE_CHANGED?",
"A":"It is used to run default uninstaller",
"B":"Show settings for choosing wallpaper",
"C":"Display a list of people, which the user can browse through.",
"D":"It intimates when time zone has changed",
"ANSWER":4,
},

{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST5",
"QUESTION":"The action in an Intent object can be set by the?",
"A":"setAction() method",
"B":"set() method",
"C":"Action() method",
"D":"setsAction() method",
"ANSWER":1,
},

{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST5",
"QUESTION":"In Data, The URI is read by?",
"A":"getD()",
"B":"get()",
"C":"getData()",
"D":"getsetData()",
"ANSWER":3,
},

{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST5",
"QUESTION":"Which of the following is true about ACTION_SET_WALLPAPER?",
"A":"Edit information about the person whose identifier is 1",
"B":"Show settings for choosing wallpaper",
"C":"It will start the platform-defined tutorial",
"D":"It intimates when time zone has changed",
"ANSWER":2,
},

{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST5",
"QUESTION":"The extras can be set and read using the?",
"A":"setExtras() and getExtras() methods",
"B":"putsExtras() and getsExtras() methods",
"C":"setsExtras() and getsExtras() methods",
"D":"setsExtras() and getsExtras() methods",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST5",
"QUESTION":"What is true about FLAG_ACTIVITY_NEW_TASK?",
"A":"If set in an Intent passed to Context.startActivity()",
"B":"If set, and the activity being launched is already running in the current task",
"C":"This flag is generally used by activities that want to present a 'launcher' style behavior",
"D":"All of the above",
"ANSWER":3,
},



{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST6",
"QUESTION":"View refers to the?",
"A":"android.View.view class",
"B":"android.view.View class",
"C":"android.view class",
"D":"android.View class",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST6",
"QUESTION":"View class extends Object class and implements?",
"A":"Drawable.Callback",
"B":"KeyEvent.Callback",
"C":"AccessibilityEventSource",
"D":"All of the above",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST6",
"QUESTION":"___________ means it will occupy the complete space available on the display of the device.",
"A":"wrap_content ",
"B":"match_content",
"C":"match_parent",
"D":"wrap_parent",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST6",
"QUESTION":"___________ means it will occupy only that much space as required for its content to display.",
"A":"wrap_content ",
"B":"match_content",
"C":"match_parent",
"D":"wrap_parent",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST6",
"QUESTION":"View always start with?",
"A":"[",
"B":"<",
"C":"{",
"D":"(",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST6",
"QUESTION":"In the end, it is closed by ?",
"A":"[",
"B":"<",
"C":">",
"D":"/>",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST6",
"QUESTION":"To embed a web browser in your activity which view you will use?",
"A":"RichTextView",
"B":"Browser",
"C":"WebView",
"D":"None of the above",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST6",
"QUESTION":"To display text which control you will use?",
"A":"EditText",
"B":"TextView",
"C":"label",
"D":"ViewText",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST6",
"QUESTION":"There are two attributes that are necessary for every View. These are: android:layout_height and android:layout_width.",
"A":"TRUE",
"B":"FALSE",
"C":"Can be true or false",
"D":"Can not say",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST6",
"QUESTION":"A View is also known as Widget in Android.",
"A":"TRUE",
"B":"FALSE",
"C":"Can be true or false",
"D":"Can not say",
"ANSWER":1,
},



{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST7",
"QUESTION":"Android system initiates its program with in an Activity starting with a call on ?",
"A":"offCreate() callback",
"B":"onDrop() callback",
"C":"onStart() callback",
"D":"onCreate() callback",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST7",
"QUESTION":"Which callback is called when the activity becomes visible to the user?",
"A":"onCreate()",
"B":"onStart()",
"C":"onResume()",
"D":"onPause()",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST7",
"QUESTION":"Which callback is called when the activity is no longer visible?",
"A":"onCreate()",
"B":"onStart()",
"C":"onStop()",
"D":"onPause()",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST7",
"QUESTION":"Which callback is called when the activity restarts after stopping it?",
"A":"onCreate()",
"B":"onStart()",
"C":"onResume()",
"D":"onRestart()",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST7",
"QUESTION":"If you need to pass data back from an activity, Which method you should use?",
"A":"startActivity()",
"B":"startActivityForResult()",
"C":"ActivityForResult()",
"D":"None of the above.",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST7",
"QUESTION":"In android mini-activities are also known as",
"A":"Adapter",
"B":"Activity",
"C":"Fragments",
"D":"None of the above",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST7",
"QUESTION":"For creating Fragments the java class needs to extend which base class?",
"A":"MainActivity",
"B":"MiniActivity",
"C":"Fragments",
"D":"None of the above",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST7",
"QUESTION":"The Log.d() method has been used to generate log messages",
"A":"TRUE",
"B":"FALSE",
"C":"Can be true or false",
"D":"Can not say",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST7",
"QUESTION":"An application can have one or more activities without any restrictions.",
"A":"TRUE",
"B":"FALSE",
"C":"Can be true or false",
"D":"Can not say",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST7",
"QUESTION":"Every activity you define for your application must be declared in your Android.xml file",
"A":"TRUE",
"B":"FALSE",
"C":"Can be true or false",
"D":"Can not say",
"ANSWER":2,
},



{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST8",
"QUESTION":"",
"A":"",
"B":"",
"C":"",
"D":"",
"ANSWER":1,
},




{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST1",
"QUESTION":"What should be the execution order, if a class has a method, static block, instance block, and constructor, as shown below? \n public class First_C { \n public void myMethod() \n { \n System.out.println(\"Method\"); \n } \n { \n System.out.println(\" Instance Block\"); \n } \n public void First_C() \n { \n System.out.println(\"Constructor \"); \n } \n static { \n System.out.println(\"static block\"); \n } \n public static void main(String[] args) { \n First_C c = new First_C(); \n c.First_C(); \n c.myMethod(); \n } \n }",
"A":"Instance block, method, static block, and constructor",
"B":"Method, constructor, instance block, and static block",
"C":"Static block, method, instance block, and constructor",
"D":"Static block, instance block, constructor, and method",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST7",
"QUESTION":" Which function best describe the concept of polymorphism in programming languages?",
"A":"Class member function",
"B":"Virtual function",
"C":"Inline function",
"D":"Undefined function",
"ANSWER":2,
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
