const manipulationcrud= new Manipulationcrud();
affichageElement();

function affichageElement(){
    clear();
    manipulationcrud.id.style.display='none';
    axios.get('http://167.71.45.243:4000/api/employes?api_key=xvhpczp').then(function(response){
       for (let indice of response.data) {

            const tr = document.createElement("tr");
            tr.setAttribute("id",indice._id)
            const nom = document.createElement("td");
            nom.textContent = indice.nom;
            const prenom = document.createElement("td");
            prenom.textContent = indice.prenom;
            const email = document.createElement("td");
            email.textContent = indice.email;
            const poste = document.createElement("td");
            poste.textContent = indice.poste;
            const numeroTelephone = document.createElement("td");
            numeroTelephone.textContent = indice.numeroTelephone;
            const estMarie = document.createElement("td");
            estMarie.textContent = indice.estMarie;
            const pays = document.createElement("td");
            pays.textContent = indice.pays;
            

            const buttonsTd= document.createElement('td');
            let boutonModifier = document.createElement('button');
            boutonModifier.className = 'btn-edit btn btn-primary btnEdit d-flex'
            boutonModifier.setAttribute('data-target', indice.id);
            boutonModifier.innerHTML = '<i class="glyphicon glyphicon-edit"></i>';
            boutonModifier.style.marginLeft="25px";

        //    Offre la possibilité de modifier un employeur
            boutonModifier.addEventListener('click', (e)=>{
                manipulationcrud.id.style.display='inherit';
                btnEnregistrer.style.display = 'none';
                editButton.style.display = '';
                manipulationcrud.desactiverEditionID();
                
                axios.get(`http://167.71.45.243:4000/api/employes/${indice._id}?api_key=xvhpczp`).then(function(response){
                   manipulationcrud.setId(response.data._id);
                   manipulationcrud.setNom(response.data.nom);
                   manipulationcrud.setPrenom(response.data.prenom);
                   manipulationcrud.setMail(response.data.email);
                   manipulationcrud.setPoste(response.data.poste);
                   manipulationcrud.setNumeroTelephone(response.data.numeroTelephone);
                   manipulationcrud.setEstMarie(response.data.estMarie);
                   manipulationcrud.setPays(response.data.pays);
 
                }).catch(function(erreur){
                   console.log(erreur)
                })
            });

            let boutonSupprimmer = document.createElement('button');
            boutonSupprimmer.className = 'btn-delete btn btn-danger btnDelete'
            boutonSupprimmer.setAttribute('data-target', indice.id);
            boutonSupprimmer.innerHTML = '<i class="glyphicon glyphicon-trash"></i>'
            boutonSupprimmer.style.marginLeft="25px";

        //   Offre la possibilité de supprimer un employeur
            boutonSupprimmer.addEventListener('click', (e) => {
                if (confirm("Voulez-vous réellement supprimer cet enregistrement?")) {
                    axios.delete(`http://167.71.45.243:4000/api/employes/${indice._id}?api_key=xvhpczp`).then((response)=>{
                       affichageElement();
                       alert("L'employé a été supprimé avec succèss");
                    }).catch(function(erreur){
                       alert("Une erreure est survenue")
                       console.log(erreur)
                    })
                } 
            });

            buttonsTd.appendChild(boutonModifier);
            buttonsTd.appendChild(boutonSupprimmer);

            tr.appendChild(nom);
            tr.appendChild(prenom);
            tr.appendChild(email);
            tr.appendChild(poste);
            tr.appendChild(numeroTelephone);
            tr.appendChild(estMarie);
            tr.appendChild(pays);
            tr.appendChild(buttonsTd);
            document.querySelector("tbody").appendChild(tr);
       };
    }).catch(function(erreur){
        console.log(erreur)
    });
};

/**
 * constructeur
 */
function Manipulationcrud (){
   this.id=document.querySelector("#_id");
   this.nom=document.querySelector("#nom");
   this.prenom=document.querySelector("#prenom");
   this.email=document.querySelector("#email");
   this.poste=document.querySelector("#poste");
   this.numeroTelephone=document.querySelector("#numeroTelephone");
   this.estMarie=document.querySelector("#estMarie");
   this.pays=document.querySelector("#pays");
};

/**
 * Obtient la valeur d'un attribut (element) depuis le formulaire.
 * 
 * @returns {string|number}
 */
Manipulationcrud.prototype.getId=function(){
   return this.id.value;
};
Manipulationcrud.prototype.getNom=function(){
   return this.nom.value;
};
Manipulationcrud.prototype.getPrenom=function(){
   return this.prenom.value;
};
Manipulationcrud.prototype.getMail=function(){
   return this.email.value;
};
Manipulationcrud.prototype.getNumeroTelephone=function(){
   return this.numeroTelephone.value;
};
Manipulationcrud.prototype.getPoste=function(){
   return this.poste.value;
};
Manipulationcrud.prototype.getEstMarie=function(){
   return this.estMarie.value;
};
Manipulationcrud.prototype.getPays=function(){
   return this.pays.value;
};

