
var start = performance.now();

  //VARIABLER:
var firebaseConfig = { apiKey: "AIzaSyDWqlUDi0zFQzhx0UmaPL5MavMPD3WP_dM", authDomain: "moltrup-f289d.firebaseapp.com", databaseURL: "https://moltrup-f289d-default-rtdb.europe-west1.firebasedatabase.app", projectId: "moltrup-f289d", storageBucket: "moltrup-f289d.appspot.com", messagingSenderId: "501616983877", appId: "1:501616983877:web:706f3e5d111751f3aa882c", measurementId: "G-BX53EJ9DL6" }; firebase.initializeApp(firebaseConfig);firebase.analytics();
var billederef;
const billederefdb = firebase.storage().ref();
//const dbref = firebase.database().ref().child('Slides');
//const dbroot = firebase.database();
//const dbfejl =  firebase.database().ref().child('Fejl');
const firestore = firebase.firestore();
const slidesref = firestore.collection(`slideshows`).doc(slideshowId).collection('slides');
const slideinsref = firestore.collection(`slideshows`).doc(`${slideshowId}`);
const planlagtslideref = slideinsref.collection('planlagteSlides');
//const dbrefinst = firebase.database().ref().child('SlideInstillinger');
const filupload = document.querySelector('.filupload');
var aktivstatus;
var  randomnavn;
var toggleaktiv = document.querySelector('#toggleaktiv');
var billedelink;
var billedenavn;
var trækogslip = document.querySelector('.redigerslidescon');
var redichildsliste = [];
var rækkef;
var done = false;
var gemt = true;
var ignoreItems= true;
var længde;
var over5 = true;
var brugernavn = 'Eksempel Navn';




/*firebase.auth().onAuthStateChanged((user) => {
      
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
      brugernavn = user.displayName;
      console.log(`${user.displayName} er logget ind`);

      }
    
        
    
        // ...
      } else {
        window.location = '../login/login.html';
      }
  });*/





setTimeout(function () {
if(over5){
  $(".loadingbesked").fadeIn();
}

},5000);


document.addEventListener("DOMContentLoaded", function(){
  over5 = false;
     setTimeout(function() {
      $(".loading").fadeOut();
      $(".loadingbesked").fadeOut();
      setTimeout(function() {
       $('body').css('overflow', 'auto');
     },100);
    },500);
});

$(window).bind('beforeunload', function() {
    if(!gemt){
        return "Du har ikke gemt dine ændringer! Hvis du fortsætter, bliver dine ændringer ikke gemt.";
    }

  
    

});


$('#varighed').on('blur', function() {  


  slideinsref.get().then(function (doc){
    if (!doc.data().SlideIns.varighed) {
      
      alert('Varigheden må ikke stå tomt! \nHvis du vil deaktivere slideshowet, skal du slå "aktiv" knappen fra.\n\nVarigheden bliver automatisk sat til 5 sek!');
      var midl = doc.data().SlideIns[varighed] = 5;
      slideinsref.update({SlideIns: midl});
    }
  })});






  //VED UPLOAD AF NYT BILLEDE:


//Uploader billede-fil til StorageDB og henter URLen til billedet
filupload.addEventListener("change", function(e) {




var billede = e.target.files[0];
var  billedenavn = billede.name;
var  filtype = billedenavn.substr(billedenavn.lastIndexOf('.'));
randomnavn = Math.random().toString(36).substring(2);
  billederef = firebase.storage().ref(`slidebilleder/${slideshowId}/${randomnavn + filtype}`);
  var opgave = billederef.put(billede);




    opgave.on('state_changed',

    function process(snapshot) {
       procent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       //console.log(procent);
      // visprocent.innerText= `${procent.toFixed()}%`
    },

    function error(err) {
      alert('Ups! Det ser ud til, der skete en fejl under upload af billede. Har du tjekket din internet forbindelse?    '+err);
    },

    function done() {
      billederef.getDownloadURL()
 .then((url) => {



slidesref.doc(randomnavn).set({
url: url ,
pos: rækkef,
vis: false,
afbruger: brugernavn
});




});

  });
});

//Indsæt synlige billeder, fra batabase, til nuværende billeder boks









