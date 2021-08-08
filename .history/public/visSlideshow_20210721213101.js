
var start = performance.now();

//VARIABLER:
var firebaseConfig = { apiKey: "AIzaSyDWqlUDi0zFQzhx0UmaPL5MavMPD3WP_dM", authDomain: "moltrup-f289d.firebaseapp.com", databaseURL: "https://moltrup-f289d-default-rtdb.europe-west1.firebasedatabase.app", projectId: "moltrup-f289d", storageBucket: "moltrup-f289d.appspot.com", messagingSenderId: "501616983877", appId: "1:501616983877:web:706f3e5d111751f3aa882c", measurementId: "G-BX53EJ9DL6" }; firebase.initializeApp(firebaseConfig);firebase.analytics();
var billederef;
const billederefdb = firebase.storage().ref('Midlertidig');
const firestore = firebase.firestore();
const slidesref = firestore.collection(`slideshows`).doc(slideshowId).collection('slides');




slidesref.onSnapshot(querySnapshot => {


querySnapshot.docChanges().forEach(change => {

  if (change.type == 'removed') {
    $(`#${change.doc.id}`).remove();
  }else{

    $('.slider').append(`
    <img id="${change.doc.id}" src="${change.doc.data().link}" alt="Slide">`);
  }


  
  });



});

setTimeout(() => {
let slider = new Slighter(document.querySelector('.slider'), 20000);
}, 3000);









// billederefdb.listAll()
//   .then((res) => {
//     res.prefixes.forEach((folderRef) => {
//       // All the prefixes under listRef.
//       // You may call listAll() recursively on them.
//     });
//     let urls =
//     res.items.forEach((itemRef) => {
  
    


//       https://firebasestorage.googleapis.com/v0/b/moltrup-f289d.appspot.com/o/Midlertidig%2Fentotre.pdf?alt=media&token=
//     });
//     let antal =itemRef.name.length;







//     setInterval(() => {


//     }, 5000);
  

//   }).catch((error) => {

//   });


