import firebase from "firebase";

const config = {
    apiKey: "AIzaSyB8YDQjrqQ6NOck7f1MCuXqSzaR4dLwDnU",
    authDomain: "minuevatienda-1520019220171.firebaseapp.com",
    databaseURL: "https://minuevatienda-1520019220171.firebaseio.com",
    projectId: "minuevatienda-1520019220171",
    storageBucket: "minuevatienda-1520019220171.appspot.com",
    messagingSenderId: "413148506398"
};
firebase.initializeApp(config);

export default firebase;