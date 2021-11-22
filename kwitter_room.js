
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDIdZMw8Sq2sd6zBeZGf8z0dZPwoPyT2aA",
      authDomain: "kwitter-social-media.firebaseapp.com",
      databaseURL: "https://kwitter-social-media-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "kwitter-social-media",
      storageBucket: "kwitter-social-media.appspot.com",
      messagingSenderId: "202856303385",
      appId: "1:202856303385:web:8a0f5b6f3797935a2a5388"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
