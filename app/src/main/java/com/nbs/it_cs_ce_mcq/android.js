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
"QUESTION":"Android 1.5 is known by the name_________.",
"A":"Cupcake",
"B":"Eclair",
"C":"Donut",
"D":"Froyo",
"ANSWER":1,
},

{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST8",
"QUESTION":"Android 1.6 is known by the name_________.",
"A":"Cupcake",
"B":"Eclair",
"C":"Donut",
"D":"Froyo",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST8",
"QUESTION":"Android 2.1 is known by the name_________.",
"A":"Cupcake",
"B":"Eclair",
"C":"Donut",
"D":"Froyo",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST8",
"QUESTION":"Android 2.2 is known by the name_________.",
"A":"Cupcake",
"B":"Eclair",
"C":"Donut",
"D":"Froyo",
"ANSWER":4,
},

{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST8",
"QUESTION":"Android 5.0 is known by the name_________.",
"A":"Lollipop",
"B":"Jellybean",
"C":"Marshmallow",
"D":"Oreo",
"ANSWER":1,
},


{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST8",
"QUESTION":"Which is not the correct name of an android version?",
"A":"Cupcake",
"B":"WaterMellon",
"C":"Donut",
"D":"Froyo",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST8",
"QUESTION":"Which is not the correct name of an android version?",
"A":"Cupcake",
"B":"Marshmallow",
"C":"Chocolate",
"D":"Kitkat",
"ANSWER":3,
},

{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST8",
"QUESTION":"Which is the correct name of an android version?",
"A":"Chocolate",
"B":"WaterMellon",
"C":"Banana",
"D":"None of the above",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST8",
"QUESTION":"Which is the correct name of an android version?",
"A":"Chocolate",
"B":"Nougat",
"C":"Banana",
"D":"KatKit",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST8",
"QUESTION":"Which is the correct name of an android version?",
"A":"Chocolate",
"B":"WaterMellon",
"C":"Oreo",
"D":"KitBean",
"ANSWER":3,
},




{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST9",
"QUESTION":"Firebase is a backend platform for building?",
"A":"Web",
"B":"Android",
"C":"IOS",
"D":"All of the above",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST9",
"QUESTION":"The Firebase data is representing ________ objects.",
"A":"SQL",
"B":"Mongo",
"C":"JSON",
"D":"Javascript",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST9",
"QUESTION":"Founders of Firebase?",
"A":"Google",
"B":"James Tamplin",
"C":"Donald D. Chamberlin",
"D":"Raymond F. Boyce",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST9",
"QUESTION":"Which method used to update the Firebase data?",
"A":"alter",
"B":"put",
"C":"set",
"D":"update",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST9",
"QUESTION":"We can get any key from Firebase by using the ________ method.",
"A":"key()",
"B":"firebase.key()",
"C":"fb.key()",
"D":"firebase().key",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST9",
"QUESTION":"To authenticate a user, we can use the ?",
"A":"createEmailAndPassword()",
"B":"createUser()",
"C":"createUserWithEmailAndPassword()",
"D":"createWithEmailAndPassword()",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST9",
"QUESTION":"We can logout the user with the __________ method.",
"A":"Exit()",
"B":"signOut()",
"C":"POP()",
"D":"POPOUT()",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST9",
"QUESTION":"Which of the following is best practices for firebase?",
"A":"Avoid Nesting Data",
"B":"Denormalize Data",
"C":"Both A and B",
"D":"None of the above",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST9",
"QUESTION":"limitToFirst method returns the specified number of items beginning from the first one.",
"A":"TRUE",
"B":"FALSE",
"C":"Can be true or false",
"D":"Can not say",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST9",
"QUESTION":"Which of the following ports not used by FCM?",
"A":"5228",
"B":"5229",
"C":"5230",
"D":"5231",
"ANSWER":4,
},


{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST10",
"QUESTION":"Which of the following virtual machine is used by the Android operating system?",
"A":"JVM",
"B":"Dalvik virtual machine",
"C":"Simple virtual machine",
"D":"None of the above",
"ANSWER":2,
},