slidesref.onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
  if (change.type=='modified') {
        if (!change.doc.data().vis) {
                  console.log(change.doc.id);
                $(`.nuværendebilcon #${change.doc.id}`).remove();
              }else if (change.doc.data().vis) {

                if ($('.nuværendebilcon').parent().find(`#${change.doc.id}`).length == 0) {
                  console.warn(change.doc.id);
                  document.querySelector('.nuværendebilcon').innerHTML += `<div class="nuvbillede" onclick="popup('img','${change.doc.data().url}','ramme',true)" id="${change.doc.id}"><img src="${change.doc.data().url}" draggable="false" style=""></div>`;
                }else{
              }

                
              }


            }else if (change.type=='added') {
              if (change.doc.data().vis) {
                  document.querySelector('.nuværendebilcon').innerHTML += `<div class="nuvbillede" onclick="popup('img','${change.doc.data().url}','ramme',true)" id="${change.doc.id}"><img src="${change.doc.data().url}" draggable="false" style=""></div>`;
              }
              slidesref.get().then(snap => {
                 rækkef = snap.size;
              });

            }
        });

    });











  //REDIGÉR BOKS:




slidesref.onSnapshot(function(snapshot) {
if (!ignoreItems) {
  snapshot.docChanges().forEach(function(change) {
if (change.type=='added') {
if(ignoreItems!=true){
document.querySelector('.redigerslidescon').innerHTML+=`<div class="redigeritem" id='${change.doc.id}'> <div class="redigerbilcon"> <img id='${change.doc.id}' draggable="false" onclick="popup('img','${change.doc.data().url}','ramme',true)" src="${change.doc.data().url}"></div> <div class="redigersettings"><label class="switch" class="redigeritemswitch"> <input id='${change.doc.id}' id="togglesynid" onchange="toggleaktivitem(this)"  type="checkbox" > <span class="slider"></span></label> <i onclick="slet('${change.doc.id}')" class="fas fa-trash-alt"></i> <i class="fas fa-bars" id="dragknap"></i></div>  </div>`;

}

}

  });
}

if(ignoreItems){ignoreItems=false;}

    });






//Husk rækkefølgen af billederne  function rækkefølge() { redichildsliste = []; var parent = document.querySelector('.redigerslidescon'); var redichilds = parent.childNodes; for (var i=0; i<redichilds.length; i++) { if (!redichilds[i].id) { continue; } redichildsliste.push(redichilds[i].id); } console.log(redichildsliste); dbrefinst.update({ Rækkef: redichildsliste }); }


slidesref.get().then(snap => {
   rækkef = snap.size;
   window.onload = setTimeout(loadrækkef(), 1000);
});





 function rækkefølge() {


     var parent = document.querySelector('.redigerslidescon');
     var redichilds = parent.childNodes;
     console.log(redichilds.length);
   for (var i=0; i< rækkef; i++) {
       if (redichilds[i].id==undefined) {continue; }


       var item = redichilds[i].id;


        slidesref.doc(item).update({
        pos: i
        })
     


.catch(function(error) {
          console.log("Fejl ved rækkefølge()  "+ error);

      });



  }


  setTimeout(function () {
    trækogslip.textContent = '';
   loadrækkef();
 }, 1000);

  // dbref.orderByChild(redichilds[i].id).once("value", function(snapshot) { snapshot.forEach(function(data) { console.log(data.val().pos); }); });

 }


 slidesref.onSnapshot(function(snapshot) {
         snapshot.docChanges().forEach(function(change) {
   if (change.type=='modified') {
     slidesref.get().then(snap => {
        rækkef = snap.size;
     });
     
  

             }

         });

     });







function loadrækkef() {


  slidesref.get().then(snap => {
     rækkef = snap.size;
  });
  var i;
  for (i = 0; i < rækkef; i++) {


  slidesref.where("pos", "==", i)
        .limit(1)
        .get()
        .then(function(querySnapshot) {
            
          console.log(querySnapshot.docs[0].data());
               var check;
                 if (querySnapshot.docs[0].data().vis) {
                 check = 'checked'
                 }


                 document.querySelector('.redigerslidescon').innerHTML+=`<div class="redigeritem" id='${querySnapshot.docs[0].id}'> <div class="redigerbilcon"> <img id='${querySnapshot.docs[0].id}' draggable="false" onclick="popup('img','${querySnapshot.docs[0].data().url}','ramme',true)" src="${querySnapshot.docs[0].data().url}"></div> <div class="redigersettings"><label class="switch" class="redigeritemswitch"> <input id='${querySnapshot.docs[0].id}' id="togglesynid" onchange="toggleaktivitem(this)"  type="checkbox" ${check} > <span class="slider"></span></label> <i onclick="slet('${querySnapshot.docs[0].id}')" class="fas fa-trash-alt"></i> <i class="fas fa-bars" id="dragknap"></i></div>  </div>`;


        //console.log(data.key);

          
        })
        .catch(function(error) {
            console.log("Fejl i loadrækkef() nr2ting   ", error);
        });





  }

done = true;}

