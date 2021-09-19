const firebaseConfig = {
    apiKey: "AIzaSyBUHivj5NhS1v0Y6zBLG19ZLo_dlgKLoTo",
    authDomain: "pop-a-balloon-game-52d67.firebaseapp.com",
    databaseURL: "https://pop-a-balloon-game-52d67-default-rtdb.firebaseio.com",
    projectId: "pop-a-balloon-game-52d67",
    storageBucket: "pop-a-balloon-game-52d67.appspot.com",
    messagingSenderId: "870650269331",
    appId: "1:870650269331:web:c59d47ac69bef5c7530766",
    measurementId: "G-Y9EP5N0EH4"
  };

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 

  
document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

// firebase.auth().onAuthStateChanged((user)=>{
//     if(user){
//        
//     }
// })


function signUp(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(data => {
       window.location.href = "C:\Users\pc\Documents\Sylani Hackthon\loginballoon.html";

    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  document.getElementById("loginButton").addEventListener("click",(event)=>{
    event.preventDefault()
    login();
})

// firebase.auth().onAuthStateChanged((user)=>{
//     if(user){
//         location.replace("C:\Users\pc\Documents\Sylani Hackthon\loginballoon.html")
//     }
// })

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(data => {
       window.location.href = "C:\Users\pc\Documents\Sylani Hackthon\loginballoon.html";

    })
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}