import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBI71udIwJpGoWEPF-1H6Cs4-LMHpa9B-8",
  authDomain: "veilletech-e1142.firebaseapp.com",
  projectId: "veilletech-e1142",
  storageBucket: "veilletech-e1142.appspot.com",
  messagingSenderId: "712257871286",
  appId: "1:712257871286:web:198da628aece7e971db517",
  measurementId: "G-XHQ9XGJP11"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;