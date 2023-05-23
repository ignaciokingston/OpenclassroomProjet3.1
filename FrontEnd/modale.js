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

var modal2 = document.getElementById("modal2");

// Sélectionner le bouton qui ouvre la modale
var btn = document.getElementById ("btnModale");

var btn2 = document.getElementById ("btnModale2");

// Sélectionner pour fermer la modale
var span = document.getElementsByClassName("close")[0];

var span2 = document.getElementsByClassName("close")[1];

// Sélectionner pour retourner à la première modale
var span3 = document.getElementsByClassName("retour")[0];

//sélection partie modale pour mettre les images
const gallerieModal = document.querySelector (".gallerie-modal1")

//sélection pour effacer après texte de l'image preview
const imagePreview = document.querySelector (".text-preview")


// pour ouvrir avec le click
btn.onclick = function() {
  modal.style.display = "block"  
  //effacer la gallerie
  gallerieModal.innerHTML = ''
  //boucle pour mettre images dans la modale
dataJson.forEach (projet=> {
    const elementProjet = document.createElement ("figure")
    elementProjet.id = `w-${projet.id}`;
    elementProjet.innerHTML = `<img src=${projet.imageUrl} alt=${projet.title} crossorigin="anonymous"><i class="fa-regular fa-trash-can"></i><figcaption class="gallerie-modal2">${"éditer"}</figcaption>`
    gallerieModal.appendChild (elementProjet)
    //pour éliminer les projets en faisant click sur les icons
    const eliminer = elementProjet.querySelector (".fa-trash-can")
    eliminer.addEventListener ("click", ()=> {
    eliminerProjet (projet.id);
    });
});
};


// fermeture modale avec click sur X
span.onclick = function() {
  modal.style.display = "none";
  //pour effacer l'image en preview
  const imageElement = document.getElementById ('image-preview');
  imageElement.src = '';
}

// fermeture modale avec click hors de la modale
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    //pour effacer l'image en preview
  const imageElement = document.getElementById ('image-preview');
  imageElement.src = '';
    
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
    //pour effacer l'image en preview
  const imageElement = document.getElementById ('image-preview');
  imageElement.src = '';
  }
}


// pour ouvrir deuxième avec le click
btn2.onclick = function() {
  modal2.style.display = "block";
  modal.style.display = "none";
  //pour remontrer bouton ajouter-photo
  imagePreview.style.display = "block"
  //pour effacer l'image en preview
  const imageElement = document.getElementById ('image-preview');
  imageElement.src = ''
}

// fermeture modale avec click sur X
span2.onclick = function() {
  modal2.style.display = "none";
  //pour effacer l'image en preview
  const imageElement = document.getElementById ('image-preview');
  imageElement.src = '';
}

// retourner à la première modale
span3.onclick = function () {
  modal2.style.display = "none";
  modal.style.display = "block";
  imagePreview.style.display = "none"
}

//function pour éliminer les projets
function eliminerProjet (projetId) {
  //pour récuperer le token dans une constante
  const token = localStorage.getItem ("token");
  fetch (`http://localhost:5678/api/works/${projetId}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  .then (res => {
    console.log (res)
    if (res.ok) {
      const elementProjet = document.getElementById (`w-${projetId}`);
      //Pour éliminer l'élément du DOM
      if (elementProjet) {
        console.log (elementProjet)
        elementProjet.remove();
      }
    } else {
      console.error ("Error");
    }
  })
  .catch (err => {
    console.error ("Error", err);
  });
     
}


//Prévisualisation de l'image avant l'upload
const fileInput = document.getElementById('fileInput')
  //pour permettre charger le fichier
fileInput.addEventListener ('change', (event)=>{

  const file= event.target.files [0];

  const reader = new FileReader();
  //pour completer la source de l'image
  reader.addEventListener ('load', (event)=>{

    const dataURL = event.target.result;

    const imageElement = document.getElementById ('image-preview')
    imageElement.src= dataURL;
  })
  //pour visualiser l'image et effacer le texte du bouton
  reader.readAsDataURL (file);
  imagePreview.style.display = "none"
})

