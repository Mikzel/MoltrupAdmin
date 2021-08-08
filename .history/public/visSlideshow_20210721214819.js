

/*SCRIPT FRA SLIGHTER.JS:*/

class Slighter {
    constructor(sliderContainer, interval) {
        this.sliderContainer = sliderContainer;
        this.currentSlide = 0;
        this.sliderContainer.children[this.currentSlide].classList.add("current");
        if (this.sliderContainer.children.length > 1)
            setInterval(() => this.changeSlide(), interval);
    }
    changeSlide() {
        this.sliderContainer.children[this.previousSlide].classList.remove("previous");
        this.sliderContainer.children[this.currentSlide].classList.replace("current", "previous");
        this.sliderContainer.children[this.nextSlide].classList.add("current");
        this.currentSlide = this.nextSlide;
    }
    get previousSlide() {
        if (this.currentSlide === 0) {
            return this.sliderContainer.children.length - 1;
        }
        return this.currentSlide - 1;
    }
    get nextSlide() {
        if (this.currentSlide < this.sliderContainer.children.length - 1) {
            return this.currentSlide + 1;
        }
        return 0;
    }
}




var start = performance.now();

//VARIABLER:
var firebaseConfig = { apiKey: "AIzaSyDWqlUDi0zFQzhx0UmaPL5MavMPD3WP_dM", authDomain: "moltrup-f289d.firebaseapp.com", databaseURL: "https://moltrup-f289d-default-rtdb.europe-west1.firebasedatabase.app", projectId: "moltrup-f289d", storageBucket: "moltrup-f289d.appspot.com", messagingSenderId: "501616983877", appId: "1:501616983877:web:706f3e5d111751f3aa882c", measurementId: "G-BX53EJ9DL6" }; firebase.initializeApp(firebaseConfig);
var billederef;
const firestore = firebase.firestore();
const slidesref = firestore.collection(`slideshows`).doc(slideshowId).collection('slides');




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






document.addEventListener('DOMContentLoaded', () => {
    let slider = new Slighter(document.querySelector('.slider'), 20000);
    });
    
