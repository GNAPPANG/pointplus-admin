var firebaseConfig = {
    apiKey: "AIzaSyCp0V3Am_YqA5ueV_umOsvrcWNYpwHExu8",
    authDomain: "point-plus-65a13.firebaseapp.com",
    databaseURL: "https://point-plus-65a13.firebaseio.com",
    projectId: "point-plus-65a13",
    storageBucket: "point-plus-65a13.appspot.com",
    messagingSenderId: "597802565774",
    appId: "1:597802565774:web:797d50d86817868023c9df"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        location.href = "apply.html";
    } else {
        location.href = "login.html";
    }
});

function login() {
    var userEmail = document.getElementById("email_field").value;
    var userPassword = document.getElementById("password_field").value;

    firebase
        .auth()
        .signInWithEmailAndPassword(userEmail, userPassword)
        .then(() => (window.location.href = "apply.html"))
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert("Error : " + errorMessage);

            // ...
        });
}

function logout() {
    firebase
        .auth()
        .signOut()
        .then((user) => window.location.href = "login.html")
        .catch(function(error) {
            // An error happened.
        });
}