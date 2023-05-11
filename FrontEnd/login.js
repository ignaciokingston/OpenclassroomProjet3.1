
const btnConnexion = document.querySelector (".btn-connexion")
btnConnexion.addEventListener ("click", function login() {
    fetch(`http://localhost:5678/api/users/login`, {
        method: "POST",
        body: JSON.stringify({
            email: email.value,
            password: password.value
        }),
        headers: {
        "Content-Type": "application/json",
        },
    }).then(res => {
        if (res.ok == true) {
        window.location = "index.html"
        window.localStorage.setItem ("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4")
        } else {
         alert ("Erreur dans l’identifiant ou le mot de passe")
        }})
    .catch(err => alert ("Erreur dans l’identifiant ou le mot de passe"))
})
