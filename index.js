var employeurs=
[
    {
       id:'001',
       nom:'Bitota',
       prenom:'Laurene',
       email:'bitotalaurene@gmail.com',
       pays:'RDC',
       age:14,
       numtel:'0812874074',
       poste: 'DRH',
       statutMarital:'Celibataire',
    },
    {
      id:'002',
      nom:'Asango',
      prenom:'Daniel',
      email:'asangoDaniel@gmail.com',
      pays:'Arizona',
      age:20,
      numtel:'0812874074',
      poste: 'Developpeur',
      statutMarital:'Celibataire',
   },
   {
      id:'003',
      nom:'Mampuya',
      prenom:'Paola',
      email:'mampuyapaola@gmail.com',
      pays:'New york',
      age:25,
      numtel:'0892844074',
      poste: 'Financier',
      statutMarital:'Marie',

   },
   {
      id:'004',
      nom:'Nsuadi',
      prenom:'Glodi',
      email:'nsglodi@gmail.com',
      pays:'New Jersey',
      age:40,
      numtel:'0992874074',
      poste: 'Caissier',
      statutMarital:'Marie',

   },
   {
      id:'005',
      nom:'Mapwata',
      prenom:'Gael',
      email:'mpgael@gmail.com',
      pays:'Maryland',
      age:30,
      numtel:'0815674321',
      poste: 'Developpeur',
      statutMarital:'Celibataire',

   },
]
const manipulationcrud= new Manipulationcrud();
affichageElement(employeurs);

function affichageElement(employeurs){
    clear();
   for (let indice of employeurs) 
    {
        const tr = document.createElement("tr");
        tr.setAttribute("id",indice.id)
        const th = document.createElement("th");
        const id=document.createElement("td");
        th.textContent = indice.id;
        const nom = document.createElement("td");
        nom.textContent = indice.nom;
        const prenom = document.createElement("td");
        prenom.textContent = indice.prenom;
        const email = document.createElement("td");
        email.textContent = indice.email;
        const pays = document.createElement("td");
        pays.textContent = indice.pays;
        const age = document.createElement("td");
        age.textContent = indice.age;
        age.style.textAlign="center"
        const numtel = document.createElement("td");
        numtel.textContent = indice.numtel;
        const poste = document.createElement("td");
        poste.textContent = indice.poste;
        const statutMarital = document.createElement("td");
        statutMarital.textContent = indice.statutMarital;

        const buttonsTd= document.createElement('td');
        let boutonModifier = document.createElement('button');
        boutonModifier.className = 'btn-edit btn btn-primary btnEdit d-flex'
        boutonModifier.setAttribute('data-target', indice.id);
        boutonModifier.innerHTML = '<i class="glyphicon glyphicon-edit"></i>';
        boutonModifier.style.marginLeft="25px";

      //    Offre la possibilité de modifier un employeur
         boutonModifier.addEventListener('click', modifierElement, false);

        let boutonSupprimmer = document.createElement('button');
        boutonSupprimmer.className = 'btn-delete btn btn-danger btnDelete'
        boutonSupprimmer.setAttribute('data-target', indice.id);
        boutonSupprimmer.innerHTML = '<i class="glyphicon glyphicon-trash"></i>'
        boutonSupprimmer.style.marginLeft="25px";

      //   Offre la possibilité de supprimer un employeur
         boutonSupprimmer.addEventListener('click', (e) => {
            supprimerElement(e, employeurs);
          }, false);

         
        buttonsTd.appendChild(boutonModifier);
        buttonsTd.appendChild(boutonSupprimmer);

        tr.appendChild(th);
        tr.appendChild(nom);
        tr.appendChild(prenom);
        tr.appendChild(email);
        tr.appendChild(pays);
        tr.appendChild(age);
        tr.appendChild(numtel);
        tr.appendChild(poste);
        tr.appendChild(statutMarital);
        tr.appendChild(buttonsTd);
        document.querySelector("tbody").appendChild(tr);
    };
};

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
 Manipulationcrud.prototype.setAge=function(value){
     this.age.value=value;
 };
 Manipulationcrud.prototype.setNumeroTel=function(value){
       this.numtel.value=value;
 };
 Manipulationcrud.prototype.setPoste=function(value){
      this.poste.value=value;
 };
 Manipulationcrud.prototype.setStatutMarital=function(value){
      this.statutMarital.value=value;
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
    if(verificationId(employeurs,manipulationcrud.getId())){
        alert("Cet identifiant existe déjà. Veuillez saisir un autre à la place.");
    }else{
        employeurs.push({
        id:manipulationcrud.getId(),
        nom:manipulationcrud.getNom(),
        prenom:manipulationcrud.getPrenom(),
        email:manipulationcrud.getMail(),
        age:manipulationcrud.getAge(),
        numtel:manipulationcrud.getNumeroTel(),
        poste:manipulationcrud.getPoste(),
        statutMarital:manipulationcrud.getStatutMarital(),
        pays:manipulationcrud.getPays(),
        })
    }
    affichageElement(employeurs);
    clearInput();

   }
});

