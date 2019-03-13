var config = {
  apiKey: "AIzaSyAyivWd3lXsAP90rT4a26Nho_0pKTEmsdc",
  authDomain: "red-social-router.firebaseapp.com",
  databaseURL: "https://red-social-router.firebaseio.com",
  projectId: "red-social-router",
  storageBucket: "red-social-router.appspot.com",
  messagingSenderId: "578822134927"
};
firebase.initializeApp(config);

var ui = new firebaseui.auth.AuthUI(firebase.auth());
