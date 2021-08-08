
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);


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


