
import { useState } from "react";
import "./StudentForm.css";

function StudentForm({
  onAjouterEtudiant,
  etudiantAModifier,
  onModifierEtudiant
}) {
  const [nom, setNom] = useState(etudiantAModifier?.nom || "");
  const [prenom, setPrenom] = useState(etudiantAModifier?.prenom || "");
  const [email, setEmail] = useState(etudiantAModifier?.email || "");
  const [telephone, setTelephone] = useState(etudiantAModifier?.telephone || "");
  const [filiere, setFiliere] = useState(etudiantAModifier?.filiere || "");
  const [annee, setAnnee] = useState(etudiantAModifier?.annee || "");
  const [groupe, setGroupe] = useState(etudiantAModifier?.groupe || "");
  const [ville, setVille] = useState(etudiantAModifier?.ville || "");
  const [image, setImage] = useState(etudiantAModifier?.image || "");
  const [erreurs, setErreurs] = useState({});

  function validerFormulaire() {
    const nouvellesErreurs = {};

    if (!nom.trim()) {
      nouvellesErreurs.nom = "Nom obligatoire";
    }

    if (!prenom.trim()) {
      nouvellesErreurs.prenom = "Prénom obligatoire";
    }

    if (!email.trim()) {
      nouvellesErreurs.email = "Email obligatoire";
    }

    if (!telephone.trim()) {
      nouvellesErreurs.telephone = "Téléphone obligatoire";
    }

    setErreurs(nouvellesErreurs);

    return Object.keys(nouvellesErreurs).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validerFormulaire()) {
      return;
    }

    const nouvelEtudiant = {
      nom,
      prenom,
      email,
      telephone,
      filiere,
      annee: Number(annee),
      groupe,
      ville,
      image
    };

    if (etudiantAModifier) {
      onModifierEtudiant({
        ...etudiantAModifier,
        ...nouvelEtudiant
      });
    } else {
      onAjouterEtudiant(nouvelEtudiant);
    }

    setErreurs({});
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>

      <h2>
        {etudiantAModifier
          ? "Modifier l'étudiant"
          : "Ajouter un étudiant"}
      </h2>

      <div className="form-group">
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
        {erreurs.nom && (
          <p className="error-msg">{erreurs.nom}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="prenom">Prénom :</label>
        <input
          type="text"
          id="prenom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required
        />
        {erreurs.prenom && (
          <p className="error-msg">{erreurs.prenom}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {erreurs.email && (
          <p className="error-msg">{erreurs.email}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="telephone">Téléphone :</label>
        <input
          type="tel"
          id="telephone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          required
        />
        {erreurs.telephone && (
          <p className="error-msg">{erreurs.telephone}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="filiere">Filière :</label>
        <select
          id="filiere"
          value={filiere}
          onChange={(e) => setFiliere(e.target.value)}
          required
        >
          <option value="">Choisir une filière</option>
          <option value="GLSI">GLSI</option>
          <option value="DSI">DSI</option>
          <option value="RSI">RSI</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="annee">Année d'étude :</label>
        <input
          type="number"
          id="annee"
          min="1"
          max="5"
          value={annee}
          onChange={(e) => setAnnee(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="groupe">Groupe :</label>
        <input
          type="text"
          id="groupe"
          value={groupe}
          onChange={(e) => setGroupe(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="ville">Ville :</label>
        <input
          type="text"
          id="ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image :</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => {
            const fichier = e.target.files[0];

            if (fichier) {
              setImage(URL.createObjectURL(fichier));
            }
          }}
        />
      </div>

      {image && (
        <img
          src={image}
          alt="Aperçu étudiant"
          className="image-preview"
        />
      )}

      <button type="submit" className="btn-submit">
        {etudiantAModifier ? "Modifier" : "Ajouter"}
      </button>

    </form>
  );
}

export default StudentForm;
