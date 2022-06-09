(function () {
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyCLFDntjE0WpWpLDlEaRlG27axJHCj8Z6o",
        authDomain: "csgoempire-83732.firebaseapp.com",
        projectId: "csgoempire-83732",
        databaseURL: "https://csgoempire-83732-default-rtdb.firebaseio.com",
        storageBucket: "csgoempire-83732.appspot.com",
        messagingSenderId: "926745917748",
        appId: "1:926745917748:web:c0cdb625a04936f6250d61",
        measurementId: "G-90GGNBKE45"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
})()