// Functions
/**
 * Vérifie s'il existe déjà un employeur avec cet identifiant.
 * 
 * @param {object} employeur 
 * @param {string} id 
 * @returns {boolean}
 */
function verificationId (employeur, id){
    return  employeur.findIndex(employeurs => employeurs.id === id ) > -1;
};
 
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
    manipulationcrud.setAge("");
    manipulationcrud.setNumeroTel("");
    manipulationcrud.setPoste("");
    manipulationcrud.setStatutMarital("Marie");
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
* Active l'édition du champ Id.
* 
* @returns {void}
*/
Manipulationcrud.prototype.activerEditionID = function() {
    this.id.removeAttribute('readOnly');
};
 
/**
* Remplit les inputs du formulaire pour permettre la modification.
* 
* @param {*} e 
* @returns {void}
*/
function modifierElement(e) {
    btnEnregistrer.style.display = 'none';
    editButton.style.display = 'inherit';
    manipulationcrud.desactiverEditionID();
    
    let selectionnerEmployeurs = employeurs.find(employeur => employeur.id === e.target.dataset.target);
 
    manipulationcrud.setId(selectionnerEmployeurs.id);
    manipulationcrud.setNom(selectionnerEmployeurs.nom);
    manipulationcrud.setPrenom(selectionnerEmployeurs.prenom);
    manipulationcrud.setMail(selectionnerEmployeurs.email);
    manipulationcrud.setAge(selectionnerEmployeurs.age);
    manipulationcrud.setNumeroTel(selectionnerEmployeurs.numtel);
    manipulationcrud.setPoste(selectionnerEmployeurs.poste);
    manipulationcrud.setStatutMarital(selectionnerEmployeurs.statutMarital);
    manipulationcrud.setPays(selectionnerEmployeurs.pays);
 
};
 
/**
* Gère l'événement click du bouton mis à jour.
* @returns {void}
**/
let editButton = document.querySelector('#edit-button');
editButton.addEventListener('click', (e) => {
    let index = employeurs.findIndex(employeurs => employeurs.id === manipulationcrud.getId());
    console.log(index)
 
    employeurs.splice(index, 1, {
       id:manipulationcrud.getId(),
       nom:manipulationcrud.getNom(),
       prenom:manipulationcrud.getPrenom(),
       email:manipulationcrud.getMail(),
       age:manipulationcrud.getAge(),
       numtel:manipulationcrud.getNumeroTel(),
       poste:manipulationcrud.getPoste(),
       statutMarital:manipulationcrud.getStatutMarital(),
       pays:manipulationcrud.getPays(),
    })
 
    affichageElement(employeurs);
    manipulationcrud.activerEditionID();
    clearInput();
    btnEnregistrer.style.display = 'inherit';
    editButton.style.display = 'none';
 
}, false);
 
/**
* Supprime un employeur dans le tableau.
* 
* @param {object} e 
* @param {array} employeurs 
* @returns {void}
*/
function supprimerElement(e, employeurs) {
    if (confirm("Voulez-vous réellement supprimer cet enregistrement?")) {
       let id = e.target.dataset.target;
       employeurs = employeurs.filter(employeur => employeur.id !== id);
       affichageElement(employeurs);
    } 
};