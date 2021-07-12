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
"TEST":"AAAA",
"QUESTION":"2+5",
"A":"2",
"B":"3",
"C":"7",
"D":"2",
"ANSWER":3,
},
{
"CATEGORY":"QXMDYGn4BursvyhqYp7b",
"TEST":"AAAA",
"QUESTION":"2+0",
"A":"2",
"B":"3",
"C":"7",
"D":"2",
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
