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
"NAME":"vb.net",
"NUMBER_OF_TESTS":4
},
{
"NAME":"javascript",
"NUMBER_OF_TESTS":4
}
]

menu.forEach(function(obj) {
db.collection("QUIZ").add({
NAME: obj.NAME,
NUMBER_OF_TESTS:obj.NUMBER_OF_TESTS,
}).then(function(docRef) {
console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
console.error("Error adding document: ", error);
});
});
//solving branch issue