{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST10",
"QUESTION":"Android is based on which of the following language?",
"A":"Java",
"B":"C++",
"C":"C",
"D":"None of the above",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST10",
"QUESTION":"APK stands for ______.",
"A":"Android Phone Kit",
"B":"Android Page Kit",
"C":"Android Package Kit",
"D":"None of the above",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST10",
"QUESTION":"What does API stand for?",
"A":"Application Programming Interface",
"B":"Android Programming Interface",
"C":"Android Page Interface",
"D":"Application Page Interface",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST10",
"QUESTION":"Which of the following converts Java byte code into Dalvik byte code?",
"A":"JVM",
"B":"Dalvik virtual machine",
"C":"Dex compiler",
"D":"None of the above",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST10",
"QUESTION":"ADB stands for -",
"A":"Android debug bridge",
"B":"Android delete bridge",
"C":"Android destroy bridge",
"D":"None of the above",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST10",
"QUESTION":"On which of the following, developers can test the application, during developing the android applications?",
"A":"Third-party emulators",
"B":"Emulator included in Android SDK",
"C":"Physical android phone",
"D":"All of the above",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST10",
"QUESTION":"We require an AVD to create an emulator. What does AVD stand for?",
"A":"Android Virtual device",
"B":"Android Virtual display",
"C":"Active Virtual display",
"D":"Active Virtual device",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST10",
"QUESTION":"AAPT stands for -",
"A":"Android Activity Packaging Tool",
"B":"Android Asset Packaging Tool",
"C":"Android Action Packaging Tool",
"D":"None of the above",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST10",
"QUESTION":"NDK stands for -",
"A":"Native Development Kit",
"B":"New Development kit",
"C":"Native Design Kit",
"D":"None of the above",
"ANSWER":1,
},


{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST11",
"QUESTION":"What is/are storage option available in android?",
"A":"SharedPreferences",
"B":"SQLiteDatabase",
"C":"ContentProvider",
"D":"All of the above.",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST11",
"QUESTION":"Which objects stores the data only in key-value pair?",
"A":"SharedPreferences",
"B":"SQLiteDatabase",
"C":"ContentProvider",
"D":"All of the above.",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST11",
"QUESTION":"SharedPreferences stores the data in which format?",
"A":"TXT",
"B":"XML",
"C":"DOC",
"D":"None of the above.",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST11",
"QUESTION":"Which objects stores only primitive data type?",
"A":"SharedPreferences",
"B":"SQLiteDatabase",
"C":"ContentProvider",
"D":"All of the above.",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST11",
"QUESTION":"You want to store website name by using SharedPreferences. Choose the correct option for doing this.",
"A":"SharedPreferences obj=getSharedPreferences(\"MySharedFile\", Context.MODE_PRIVATE);\nobj.putString(“name”, “CareerRide.com”);\nobj.commit();",
"B":"SharedPreferences obj= new SharedPreferences (\"MySharedFile\",\nContext.MODE_PRIVATE);\nString n=obj.getString("name", null);",
"C":"SharedPreferences obj=getSharedPreferences(\"MySharedFile\", Context.MODE_PRIVATE);\nEditor editor=obj.edit();\neditor.putString(“name”, “CareerRide.com”);\neditor.commit();",
"D":"None of the above.",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST11",
"QUESTION":"You want to read website name by using SharedPreferences. Choose the correct option for doing this.",
"A":"SharedPreferences obj=getSharedPreferences(\"MySharedFile \", Context.MODE_PRIVATE);\nString n=obj.getString("name", null);",
"B":"SharedPreferences obj= new SharedPreferences (\"MySharedFile\", Context.MODE_PRIVATE);\nString n=obj.getString("name", null);",
"C":"String n=obj.getString(\"name\", null);",
"D":"None of the above.",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST11",
"QUESTION":"To write files on the external storage, which permission you will write in AndroidManifest.xml file",
"A":"WRITE_STORAGE",
"B":"WRITE_EXTERNAL_DATA",
"C":"WRITE_EXTERNAL_STORAGE",
"D":"None of the above.",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST11",
"QUESTION":"If you want share the data from one application to other applications,ou will which object you will use?",
"A":"SharedPreferences",
"B":"SQLiteDatabase",
"C":"ContentProvider",
"D":"All of the above.",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST11",
"QUESTION":"To check whether the media(external storage) is available, which method of Environment class you will use?",
"A":"getExternalStorageState()",
"B":"getExternalStorage()",
"C":"getExternalStateData()",
"D":"None of the above.",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST11",
"QUESTION":"In order to use internal storage to write some data in the file, which method will be used?This method returns FileOutputStream.",
"A":"openFileInput()",
"B":"openFileOutput()",
"C":"openForWrite()",
"D":"None of the above.",
"ANSWER":2,
},



