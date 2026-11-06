import { useState } from "react";
import image from "../assets/hero.png";



function StudentCard({
  prenom,
  nom,
  email,
  telephone,
  filiere,
  anneeEtude,
  groupe,
  onSupprimer,
  ville = "Non renseignée"
}) {
    const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);
    function basculerInformations() {
      setCoordonneesVisibles(!coordonneesVisibles);
}
  return(

    <div className="fiche">
  <h1>Fiche étudiant</h1>
  <p>
  <strong>Prénom :</strong> {prenom}
</p>

 
  <p>
    <strong>Nom :</strong> {nom}
  </p>

   {coordonneesVisibles && (
  <>
    <p><strong>Email :</strong> {email}</p>
    <p><strong>Téléphone :</strong> {telephone}</p>
  </>
)}


      <p>
        <strong>Filière :</strong> {filiere}
      </p>

      <p>
        <strong>Année d’étude :</strong> {anneeEtude}
      </p>

      <p>
        <strong>Groupe :</strong> {groupe}
      </p>

      <p>
        <strong>Ville :</strong> {ville}
      </p>
    
    <button onClick={basculerInformations}>
  {coordonneesVisibles
    ? "Masquer les coordonnées"
    : "Afficher les coordonnées"}
</button>
<button onClick={() => onSupprimer(email)}>
  Supprimer
</button>
</div>
  );
}

export default StudentCard;