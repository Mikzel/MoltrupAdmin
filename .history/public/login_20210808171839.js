var firebaseConfig = { apiKey: "AIzaSyDWqlUDi0zFQzhx0UmaPL5MavMPD3WP_dM", authDomain: "moltrup-f289d.firebaseapp.com", databaseURL: "https://moltrup-f289d-default-rtdb.europe-west1.firebasedatabase.app", projectId: "moltrup-f289d", storageBucket: "moltrup-f289d.appspot.com", messagingSenderId: "501616983877", appId: "1:501616983877:web:706f3e5d111751f3aa882c", measurementId: "G-BX53EJ9DL6" }; firebase.initializeApp(firebaseConfig);firebase.analytics();
const opretbruger = firebase.functions().httpsCallable('opretbruger');
const firestore = firebase.firestore();









firebase.auth().onAuthStateChanged((user) => {
   
  /*
    if (user) {
 
        var logindtid = new Date(firebase.auth().currentUser.metadata.lastSignInTime).getTime();
        var pt = new Date().getTime();

        if (pt-logindtid>300000 ) {
          firebase.auth().signOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
        
          console.log(user.displayName);
        }else{
          window.location = '../SlideTilpasser/MasterSlide.html';
          console.log(`${user.displayName} er logget ind`);
  
          }
        
            
        
            // ...
          } else {
   
          }
  
          */
});


$('.logincenter').addClass('loadanim');



$('.bruger').on('click', function() {


  $('.Email').removeClass('reset');

  $('.resetinstruks').animate({
    opacity: 0
  }, 400, function() {$('.resetinstruks').css('display','none');});

$('.toien').removeClass('loginfelt');
$('.toien').addClass('kodeord');

$('.glemt').css('display','inline-block');

$('.MasterKodeord').css('display','block');

$('.Navn').css('display','block');

$('.Email').css('display','block');

$('.opretbruger').css('display','inline-block');

$('.logind').css('display','inline');

$('.opretbruger').animate({
  opacity: 1
}, 400);
$('.glemt').animate({
  opacity: 1
}, 400);
$('.loginboks').animate({
  width: '700px',
  height: '500px'
}, 400);
$('.inputslog input').animate({
  margin: 10
}, 400);
$('.MasterKodeord').animate({
  opacity: 1
}, 400);

$('.Navn').animate({
  opacity: 1
}, 400);

$('.Email').animate({
  opacity: 1
}, 400);


$('.logind').animate({
  opacity: 1
}, 400);

  $('.ext .bruger').css('display','none');
});








$('.glemt').on('click', function() {
  $('.Email').addClass('reset');
  $('.logind').css({'display': 'inline-block'})
  $('.bruger').css({'display': 'inline-block'})
  $('.resetinstruks').css({'display': 'block'})
  $('.loginboks').animate({
    width: '700px',
    height: '200px'
  }, 400);

  $('.resetinstruks').animate({
    opacity: .5
  }, 400);



$('.reset').on('input', function(){

  if ($('.reset').val()) {
    
    $('.sendmailknap').css({'display': 'inline-block'});
    $('.sendmailknap').animate({
      opacity: 1
    }, 400);

      $('.link').css({'display': 'none'})
    
  }else{
    $('.link').css({'display': 'block', 'opacity':'1'})
    $('.sendmailknap').animate({
      opacity: 0
    }, 200, function(){
      $('.sendmailknap').css({'display': 'none'}); 
    }); 
  }
  
  
  });

 

  $('.glemt').animate({
    opacity: 0
  }, 400, function (){
    $('.glemt').css({'display': 'none'})
  });



  $('.opretbruger').animate({
    opacity: 0
  }, 400, function() {
    $('.opretbruger').css({'display': 'none'})
  });

  $('.logind').animate({
    opacity: 1
  }, 400);
  $('.bruger').animate({
    opacity: 1
  }, 400);

  $('input:not(".Email")').animate({
   opacity:0
  }, 400, function () {
    
    $('input:not(".Email")').css({display: 'none'});

  });





});