{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST12",
"QUESTION":"What is the default layout in android application?",
"A":"RelativeLayout",
"B":"TableLayout",
"C":"LinearLayout",
"D":"FrameLayout",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST12",
"QUESTION":"When a button is clicked, which listener you can use?",
"A":"SetOnClickListener",
"B":"OnClickListener",
"C":"ClickListener",
"D":"None of the above.",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST12",
"QUESTION":"OnCheckedChangeListener can be used with which control?",
"A":"RadioButton",
"B":"CheckBox",
"C":"Option A and B are correct.",
"D":"None of the above.",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST12",
"QUESTION":"To display text which control you will use?",
"A":"EditText",
"B":"TextView",
"C":"label",
"D":"None of the above",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST12",
"QUESTION":"Which method sets the minimum number of characters the user must type before the suggestions appear as a drop-down menu, while working with ArrayAdapter?",
"A":"SetMinChar()",
"B":"MinChar()",
"C":"setThreshold()",
"D":"None of the above.",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST12",
"QUESTION":"You can shut down an activity by calling which method?",
"A":"finishActivity()",
"B":"finish()",
"C":"destroy()",
"D":"None of the above.",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST12",
"QUESTION":"To embed a web browser in your activity which view you will use?",
"A":"RichTextView",
"B":"Browser",
"C":"WebView",
"D":"None of the above.",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST12",
"QUESTION":"How will you access the array that is created in .java file ? Suppose that array name is days.",
"A":"ArrayAdapter<String> adapter = new ArrayAdapter<String> (days);",
"B":"ArrayAdapter<String> adapter = new ArrayAdapter<String> (this, android.R.layout.simple_dropdown_item_1line, days);",
"C":"ArrayAdapter<String> adapter = new ArrayAdapter<String> (android.R.layout.simple_dropdown_item_1line, days);",
"D":"None of the above.",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST12",
"QUESTION":"Which control works as a dropdownlist in Android?",
"A":"RadioButton",
"B":"CheckBox",
"C":"Spinner",
"D":"None of the above.",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST12",
"QUESTION":"Which component is not activated by Intent?",
"A":"Services",
"B":"Activity",
"C":"contentProvider",
"D":"None of the above.",
"ANSWER":3,
},




{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST13",
"QUESTION":"Which element is used to display Google map in your UI.",
"A":"MapView",
"B":"Map",
"C":"View",
"D":"None of the above.",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST13",
"QUESTION":"For using Google map which permission you will specify in the AndroidManifest.xml?",
"A":"USEMAP",
"B":"USE_GOOGLE_MAP",
"C":"INTERNET",
"D":"None of the above.",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST13",
"QUESTION":"What is geocoding?",
"A":"Geocoding is the act of converting an address into its coordinates (latitude and longitude).",
"B":"Geocoding converts a pair of location coordinates into an address.",
"C":"Geocoding means geographical coding.",
"D":"None of the above.",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST13",
"QUESTION":"To enable zoom control on google map, Which method of MapView is used? Suppose that instance of MapView is mapView.",
"A":"ZoomControls.Enabled=true",
"B":"mapView.setBuiltInZoomControls(true);",
"C":"mapView= ZoomControls(true);",
"D":"None of the above.",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST13",
"QUESTION":"By default, Google Maps displays the map of the United States when it is first loaded. How you can display the particular location?",
"A":"You cannot change the default locaction.",
"B":"setZoom= true.",
"C":"By using the animateTo() method of the MapController class.",
"D":"None of the above.",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST13",
"QUESTION":"Which class is used to access to the system location services?",
"A":"LocationManager",
"B":"Object",
"C":"GoogleManager",
"D":"None of the above.",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST13",
"QUESTION":"How will you instantiate LocationManager object?",
"A":"LocationManager LM =new LocationManager();",
"B":"LocationManager LM = getSystemService(Context.LOCATION_SERVICE).",
"C":"LocationManager LM = Context.LOCATION_SERVICE.",
"D":"None of the above.",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST13",
"QUESTION":"If you know the address of a location but want to know its latitude and longitude, then which class is used?",
"A":"Geocoder",
"B":"Location",
"C":"MapViewLocation",
"D":"None of the above.",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST13",
"QUESTION":"What are the different location provider are available that you can use to obtain lacation data?",
"A":"LocationManager.GPS_PROVIDER",
"B":"LocationManager.NETWORK_PROVIDER",
"C":"LocationManager.PASSIVE_PROVIDER",
"D":"All of the above.",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST13",
"QUESTION":"How will you add marker on map?",
"A":"By using the animateTo() method of the MapController class.",
"B":"Directly use draw method.",
"C":"setZoom= true.",
"D":"None of the above.",
"ANSWER":1,
},



