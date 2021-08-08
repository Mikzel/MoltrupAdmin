

var start = performance.now();

//VARIABLER:
var firebaseConfig = { apiKey: "AIzaSyDWqlUDi0zFQzhx0UmaPL5MavMPD3WP_dM", authDomain: "moltrup-f289d.firebaseapp.com", databaseURL: "https://moltrup-f289d-default-rtdb.europe-west1.firebasedatabase.app", projectId: "moltrup-f289d", storageBucket: "moltrup-f289d.appspot.com", messagingSenderId: "501616983877", appId: "1:501616983877:web:706f3e5d111751f3aa882c", measurementId: "G-BX53EJ9DL6" }; firebase.initializeApp(firebaseConfig);
var billederef;
const firestore = firebase.firestore();
const slidesref = firestore.collection(`slideshows`).doc(slideshowId).collection('slides');
const slideinssref = firestore.collection(`slideshows`).doc(slideshowId);
let slider;



slidesref.onSnapshot(querySnapshot => {


querySnapshot.docChanges().forEach(change => {

  if (change.type == 'removed') {
    $(`#${change.doc.id}`).remove();
  }else{

    $('.slider').append(`
    <img id="${change.doc.id}" src="${change.doc.data().url}" alt="Slide">`);
  }


  
  });



});



slideinssref.onSnapshot(querySnapshot => {
    location.reload();


});





setTimeout(() => {
   slider = new Slighter(document.querySelector('.slider'), 20000);
  console.log(slider);
}, 3000);