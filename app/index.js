const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyB5GiFIrm4q9Q3s2LRlXdamiHleCXYb9hM",
    authDomain: "<YOUR AUTH DOMAIN>",
    projectId: "784394759513"
  });

var db = firebase.firestore();

var menu =[
    {
      NAME:"vb.net",
      NUMBER_OF_TESTS:4
    },
    {
       NAME:"javascript",
       NUMBER_OF_TESTS:4
    }
 ]

menu.forEach(function(obj) {
    db.collection("menu").add({
        id: obj.id,
        name: obj.name,
        description: obj.description,
        price: obj.price,
        type: obj.type
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});