import firebase from "firebase";
var config = {
  apiKey: "AIzaSyBjPe-UlrdKQnHUi7hEoOoBLiWqRzqpe5o",
  authDomain: "ideationz-eb5a0.firebaseapp.com",
  databaseURL: "https://ideationz-eb5a0.firebaseio.com",
  projectId: "ideationz-eb5a0",
  storageBucket: "ideationz-eb5a0.appspot.com",
  messagingSenderId: "501116904696"
};
firebase.initializeApp(config);

export default firebase;
