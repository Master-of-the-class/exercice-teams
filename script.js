const firebaseConfig = {

  apiKey: "AIzaSyCFI1xPuEuXmh9bfeD8iHsgItD-cmLQVCE",

  authDomain: "exercice-teams.firebaseapp.com",

  projectId: "exercice-teams",

  storageBucket: "exercice-teams.firebasestorage.app",

  messagingSenderId: "817582067292",

  appId: "1:817582067292:web:5e9b276431e6adffe9a099"

};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const userId = "test_eleve_1";

const champs = ["octobre", "visiter", "abandonne"];

/* sauvegarde */
function sauvegarder() {

  const data = {};

  champs.forEach(id => {
    data[id] = document.getElementById(id).value;
  });

  db.collection("reponses").doc(userId).set(data);
}

/* chargement */
function charger() {

  db.collection("reponses").doc(userId).get().then(doc => {

    if (doc.exists) {

      const data = doc.data();

      champs.forEach(id => {
        document.getElementById(id).value = data[id] || "";
      });
    }
  });
}

/* écoute */
champs.forEach(id => {
  document.getElementById(id).addEventListener("input", sauvegarder);
});

charger();
