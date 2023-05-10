
//selection de la partie du HTML//
const projets = document.querySelector (".gallery")

//fonction fetch pour recupérer les pièces
const gallerie = fetch ('http://localhost:5678/api/works')
//transformation de la réponse en JSON
.then (res=> res.json())
// parcours avec boucle forEach de chaque élément//
.then (data=> {
    data.forEach (projet=> {
        //création element image+texte
        const element = document.createElement ("figure")
        //ajoute d'un id
        element.id = `w-${projet.id}`;
        //contenu de l'element
        element.innerHTML = `<img src=${projet.imageUrl} alt=${projet.title} crossorigin="anonymous"><figcaption>${projet.title}</figcaption>`
        //pour afficher sur l'écran
        projets.appendChild (element)
    });
});




