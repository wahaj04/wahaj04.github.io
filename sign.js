const firebaseConfig = {
    apiKey: "AIzaSyB2SoJ7RIaXZzYo9PfwoEp6GoGNgnnuOZA",
    authDomain: "team-713f9.firebaseapp.com",
    projectId: "team-713f9",
    storageBucket: "team-713f9.appspot.com",
    messagingSenderId: "665302215369",
    appId: "1:665302215369:web:45ffaca80bb4357a8afb18"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById("submitButton").addEventListener("click", function (event) {
    console.log("RUN");
    event.preventDefault();
    console.log("event ---- ", event);
    signup();

});

function signup() {
   
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(name, email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user);
            firebase.database().ref('User').child(user.uid).set({
                name: name,
                email: email,
            })
            window.location("https://wahaj04.github.io/team.html")
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            console.log(errorCode, errorMessage);
        });
}

function signup() {
    const paragraph = document.getElementById("signupvalidate");
    paragraph.innerHTML = "";
   const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);



    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(window);
            if(user) {
                window.location.href = "https://wahaj04.github.io/team.html";
            }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            paragraph.innerHTML = errorMessage;
            // ..
        });
}

const auth = firebase.auth();
// var database = firebase.database();

auth.onAuthStateChanged((user) => {
    if (user) {
        console.log(user);
        window.location.href = "https://wahaj04.github.io/team.html";
    }
});
