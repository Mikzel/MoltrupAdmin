

var start = performance.now();

//VARIABLER:
var firebaseConfig = { apiKey: "AIzaSyDWqlUDi0zFQzhx0UmaPL5MavMPD3WP_dM", authDomain: "moltrup-f289d.firebaseapp.com", databaseURL: "https://moltrup-f289d-default-rtdb.europe-west1.firebasedatabase.app", projectId: "moltrup-f289d", storageBucket: "moltrup-f289d.appspot.com", messagingSenderId: "501616983877", appId: "1:501616983877:web:706f3e5d111751f3aa882c", measurementId: "G-BX53EJ9DL6" }; firebase.initializeApp(firebaseConfig);
var billederef;
const firestore = firebase.firestore();
const slideinssref = firestore.collection(`slideshows`).doc(slideshowId);
const slidesref = slideinssref.collection('slides');
const planslidesref = slideinssref.collection('planlagteSlides');

let slider;
let listen = false;


slidesref.onSnapshot(querySnapshot => {
querySnapshot.docChanges().forEach(change => {

  if (change.type == 'removed') {
    if(slider.currentSlide==$(`#${change.doc.id}`).index()){
        slider.changeSlide();
    }
    $(`#${change.doc.id}`).remove();
  }else if(change.type =='added'){

    if(change.doc.data().vis){
        $('.slider').append(`
        <img id="${change.doc.id}" data-vis="${change.doc.data().vis}" src="${change.doc.data().url}" alt="Slide" data-pos=${change.doc.data().pos}>`);
      
    }
    $('.slider').children().sort(sort_li).appendTo('.slider');
   
}else if(change.type =='modified'){
   
    if(change.doc.data().vis==false){
        if(slider.currentSlide==$(`#${change.doc.id}`).index()){
            slider.changeSlide();
        }
        $(`#${change.doc.id}`).remove();
        
        
      }else{
          if(!$(`#${change.doc.id}`).length){
            $('.slider').append(`
            <img id="${change.doc.id}" data-vis="${change.doc.data().vis}" src="${change.doc.data().url}" alt="Slide" data-pos=${change.doc.data().pos}>`); 
            slider.changeSlide();
          }else{
            $(`#${change.doc.id}`).attr('data-pos',change.doc.data().pos);
            $('.slider').children().sort(sort_li).appendTo('.slider');
          }
      }
    //location.reload();
  }


  
  });

 

  

});


planslidesref.onSnapshot(querySnapshot => {


querySnapshot.docChanges().forEach(change => {


  switch (change.type) {
    case 'added':
      if (change.doc.data().vis) {
        $('.slider').append(`
        <img id="${change.doc.id}" data-vis="${change.doc.data().vis}" src="${change.doc.data().planbillede}" alt="PlanSlide" data-pos=999>`);
      }
      break;
    case 'modified':
      if (change.doc.data().vis && $('#'+change.doc.id).length<=0) {
        $('.slider').append(`
        <img id="${change.doc.id}" data-vis="${change.doc.data().vis}" src="${change.doc.data().planbillede}" alt="PlanSlide" data-pos=999>`);
      }
      break;
    case 'removed':
        if (slider.currentSlide==$(`#${change.doc.id}`).index()) {
          slider.changeSlide();
        }
        $(`#${change.doc.id}`).remove();
      break;
  
    default:
      break;
  }

  
  });

  $('.slider').children().sort(sort_li).appendTo('.slider');



});

slideinssref.onSnapshot(doc => {if(listen){location.reload();}} ); 

slideinssref.get().then((doc)=>{
  if(doc.data().toggleaktiv==false){
    $('.slider').css('display', 'none');
    if (location.hash!='#iframe') {
      $('#ikkeAktiv').css('display', 'inline-block');
    }
  }
  if(doc.data().toggleovergang==true){
    console.log('HEHE');
  $('body').append(`
  <style>  
  .previous{
    transition-property: opacity;
    transition-duration: 1s;
    transition-timing-function: ease;} </style>`);
  }
});

setTimeout(() => {
    listen = true
}, 4000);



setTimeout(() => {
   slider = new Slighter(document.querySelector('.slider'), slideIns.varighed*1000);
  console.log(slider);
}, 3000);

function sort_li(a, b){
    return ($(b).attr('data-pos')) < ($(a).attr('data-pos')) ? 1 : -1;    
}

