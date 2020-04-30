const manipulationcrud= new Manipulationcrud();

/**
 * constructeur
 */
function Manipulationcrud (){
   this.id=document.querySelector("#id");
   this.nom=document.querySelector("#nom");
   this.prenom=document.querySelector("#prenom");
   this.email=document.querySelector("#email");
   this.age=document.querySelector("#age");
   this.numtel=document.querySelector("#numtel");
   this.poste=document.querySelector("#poste");
   this.statutMarital=document.querySelector("#statutMarital");
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
Manipulationcrud.prototype.getAge=function(){
   return this.age.value;
};
Manipulationcrud.prototype.getNumeroTel=function(){
   return this.numtel.value;
};
Manipulationcrud.prototype.getPoste=function(){
   return this.poste.value;
};
Manipulationcrud.prototype.getStatutMarital=function(){
   return this.statutMarital.value;
};
Manipulationcrud.prototype.getPays=function(){
   return this.pays.value;
};

/**
 * Enregistrer un nouvel employeur en vérifiant la saisie des champs.
 */
let btnEnregistrer=document.querySelector("#btnCreer")
let messageErreur=document.querySelectorAll("span")
btnEnregistrer.addEventListener("click", (e) => {
   if (!manipulationcrud.getId().length) {
      messageErreur[0].textContent="* La saisie est obligatoire."
      messageErreur[0].style.color="red"
   }if (!manipulationcrud.getNom().length){
      messageErreur[1].textContent="* La saisie est obligatoire."
      messageErreur[1].style.color="red"
   } if (!manipulationcrud.getPrenom().length){
      messageErreur[2].textContent="* La saisie est obligatoire."
      messageErreur[2].style.color="red"
   } if (!manipulationcrud.getMail().length){
      messageErreur[3].textContent="* La saisie est obligatoire."
      messageErreur[3].style.color="red"
   } if (!manipulationcrud.getNumeroTel().length){
      messageErreur[4].textContent="* La saisie est obligatoire."
      messageErreur[4].style.color="red"
   }if (!manipulationcrud.getPoste().length){
      messageErreur[5].textContent="* La saisie est obligatoire."
      messageErreur[5].style.color="red"
   }
   if (!manipulationcrud.getPays().length){
      messageErreur[6].textContent="* La saisie est obligatoire."
      messageErreur[6].style.color="red"
   } else {

   }
})