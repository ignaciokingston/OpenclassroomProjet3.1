
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


//Filtre Tous
const btnTous = document.querySelector(".btn-tous");
btnTous.addEventListener("click", function() {
    //fonction filter (élément en commun le usedId)
    const tousElements = dataJson.filter(projet=> projet.userId === 1);
    //effacer la gallerie
    projets.innerHTML = ''
    // boucle forEach pour récréer les éléments filtrés
    tousElements.forEach (projet=> {
    const elementProjet = document.createElement ("figure")
    elementProjet.id = `w-${projet.id}`;
    elementProjet.innerHTML = `<img src=${projet.imageUrl} alt=${projet.title} crossorigin="anonymous"><figcaption>${projet.title}</figcaption>`
    projets.appendChild (elementProjet)
    })
});
    
//Filtre Objets
const btnObjets = document.querySelector(".btn-objets");
btnObjets.addEventListener("click", function() {
    const elementsObjets = dataJson.filter(projet=> projet.category.id === 1);
    projets.innerHTML = ''

    elementsObjets.forEach (projet=> {
    const elementProjet = document.createElement ("figure")
    elementProjet.id = `w-${projet.id}`;
    elementProjet.innerHTML = `<img src=${projet.imageUrl} alt=${projet.title} crossorigin="anonymous"><figcaption>${projet.title}</figcaption>`
    projets.appendChild (elementProjet)
    })
});

//Filtre Appartements
const btnAppartements = document.querySelector(".btn-appartements");
btnAppartements.addEventListener("click", function() {
    const elementsAppartements = dataJson.filter(projet=> projet.category.id === 2);
    projets.innerHTML = ''

    elementsAppartements.forEach (projet=> {
    const elementProjet = document.createElement ("figure")
    elementProjet.id = `w-${projet.id}`;
    elementProjet.innerHTML = `<img src=${projet.imageUrl} alt=${projet.title} crossorigin="anonymous"><figcaption>${projet.title}</figcaption>`
    projets.appendChild (elementProjet)
    })
});

//Filtre Hotel
const btnHotel = document.querySelector(".btn-hotel");
btnHotel.addEventListener("click", function() {
    const elementsHotel = dataJson.filter(projet=> projet.category.id === 3);
    projets.innerHTML = ''

    elementsHotel.forEach (projet=> {
    const elementProjet = document.createElement ("figure")
    elementProjet.id = `w-${projet.id}`;
    elementProjet.innerHTML = `<img src=${projet.imageUrl} alt=${projet.title} crossorigin="anonymous"><figcaption>${projet.title}</figcaption>`
    projets.appendChild (elementProjet)
    })
});
    
//Pour exporter la fonction à modale.js
export function fetchJson () {
    return fetch ('http://localhost:5678/api/works')
    .then (res=>res.json());
}




