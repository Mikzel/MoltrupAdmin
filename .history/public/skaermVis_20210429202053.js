var firebaseConfig = { apiKey: "AIzaSyDWqlUDi0zFQzhx0UmaPL5MavMPD3WP_dM", authDomain: "moltrup-f289d.firebaseapp.com", databaseURL: "https://moltrup-f289d-default-rtdb.europe-west1.firebasedatabase.app", projectId: "moltrup-f289d", storageBucket: "moltrup-f289d.appspot.com", messagingSenderId: "501616983877", appId: "1:501616983877:web:706f3e5d111751f3aa882c", measurementId: "G-BX53EJ9DL6" }; 
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
gennemgåSkab();


let st = 0;
db.collection("skærme").doc(skærm)     
.onSnapshot((doc) => {       
   
   if (st==0) {
      st = 1;
   }else if (st==1){
      location.reload();
      console.log();
   }


});

/* 
console.log(widgetData);
widgetDB.forEach(doc => {
   let type = doc.data().widget;

   type({start:'X1Y1', tekst:doc.data().tekst});

}); 
*/