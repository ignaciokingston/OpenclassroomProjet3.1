
//selection de la partie du HTML//
const projets = document.querySelector (".gallery")

//fonction fetch pour recupérer les pièces
const gallerie = fetch ('http://localhost:5678/api/works')
//transformation de la réponse en JSON
.then (res=> res.json())
// parcours avec boucle forEach de chaque élément//
.then (data=> {
    data.forEach (projet=> {
        //création du titre//
        const titreProjet = document.createElement ("p")
        //ajout du contenu du titre//
        titreProjet.innerHTML = projet.title
        //pour afficher bien les titres on les réajoute à const projets//
        projets.appendChild (titreProjet)
        //création des images//
        const imageProjet = document.createElement ("img")
        //ajout de la source de l'image//
        imageProjet.src = projet.imageUrl
        //pour afficher bien les images on les rajoute aux titres// 
        titreProjet.appendChild (imageProjet)
    });
});

