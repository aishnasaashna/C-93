
const config = {
  apiKey: "AIzaSyC_NyeMGKYTZjtt7dknHsCW9sDxMdwFBIg",
  authDomain: "kwitter-53b89.firebaseapp.com",
  projectId: "kwitter-53b89",
  storageBucket: "kwitter-53b89.appspot.com",
  messagingSenderId: "472035635920",
  appId: "1:472035635920:web:23c222848e52fab6fa64d5"
};

// Initialize Firebase
firebase.initializeApp(config);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
