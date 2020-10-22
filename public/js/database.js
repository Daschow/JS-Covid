// Set the configuration for your app
// TODO: Replace with your project's config object

const config = {
  apiKey: "AIzaSyDss330-ZBxn1pdxSjxS_oHjDah4O1Ksrw",
  authDomain: "covid-proj-ae853.firebaseapp.com",
  databaseURL: "https://covid-proj-ae853.firebaseio.com",
  projectId: "covid-proj-ae853",
  storageBucket: "covid-proj-ae853.appspot.com",
  messagingSenderId: "250905634850",
  appId: "1:250905634850:web:d1d8069eddf6bee7d9c27b",
  measurementId: "G-2DP6ZZEVD3",
};

const addFirebaseUser = (email, password) => {
  // Get a reference to the database service
  firebase.initializeApp(config);
  const database = firebase.database();
  database.ref("users/").set({
    email: email,
    password: password,
  });
};