function toggleaktivitem(item) {

var itemid = item.id;

slidesref.doc(itemid).update({ vis: item.checked })
}


 function visgem() {
  $('.gem').css({'transform': 'translateY(50%) scale(1)', 'opacity': '1'});
  gemt=false;
}


$('.gem').click( function () {
  var tekst = $('.gem').text();
  $('.gem').text('Gemmer...');
  rækkefølge();

function rækkefølgedone() {
  if(!done) {
         window.setTimeout(rækkefølgedone, 100);
      } else {
          $('.gem').text('Færdig!');
          gemt=true;
            done = false;
          setTimeout(function() {
            $('.gem').css('transform', 'translateY(50%) scale(0)');
            setTimeout(function() {$('.gem').text(tekst);}, 500);
          }, 1000);


      }
} rækkefølgedone();

});



  //document.querySelector('.redigerslidescon').innerHTML+=`<div class="redigeritem" id='${data.key}' onDrop='rækkefølge()'> <div class="redigerbilcon"> <img id='${data.key}' onclick="bilvis(this)" src="${data.val()}"></div> <div class="redigersettings"><label class="switch" class="redigeritemswitch"> <input id="togglesynid" type="checkbox" > <span class="slider"></span></label> <i class="fas fa-trash-alt"></i> <i class="fas fa-ellipsis-v"></i></div>  </div>`;
  //rækkefølge();










//En Await version af det overstående:
/*async function insætbilred() {dbref.on('child_added', (data) => {document.querySelector('.redigerslidescon').innerHTML+=`<div class="redigeritem" id='${data.key}' onDrop='rækkefølge()'> <div class="redigerbilcon"> <img id='${data.key}' onclick="bilvis(this)" src="${data.val()}"></div> <div class="redigersettings"><label class="switch" class="redigeritemswitch"> <input id="togglesynid" type="checkbox" > <span class="slider"></span></label> <i class="fas fa-trash-alt"></i> <i class="fas fa-ellipsis-v"></i></div> </div>`; });}insætbilred().then( function (value) { setTimeout(function(){ rækkefølge()}, 1000); });*/


//Slet billede fra rediger-boks, hvis slettet fra batabase







slidesref.onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
  if (change.type=='removed') {
     slidesref.get().then(snap => {rækkef = snap.size;});
    setTimeout(function () {
   rækkefølge();
    },500);
    

            }
        });

    });





//Aktivér Drag n Drop i rediger-boks
new Sortable(trækogslip, {
  animation: 300,
  handle: '#dragknap',
  onUpdate: function (evt) {
	visgem();
	}

});






  //INSTILLINGER:

//Opdaterer database, når et input ændres.
function inputdata(inputdata) {
  var tal = parseInt(inputdata.value);
    slideinsref.update({[inputdata.id]: tal});
  }

//Opdaterer database, når en switch ændres.
function toggledata(toggle) {
    var status;
  status = toggle.checked;
    slideinsref.update({
    [toggle.id]: status });

    if (toggle.id=='toggleaktiv') { if (!status) {document.querySelector('#aktivtekst').innerText='Ikke aktiv'}else {document.querySelector('#aktivtekst').innerText='Aktiv'; }}

  }











//     firestore.collection('position').onSnapshot(function(snapshot) {
//       snapshot.docChanges().forEach(function(change) {
// if (change.type=='modified') {

//   alert('Hej');

//           }
//       });

//   });



slideinsref
.onSnapshot(function(doc) {

      aktivstatus = doc.data().toggleaktiv;
      toggleaktiv.checked = aktivstatus;
      if (!aktivstatus) {document.querySelector('#aktivtekst').innerText='Ikke aktiv'}else {document.querySelector('#aktivtekst').innerText='Aktiv';}
  

      document.querySelector('#varighed').value= doc.data().varighed; 

    var ovstatus = doc.data().toggleovergang;
    document.querySelector('#toggleovergang').checked = ovstatus;


    
  


});




//Sætter aktiv switch (knap og tekst), ved page-load, så det passer med database.
    // dbrefinst.orderByKey().equalTo('toggleaktiv').on("child_added", function(snapshot) {
    //     aktivstatus = snapshot.val();
    //     toggleaktiv.checked = aktivstatus;
    //       if (!aktivstatus) {document.querySelector('#aktivtekst').innerText='Ikke aktiv'}else {document.querySelector('#aktivtekst').innerText='Aktiv';}

    //   });

//Sætter varighed input-value, ved page-load, så det passer med database.
// dbrefinst.orderByKey().equalTo('varighed').on("child_added", function(snapshot) {
//       document.querySelector('#varighed').value= snapshot.val();

//     });

