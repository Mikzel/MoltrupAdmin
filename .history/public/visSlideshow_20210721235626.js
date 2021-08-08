

var start = performance.now();

//VARIABLER:
var firebaseConfig = { apiKey: "AIzaSyDWqlUDi0zFQzhx0UmaPL5MavMPD3WP_dM", authDomain: "moltrup-f289d.firebaseapp.com", databaseURL: "https://moltrup-f289d-default-rtdb.europe-west1.firebasedatabase.app", projectId: "moltrup-f289d", storageBucket: "moltrup-f289d.appspot.com", messagingSenderId: "501616983877", appId: "1:501616983877:web:706f3e5d111751f3aa882c", measurementId: "G-BX53EJ9DL6" }; firebase.initializeApp(firebaseConfig);
var billederef;
const firestore = firebase.firestore();
const slideinssref = firestore.collection(`slideshows`).doc(slideshowId);
const slidesref = slideinssref.collection('slides');

let slider;
let listen = false;


slidesref.onSnapshot(querySnapshot => {


querySnapshot.docChanges().forEach(change => {

  if (change.type == 'removed') {
    $(`#${change.doc.id}`).remove();
  }else if(change.type =='added'){

    let ord = [];
    
    $('.slider').append(`
    <img id="${change.doc.id}" src="${change.doc.data().url}" alt="Slide" data-pos=${change.doc.data().pos}>`);
  }else if(change.type =='modified'){
    location.reload();
  }


  
  });

  $('.slider').children().sort(sort_li);

});

slideinssref.onSnapshot(doc => {if(listen){location.reload();}} ); 


setTimeout(() => {
    listen = true
}, 4000);



setTimeout(() => {
   slider = new Slighter(document.querySelector('.slider'), slideIns.varighed*1000);
  console.log(slider);
}, 3000);

function sort_li(a, b){
    return ($(b).data('position')) < ($(a).data('position')) ? 1 : -1;    
}