{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST14",
"QUESTION":"Which permission you need to declare in your AndroidManifest.xml file for sending SMS.",
"A":"<uses-permission android:name=\"android.permission.SEND_SMS\"/>",
"B":"<uses-permission android:name=\"android.SEND_SMS\"/>",
"C":"<uses-permission =\"android.permission.SEND_SMS\"/>",
"D":"None of the above.",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST14",
"QUESTION":"Which class is used to send SMS programmatically?",
"A":"SmsSender",
"B":"SmsManager",
"C":"SMS",
"D":"None of the above.",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST14",
"QUESTION":"How to get feedback on message sent?",
"A":"Use two Intent objects in the sendTextMessage() method.",
"B":"Use two PendingIntent objects in the sendTextMessage() method.",
"C":"Use two PendingIntent objects in the startActivity() method.",
"D":"None of the above.",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST14",
"QUESTION":"What code you will write to send the SMS to another AVD? Suppose that the AVD no is 5556",
"A":"SmsManager sms=new SmsManager();\nsms.sendSMS("5556", null, \"Hello Android\", null, null);",
"B":"SmsManager sms=new SmsManager();\nsms.sendTextMessage(\"5556\", null, \"Hello Android\", null, null);",
"C":"SmsManager sms=SmsManager.getDefault();\nsms.sendTextMessage(\"5556\", null, \"Hello Android\", null, null);",
"D":"None of the above.",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST14",
"QUESTION":"What types of menus is/are supported by Android?",
"A":"Option menu and Context menu",
"B":"Only Option menu",
"C":"Only Context menu",
"D":"None of the above.",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST14",
"QUESTION":"Which is Parent class of Activity?",
"A":"ActivityGroup",
"B":"Context",
"C":"BaseActivity",
"D":"ContextThemeWrapper",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST14",
"QUESTION":"Which is/are related to fragment class?",
"A":"dialogFragment",
"B":"listFragment",
"C":"preferenceFragment",
"D":"All of the above.",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST14",
"QUESTION":"Which permission you need to declare in your AndroidManifest.xml file for initiating a call using the system in-call Activity?",
"A":"CALL_NUMBER uses-permission",
"B":"DIAL_PHONE  uses-permission",
"C":"CALL_PHONE  uses-permission",
"D":"None of the above.",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST14",
"QUESTION":"For accessing the subscriber identity module (SIM) detail which class you will use?",
"A":"SimManager",
"B":"TelephonyManager",
"C":"MobileManager",
"D":"None of the above.",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST14",
"QUESTION":"What is the purpose of the ImageSwitcher?",
"A":"The ImageSwitcher enables images to be displayed with animation.",
"B":"The ImageSwitcher displayed images without animation.",
"C":"An image switcher allows you to add some transitions on the images.",
"D":"Option A and C are correct.",
"ANSWER":4,
},



{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST15",
"QUESTION":"To share data across packages in Android which object you will prefer?",
"A":"SharedPreference",
"B":"ContentProvider",
"C":"DataProvider",
"D":"None of the above.",
"ANSWER":2,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST15",
"QUESTION":"To query a content provider, you specify the query string in the form of a URI. The format of the query URI is as follows:\n<standard_prefix>://<authority>/<data_path>/<id>\nWhat you will write in place of <standard_prefix> ?",
"A":"content",
"B":"object",
"C":"ContentProvider",
"D":"None of the above.",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST15",
"QUESTION":"For reading the contacts from the Contacts, Which permission you will set in AndroidManifest.xml file if you are using ContentProvider.",
"A":"FIND_CONTACTS",
"B":"GET_CONTACTS",
"C":"READ_CONTACTS",
"D":"None of the above.",
"ANSWER":3,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST15",
"QUESTION":"SimpleCursorAdapter object maps a cursor to which view, defined in your XML file?",
"A":"TextViews",
"B":"ImageViews",
"C":"Both A and B option are correct.",
"D":"None of the above.",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST15",
"QUESTION":"What are the predefined query string constants available in Android? ",
"A":"ContactsContract.Contacts.CONTENT_URI",
"B":"Browser.SEARCHES_URI",
"C":"MediaStore.Images.Media.INTERNAL_CONTENT_URI",
"D":"All of the above.",
"ANSWER":4,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST15",
"QUESTION":"For Creating your own content provider which class you will inherit?",
"A":"ContentProvider",
"B":"Content",
"C":"Object",
"D":"None of the above.",
"ANSWER":1,
},
{
"CATEGORY":"fbiNNUS1OlzcZi07x9Os",
"TEST":"TEST15",
"QUESTION":"What is Android Interface Definition Language (AIDL)?",
"A":"AIDL does not the Java programming language.",
"B":"It does not define the programming interface.",
"C":"It defines the programming interface that both the client and service agree upon in order to communicate with each other using inter process communication (IPC).",
"D":"None of the above.",
"ANSWER":3,
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