//Sætter aktiv switch (knap og tekst), ved on-page realtime ændringer.
// dbrefinst.orderByKey().equalTo('toggleaktiv').on("child_changed", function(snapshot) {
//     aktivstatus = snapshot.val();
// toggleaktiv.checked = aktivstatus;

//       if (!snapshot.val()) {document.querySelector('#aktivtekst').innerText='Ikke aktiv'}else {document.querySelector('#aktivtekst').innerText='Aktiv';}

// });

//Sætter varighed input-value, så det passer med database, ved on-page realtime ændringer.
// dbrefinst.orderByKey().equalTo('varighed').on("child_changed", function(snapshot) {
// document.querySelector('#varighed').value= snapshot.val();


// });






// });










//   //FEJLBEHANDLING
//   window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
// //Print fejl-info i konsol
//     console.warn(`FEJL: ${errorMsg}.  Admin er blevet underrettet. Reload siden og prøv igen om lidt.`);
//   var d = new Date;

// //Print fejl-info i DB
//     dbfejl.update({
//     [d]: errorMsg});

//       return false;

//   }









function planlægops(){



popup(`titel`,`Planlæg slides`,`
<div class="plancon">

<div class="aktive">
<p style="margin: 10px;">Planlagte slides:</p>

  <div class="aktiveflex">




  </div>


</div>
<div class="inaktiv">
  <div class="inaktivflex">





  </div>
</div>
  </div>
  
  
  
  <div class="planny">

  <a href="#filogplan" class="scrollikon"><i class="fas fa-arrow-down"></i></a>
  
  <div class="fratil">
  <div class="fra">
  

  <div class="datetimeCon">
  <p style="text-align: center; opacity:.5; diplay: block;" class="tekst">Fra</p>
  <input style="width:auto; cursor: pointer;" class="fradato" type="date"></input>
  <input style="width:auto; cursor: pointer;" class="fratid" type="time"></input>
  </div>

  </div>
  
  <div class="til">

  <div class="datetimeCon">  
  <p style="text-align: center; opacity:.5; " class="tekst">Til</p>
  <input style="width:auto; cursor: pointer;" class="tildato" type="date"></input>
  <input style="width:auto; cursor: pointer;" class="tiltid"  type="time"></input>
  </div>

  </div>
  </div>
  
  <div class="filogplan" id="filogplan">
  <div class="datetimeCon cn2">   
  <input type="file" accept=".pdf, image/*" class="planfil" ></input>
  <div class="knap" onclick="checkogindsendplan()" id="planknap">Planæg</div>
  
  </div>

  </div>
  
  </div>




`);

planlagtslideref.onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
  if (change.type=='removed') {

    document.querySelector(`#${change.doc.id}`).remove();

  }
    })
      })
      planlagtslideref
 .get()
 .then(function(snapshotQuery){
   var nu = new Date().getTime();
   snapshotQuery.forEach((doc)=>{
    
     if (doc.data().fra < nu && doc.data().til > nu) {
      document.querySelector('.aktiveflex').innerHTML+=`
     <div class="planitem" id="${doc.id}">
 <i class="fas fa-trash-alt sletplan" onclick="sletPlanlagte('${doc.id}')"></i>
 <div class="planbilledecon"> <img src="${doc.data().planbillede}"></div>
 <p class="afbruger">${doc.data().afbruger}</p>
 <p style="font-size:0.5em">Stadig aktiv i</p>
 <h1 class="dagetal">${((doc.data().til-nu)/86400000).toFixed()}</h1>
 <p style="font-size:0.5em">dage</p>
 <p class="fratildato">${doc.data().fradato} ${doc.data().frakl} - ${doc.data().tildato} ${doc.data().tilkl}</p> 
 </div>
       `;
     }else if(doc.data().fra > nu && doc.data().til > nu){
      document.querySelector('.inaktivflex').innerHTML+=`

      <div class="planitem" id="${doc.id}">
<i class="fas fa-trash-alt sletplan" onclick="sletPlanlagte('${doc.id}')"></i>
<div class="planbilledecon" > <img src="${doc.data().planbillede}"></div>
<p class="afbruger">${doc.data().afbruger}</p>
<p style="font-size:0.5em">Aktiv om</p>
<h1 class="dagetal">${((doc.data().fra-nu)/86400000).toFixed()}</h1> 
<p style="font-size:0.5em">dage</p>
<p class="fratildato">${doc.data().fradato} ${doc.data().frakl} - ${doc.data().tildato} ${doc.data().tilkl} </p> 
</div>
      
      `;


     }


   })

 })

}



