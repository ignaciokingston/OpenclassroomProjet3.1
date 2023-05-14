//selection de la partie du HTML//
const projets = document.querySelector (".gallery")
//variable pour stocker les données en format JSON de la fonction fetch pour après réutiliser
let dataJson;

//fonction fetch pour recupérer les pièces
const gallerie = fetch ('http://localhost:5678/api/works')
//transformation de la réponse en JSON
.then (res=> res.json())
// parcours avec boucle forEach de chaque élément//
.then (data=> {
    dataJson= data;
    data.forEach (projet=> {
        //création element image+texte
        const elementProjet = document.createElement ("figure")
        //ajoute d'un id
        elementProjet.id = `w-${projet.id}`;
        //contenu de l'element
        elementProjet.innerHTML = `<img src=${projet.imageUrl} alt=${projet.title} crossorigin="anonymous"><figcaption>${projet.title}</figcaption>`
        //pour afficher sur l'écran
        projets.appendChild (elementProjet)
    });
});

//Modale

// Selectionner la modale
var modal = document.getElementById("modal");

// Sélectionner le bouton qui ouvre la modale
var btn = document.getElementById ("btnModale");

// Sélectionner pour fermer la modale
var span = document.getElementsByClassName("close")[0];

// pour ouvrir avec le click
btn.onclick = function() {
  modal.style.display = "block";
}

// fermeture modale avec click sur X
span.onclick = function() {
  modal.style.display = "none";
}

// fermeture modale avec click hors de la modale
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}