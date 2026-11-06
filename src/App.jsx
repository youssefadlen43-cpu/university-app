import "./App.css";
import StudentCard from "./components/StudentCard.jsx";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Counter } from "./components/counter";
import { useState } from "react";


function App() {
  function supprimerEtudiant(emailASupprimer) {
  setEtudiants(
    etudiants.filter(
      (etudiant) => etudiant.email !== emailASupprimer
    )
  );
}
  const [etudiants, setEtudiants] = useState([  {
    prenom: "Youssef",
    nom: "Chebbah",
    email: "youssefadlen43@gmail.com",
    telephone: "+216 28373124",
    filiere: "Génie Logiciel et Systèmes d’Information",
    annee: 2,
    groupe: "GLSI 2",
    ville: "Mahdia",
  },
  {
    prenom: "Slim",
    nom: "Boubaker",
    email: "slim@example.com",
    telephone: "",
    filiere: "Génie Logiciel et Systèmes d’Information",
    annee: 2,
    groupe: "GLSI 2",
    ville: "Mahdia",
  },
  {
    prenom: "Sarra",
    nom: "Trabelsi",
    email: "sarra@example.com",
    telephone: "",
    filiere: "Génie Logiciel et Systèmes d’Information",
    annee: 2,
    groupe: "GLSI 2",
    ville: "Mahdia",
  },
]);
const [recherche, setRecherche] = useState("");
function ajouterEtudiant() {
  const nouvelEtudiant = {
    prenom: "Yassine",
    nom: "Ben Salem",
    email: "yassine.bensalem@gmail.com",
    telephone: "+216 44 444 444",
    filiere: "Génie Logiciel et Systèmes d’Information",
    annee: 2,
    groupe: "GLSI 1",
    ville: "Sfax",
  };

  setEtudiants([...etudiants, nouvelEtudiant]);
}
function modifierEtudiant(emailAModifier) {
  const etudiantAModifier = etudiants.find(
    (etudiant) => etudiant.email === emailAModifier
  );

  if (!etudiantAModifier) return;

  const nouveauPrenom = prompt("Nouveau prénom :", etudiantAModifier.prenom);
  const nouveauNom = prompt("Nouveau nom :", etudiantAModifier.nom);
  const nouvelEmail = prompt("Nouvel email :", etudiantAModifier.email);

  if (
    nouveauPrenom?.trim() &&
    nouveauNom?.trim() &&
    nouvelEmail?.trim()
  ) {
    setEtudiants(
      etudiants.map((etudiant) =>
        etudiant.email === emailAModifier
          ? {
              ...etudiant,
              prenom: nouveauPrenom.trim(),
              nom: nouveauNom.trim(),
              email: nouvelEmail.trim(),
            }
          : etudiant
      )
    );
  }
}
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
      <div className="actions">
  <button onClick={ajouterEtudiant}>
    + Ajouter un étudiant
  </button>
</div>
<input
  type="text"
  placeholder="Rechercher un étudiant..."
  value={recherche}
  onChange={(e) => setRecherche(e.target.value)}
/>
{etudiantsFiltres.map((etudiant, index) => (
          <StudentCard
         key={etudiant.email}
          prenom={etudiant.prenom}
          nom={etudiant.nom}
          email={etudiant.email}
          telephone={etudiant.telephone}
          filiere={etudiant.filiere}
          anneeEtude={etudiant.annee}
          groupe={etudiant.groupe}
          ville={etudiant.ville}
          onSupprimer={supprimerEtudiant}
          onModifier={() => modifierEtudiant(etudiant.email)}
        />
      ))}
      <Counter />

      <Footer />
    </div>
  );
}

export default App;