function checkogindsendplan(){

  var fradraw = $('.fradato').val();
  var tildraw = $('.tildato').val();
  var fratraw = $('.fratid').val();
  var tiltraw = $('.tiltid').val();

  var alder = new Date();
  var fradato =  new Date(`${fradraw}T${fratraw}`);
  var tildato =  new Date(`${tildraw}T${tiltraw}`);
  var franum =  fradato.getTime();
  var tilnum =  tildato.getTime();

if ($('.fradato').val()=='' || $('.tildato').val()=='' || $('.fratid').val()=='' || $('.tiltid').val()=='' || $('.planfil').val()=='') {
  alert('Du mangler at udfylde et/flere af de 5 felter!');
  topscroll('.planny');
}else if(franum >= tilnum || tilnum < alder.getTime()){
alert('1. Fra-tidspunket SKAL være en dato/klokkeslet før til-tidspunktet! \n2. Til-tidspunket må ikke være fortid! \n\nCheck de overstående ting og prøv igen');
topscroll('.planny');
}else{

  $('body').prepend('<div class="blockklik" style="position:absolute; z-index:30; width: 100%; height:100%;  cursor:progress;"></div>');



  var planbillede = document.querySelector('.planfil').files[0];
  var plannavn = planbillede.name;
  var plantype = plannavn.substr(plannavn.lastIndexOf('.'));
  var nytpbnavn = Math.random().toString(36).substring(2);
  var planbillederef = firebase.storage().ref(`Planlagte billeder/${slideshowId}/${nytpbnavn + plantype}`);
  var uploadplanbil = planbillederef.put(planbillede);



  uploadplanbil.on('state_changed',
 


  function process(snapshot) {
    
     var planprocent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

    document.querySelector('#planknap').innerText=`${planprocent.toFixed()}%`;
  },

  function error(err) {
    alert('Ups! Det ser ud til, der skete en fejl under upload af billede. Har du tjekket din internet forbindelse?    '+err);
  },

  function done() {
    planbillederef.getDownloadURL()
.then((url) => {

var framåned = (fradato.getMonth()+1).toString();
var tilmåned = (tildato.getMonth()+1).toString();
console.log(framåned.length);
console.log(tilmåned.length);
  if (framåned.length<2) {
    framåned = '0'+framåned;
  }

  if (tilmåned.length<2) {
    tilmåned = '0'+tilmåned;
  }

 
  var framin= fradato.getMinutes();
  var fratim= fradato.getHours();
  var tilmin= tildato.getMinutes();
  var tiltim= tildato.getHours();

if (framin.toString().length<2) {
  framin='0'+framin;
}
if (fratim.toString().length<2) {
  fratim='0'+fratim;
}
if (tilmin.toString().length<2) {
  tilmin='0'+tilmin;
}
if (tiltim.toString().length<2) {
  tiltim= '0'+tiltim;
}

 
planlagtslideref.doc(nytpbnavn).set({
   fra: parseInt(franum),
   til: parseInt(tilnum),
   planbillede: url,
   postDato: alder,
   afbruger: brugernavn,
   aktivdage: (parseInt(tilnum)-parseInt(franum))/86400000,
   fradato: `${fradato.getDate()}.${framåned}.${fradato.getFullYear()}`,
   tildato: `${tildato.getDate()}.${tilmåned}.${tildato.getFullYear()}`,
   frakl:   `${fratim}:${framin}`,
   tilkl:   `${tiltim}:${tilmin}`
 })


location.reload()





});

});


}

}


function sletPlanlagte(id) {
 if(confirm('Er du sikker på, at du vil slette dette slide? \nDenne handling kan ikke fortrydes.')){
  planlagtslideref.doc(id).delete();
 }
}


function topscroll(x) {
  $(x).scrollTop(0);
}




  
  
  
    

  


  //CHECK OM SKAL VISES (IKKE FÆRDIG)
//   var fradraw = $('.fradato').val();
//   var tildraw = $('.tildato').val();

//   var tilarray = tildraw.split('-');
//   var fraarray = fradraw.split('-');
//   var franum = fraarray[0]+fraarray[1]+fraarray[2];
//   var tilnum = tilarray[0]+tilarray[1]+tilarray[2];

//   var dagsdato = new Date();

//  if ((dagsdato.getMonth()+1).length!=2) {
//    var måned = '0'+ (dagsdato.getMonth()+1);
//    console.log(måned);
//  }










popup('titel',slideshowId.replaceAll('_',' '),`<iframe src="${location.origin}/slideshows/${slideshowId}" width="100%" height="100%"></iframe>`,'ramme', true);







var slut = performance.now();

console.log(`${(slut-start).toFixed(0)} millisekunder`);
