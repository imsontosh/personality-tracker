import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyDft-P9IDbvBKx8XJnWu1CR5XjVaRplYvo",
    authDomain: "personality-tracker.firebaseapp.com",
    databaseURL: "https://personality-tracker.firebaseio.com",
    projectId: "personality-tracker",
    storageBucket: "personality-tracker.appspot.com",
    messagingSenderId: "453293755020"
  };
firebase.initializeApp(config);
export default firebase;

