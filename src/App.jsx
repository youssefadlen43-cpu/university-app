
import "./App.css";
import StudentCard from "./components/StudentCard.jsx";
import StudentForm from "./components/StudentForm.jsx";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Counter } from "./components/counter";
import { useState } from "react";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      prenom: "Youssef",
      nom: "Chebbah",
      email: "youssefadlen43@gmail.com",
      telephone: "+216 28373124",
      filiere: "GLSI",
      annee: 2,
      groupe: "GLSI 2",
      ville: "Mahdia",
      image: ""
    },
    {
      id: 2,
      prenom: "Slim",
      nom: "Boubaker",
      email: "slim@example.com",
      telephone: "",
      filiere: "GLSI",
      annee: 2,
      groupe: "GLSI 2",
      ville: "Mahdia",
      image: ""
    },
    {
      id: 3,
      prenom: "Sarra",
      nom: "Trabelsi",
      email: "sarra@example.com",
      telephone: "",
      filiere: "GLSI",
      annee: 2,
      groupe: "GLSI 2",
      ville: "Mahdia",
      image: ""
    }
  ]);

  const [recherche, setRecherche] = useState("");

  const [etudiantAModifier, setEtudiantAModifier] = useState(null);

  // Ajouter un étudiant
  function ajouterEtudiant(nouvelEtudiant) {
    const etudiantAvecId = {
      ...nouvelEtudiant,
      id: Date.now()
    };

    setEtudiants((anciensEtudiants) => [
      ...anciensEtudiants,
      etudiantAvecId
    ]);
  }

  // Supprimer un étudiant
  function supprimerEtudiant(idASupprimer) {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.filter(
        (etudiant) => etudiant.id !== idASupprimer
      )
    );
  }

  // Sélectionner un étudiant à modifier
  function modifierEtudiant(etudiant) {
    setEtudiantAModifier(etudiant);
  }

  // Enregistrer les modifications
  function enregistrerModification(etudiantModifie) {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.map((etudiant) =>
        etudiant.id === etudiantAModifier.id
          ? { ...etudiantModifie, id: etudiant.id }
          : etudiant
      )
    );

    setEtudiantAModifier(null);
  }

  // Filtrer les étudiants
  const etudiantsFiltres = etudiants.filter((etudiant) => {
    const texte = recherche.toLowerCase();

    return (
      etudiant.prenom.toLowerCase().includes(texte) ||
      etudiant.nom.toLowerCase().includes(texte) ||
      etudiant.filiere.toLowerCase().includes(texte)
    );
  });

  return (
    <div className="container">

      <Header />
      <Navbar />

      <StudentForm
        key={etudiantAModifier ? etudiantAModifier.id : "nouveau"}
        onAjouterEtudiant={ajouterEtudiant}
        etudiantAModifier={etudiantAModifier}
        onModifierEtudiant={enregistrerModification}
      />

      <div className="actions">
        <input
          type="text"
          placeholder="Rechercher un étudiant..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
        />
      </div>

      {etudiantsFiltres.map((etudiant) => (
        <StudentCard
          key={etudiant.id}
          etudiant={etudiant}
          onSupprimer={supprimerEtudiant}
          onModifier={modifierEtudiant}
        />
      ))}

      <Counter />

      <Footer />

    </div>
  );
}

export default App;
