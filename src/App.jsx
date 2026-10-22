import "./App.css";
import StudentCard from "./components/StudentCard.jsx";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const students = [
  {
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
];

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />

      {students.map((etudiant, index) => (
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
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;