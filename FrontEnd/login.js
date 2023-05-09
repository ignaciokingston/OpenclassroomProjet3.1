
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
        window.location = "index.html";
    }).catch(err => alert ("Erreur dans l’identifiant ou le mot de passe"))
});