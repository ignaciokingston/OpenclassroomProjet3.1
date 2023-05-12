const btnConnexion = document.querySelector(".btn-connexion")
btnConnexion.addEventListener("click", function login() {
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
        if (res.ok) {
            //transformer la réponse à JSON pour après insérer le token 
            return res.json()
        } else {
            new Error("Erreur dans l’identifiant ou le mot de passe");
        }
    }).then(data => {
        //stocker le token
        window.localStorage.setItem("token", data.token); 
        window.location = "index.html";
    }).catch(err => {
        alert(err.message);
    });
});