/**
* Modifie la valeur d'un attribut (element) dans le formulaire
*
* @param {string} value
* @returns {void}
*/
Manipulationcrud.prototype.setId=function(value){
    this.id.value=value
 };
 Manipulationcrud.prototype.setNom=function(value){
      this.nom.value=value;
 };
 Manipulationcrud.prototype.setPrenom=function(value){
      this.prenom.value=value;
 };
 Manipulationcrud.prototype.setMail=function(value){
      this.email.value=value;
 };
 Manipulationcrud.prototype.setNumeroTelephone=function(value){
       this.numeroTelephone.value=value;
 };
 Manipulationcrud.prototype.setPoste=function(value){
      this.poste.value=value;
 };
 Manipulationcrud.prototype.setEstMarie=function(value){
      this.estMarie.value=value;
 };
 Manipulationcrud.prototype.setPays=function(value){
      this.pays.value=value;
 };
 

/**
 * Enregistrer un nouvel employeur en vérifiant la saisie des champs.
 */
let btnEnregistrer=document.querySelector("#btnCreer")
let messageErreur=document.querySelectorAll("span")
btnEnregistrer.addEventListener("click", (e) => {
  if (!manipulationcrud.getNom().length){
      messageErreur[0].textContent="* La saisie est obligatoire."
      messageErreur[0].style.color="red"
   } if (!manipulationcrud.getPrenom().length){
      messageErreur[1].textContent="* La saisie est obligatoire."
      messageErreur[1].style.color="red"
   } if (!manipulationcrud.getMail().length){
      messageErreur[2].textContent="* La saisie est obligatoire."
      messageErreur[2].style.color="red"
   } if (!manipulationcrud.getNumeroTelephone().length){
      messageErreur[3].textContent="* La saisie est obligatoire."
      messageErreur[3].style.color="red"
   } if (!manipulationcrud.getPoste().length){
      messageErreur[4].textContent="* La saisie est obligatoire."
      messageErreur[4].style.color="red"
   } if (!manipulationcrud.getPays().length){
      messageErreur[5].textContent="* La saisie est obligatoire."
      messageErreur[5].style.color="red"
   } else {
    axios.post("http://167.71.45.243:4000/api/employes?api_key=xvhpczp", {
        nom:manipulationcrud.getNom(),
        prenom:manipulationcrud.getPrenom(),
        estMarie:manipulationcrud.getEstMarie(),
        pays:manipulationcrud.getPays(),
        email:manipulationcrud.getMail(),
        poste:manipulationcrud.getPoste(),
        numeroTelephone:manipulationcrud.getNumeroTelephone() 
     }).then((response)=>{
        alert("L'employé a été ajouté avec succèss!");
        affichageElement();
        clearInput();
     }).catch(function(erreur){
        console.log(erreur)
     })      
    }
});

// Functions 
/**
* Mettre à blanc les champs du formulaire
* 
* @returns {void}
*/
function clearInput(){
    manipulationcrud.setId("");
    manipulationcrud.setNom("");
    manipulationcrud.setPrenom("");
    manipulationcrud.setMail("");
    manipulationcrud.setNumeroTelephone("");
    manipulationcrud.setPoste("");
    manipulationcrud.setEstMarie("OUI");
    manipulationcrud.setPays("");
};
 
/**
* Mettre le tbody à blanc (clear)
* 
* @returns {void}
*/
function clear (){
    const tbody= document.querySelector("tbody");
    tbody.textContent="";
};
 
/**
* Désactive l'édition du champ Id
* 
* @returns {void}
*/
Manipulationcrud.prototype.desactiverEditionID = function() {
    this.id.setAttribute('readOnly', 'true');
};
 
/**
* Gère l'événement click du bouton mis à jour.
* @returns {void}
**/
let editButton = document.querySelector('#edit-button');
editButton.addEventListener('click', (e) => {
    const ids=manipulationcrud.getId();
    axios.put(`http://167.71.45.243:4000/api/employes/${ids}?api_key=xvhpczp`, {
       nom:manipulationcrud.getNom(),
       prenom:manipulationcrud.getPrenom(),
       estMarie:manipulationcrud.getEstMarie(),
       pays:manipulationcrud.getPays(),
       email:manipulationcrud.getMail(),
       poste:manipulationcrud.getPoste(),
       numeroTelephone:manipulationcrud.getNumeroTelephone()
      
    }).then((response)=>{
       alert("L'employé modifié avec succèss");
       affichageElement();
       clearInput();
       btnEnregistrer.style.display = 'inherit';
       editButton.style.display = 'none';
    }).catch(function(erreur){
       console.log(erreur)
    })
 
 });
 

