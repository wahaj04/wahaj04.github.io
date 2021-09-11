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
document.getElementById("submitTeam").addEventListener("click", function (event) {
    console.log("RUN");
    event.preventDefault();
    console.log("event ---- ", event);
    createTeam();

});


function createTeam() {
    const name = document.getElementById("teamname").value;
    const categoryname = document.getElementById("categoryname").value;
    const membersemail = document.getElementById("membersemail").value;
    console.log(name, categoryname, membersemail);

    firebase.database().ref('Team').push({
        name: name,
        category: categoryname,
        members: membersemail,
        createdAt: new Date().getTime()
    })
    // name = "";
}