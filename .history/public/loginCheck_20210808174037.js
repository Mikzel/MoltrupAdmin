
if (!firebaseConfig) {const firebaseConfig = { apiKey: "AIzaSyDWqlUDi0zFQzhx0UmaPL5MavMPD3WP_dM", authDomain: "moltrup-f289d.firebaseapp.com", databaseURL: "https://moltrup-f289d-default-rtdb.europe-west1.firebasedatabase.app", projectId: "moltrup-f289d", storageBucket: "moltrup-f289d.appspot.com", messagingSenderId: "501616983877", appId: "1:501616983877:web:706f3e5d111751f3aa882c", measurementId: "G-BX53EJ9DL6" }; }
if (!firebase.initializeApp(firebaseConfig)) {firebase.initializeApp(firebaseConfig)}

firebase.auth().setPersistence(firestore.auth.Auth.Persistence.NONE);


function logInd(email, kode) {
    firebase.auth().signInWithEmailAndPassword(email, kode)
    .then(({ user }) => {
        return user.getIdToken().then((idToken) => {
            return fetch("/API/bekaeftLoginToken", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "CSRF-Token": Cookies.get("XSRF-TOKEN"),
              },
              body: JSON.stringify({ idToken }),
            });
          });
        })
        .then(() => {
          return firebase.auth().signOut();
        })
        .then(() => {
          window.location.assign("/");
        });
      return false;
    

    


}


