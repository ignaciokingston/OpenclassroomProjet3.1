
//selection de la partie du HTML//
const projets = document.querySelector (".gallery")
// création objet Set pour stocker les catégories
const categories = new Set();

//fonction fetch pour recupérer les pièces
const gallerie = fetch ('http://localhost:5678/api/works')
//transformation de la réponse en JSON
.then (res=> res.json())
// parcours avec boucle forEach de chaque élément//
.then (data=> {
    data.forEach (projet=> {
        //création element image+texte
        const elementProjet = document.createElement ("figure")
        //ajoute d'un id
        elementProjet.id = `w-${projet.id}`;
        //contenu de l'element
        elementProjet.innerHTML = `<img src=${projet.imageUrl} alt=${projet.title} crossorigin="anonymous"><figcaption>${projet.title}</figcaption>`
        //pour afficher sur l'écran
        projets.appendChild (elementProjet)
        //ajout des catégories des éléments au objet set
        categories.add(projet.category.name);
    });
});

console.log(categories); 

const btnTous = document.querySelector(".btn-tous");
btnTous.addEventListener("click", function() {

    
    })



const btnObjets = document.querySelector(".btn-objets");
btnObjets.addEventListener("click", function() {
    projets.innerHTML = ''

    })

const btnAppartements = document.querySelector(".btn-appartements");
btnAppartements.addEventListener("click", function() {
    projets.innerHTML = ''
    
    })

const btnHotel = document.querySelector(".btn-hotel");
btnHotel.addEventListener("click", function() {
    projets.innerHTML = ''
    
    })
    
    