$('.logind').on('click', function() {

  $('.Email').removeClass('reset');
  $('.resetinstruks').animate({
    opacity: 0
  }, 400, function() {$('.resetinstruks').css('display','none');});
  $('.glemt').css({'display': 'inline-block'})
$('.toien').addClass('loginfelt');
$('.toien').removeClass('Kodeord');

$('.loginfelt').css({'display':'inline-block'});
$('.opretbruger').animate({
  opacity: 0
}, 200);

$('.loginfelt').animate({
  opacity: 1
}, 200);




  $('.ext .bruger').css({'display':'inline-block','opacity':'0'});
$('.MasterKodeord').animate({
  opacity: 0
}, 200);

$('.Navn').animate({
  opacity: 0
}, 200);

$('.glemt').animate({
  opacity: 1
}, 400);

$('.logind').animate({
  opacity: 0
}, 200), function() {
  $('.MasterKodeord').css('display','none');

  $('.Navn').css('display','none');

  $('.logind').css('display','none');
};


$('.inputslog input').animate({
  margin: 'auto'
}, 400);
setTimeout(function() {
  $('.loginboks').animate({
    width: '500px',
    height: '250px'
  }, 400);


  $('.logind').css('display','none');
  $('.opretbruger').css('display','none');
  $('.Navn').css('display','none');
  $('.MasterKodeord').css('display','none');
}, 300)


$('.ext .bruger').animate({
  opacity: 1
}, 400);



});











  



$('.loginfelt').on('input', function() {




    if ($('.loginfelt').val()) {
      $('.link').css('display','none');
      $('.logindknap').css('display','block');
          $('.logindknap').animate({
            opacity: 1
          }, 500);
         


  }else {

    $('.link').css('display','block');
      $('.logindknap').css('display','none');
     

    }
console.log($('.loginfelt').val());
})





$('.opretbruger').on('click', function() {
  var check = false;
  $('input').each(function() {
    if (!this.value) {
  check = true;
      var navne = this.className.split(' ');
      alert(`Du mangler at udfylde ${navne[0]}!`);
    }

  });

  if (!check) {
      opretbrugerfun();
  }
})





























$('.logindknap').on('click', function() {

  var email = $('.Email').val();
  var kodeord = $('.Kodeord').val();

  loginCheck(email, kodeord);


})










function opretbrugerfun() {
  var navn = $('.Navn').val();
  var kodeord = $('.Kodeord').val();
  var email = $('.Email').val();
  var master = $('.MasterKodeord').val();
  
  
  opretbruger({navn: navn, kodeord: kodeord, email: email, master: master})
  .then((result) => {
     var status = result.data.status;
     var besked = result.data.besked;
    alert(`${besked}`);

    if (status === 'success') {
      location.reload();
    }
  
  });
  
  }
VanillaTilt.init(document.querySelector(".loginboks"), {
  max: 5,
  speed: 400

});

$('.sendmailknap').on('click', function() {

  var auth = firebase.auth();

  let emailAddress = $('.reset').val();



   auth.sendPasswordResetEmail(emailAddress).then(function() {
     alert('Emailen er sendt!');
     location.reload();
   }).catch(function(error) {
switch (error.code) {
  
  case 'auth/invalid-email':
    alert(`"${emailAddress}" ser ikke ud til at være en rigtig mail. \nCheck om du har skrevet rigtigt og prøv igen.`);
    break;

    case 'auth/user-not-found':
      alert(`Der er desværre ikke registreret en bruger med mailen: ${emailAddress}. \nCheck om du har skrevet rigtigt og prøv igen. `);
      break;

  default: alert('Der skete en fejl. \nPrøv igen om lidt.');
    break;
}

    console.warn(error);
    
   });

  });