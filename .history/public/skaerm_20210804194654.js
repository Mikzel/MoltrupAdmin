

var firebaseConfig = { apiKey: "AIzaSyDWqlUDi0zFQzhx0UmaPL5MavMPD3WP_dM", authDomain: "moltrup-f289d.firebaseapp.com", databaseURL: "https://moltrup-f289d-default-rtdb.europe-west1.firebasedatabase.app", projectId: "moltrup-f289d", storageBucket: "moltrup-f289d.appspot.com", messagingSenderId: "501616983877", appId: "1:501616983877:web:706f3e5d111751f3aa882c", measurementId: "G-BX53EJ9DL6" }; firebase.initializeApp(firebaseConfig);



gennemgåSkab('+');
const db = firebase.firestore();





function hjemKnap(data) { 
  let metode = 'href';
if (data.Fun) {metode = 'onclick'}
$(`${data.ParentElement||'header'}`).prepend(`   
<a ${metode}="${data.Url || window.location.origin}" >
<div class="hjem">
  <i class="${data.Ikon || 'fas fa-home'}"></i>
</div>  
</a>`);
 }







function setParam(navn, værdi) {
  const params = new URLSearchParams(window.location.search);
  params.set(navn, værdi);
  window.history.replaceState({}, "", decodeURIComponent(`${window.location.pathname}?${params}`));
}

function læsParam(værdi) {
  return (new URLSearchParams(window.location.search).get(værdi));
}


function sletWidget(x){
  
  if (confirm(`Er du sikker på, at du vil slette denne widget?`)) {
    try {
      db.collection('skærme').collection(skærm).collection("widgets")
    .where("id", "==", x).delete()
    } catch (error) {
      alert(`Ups, der skete en fejl! \n${error}`)
    }
  }
}



/*setTimeout(() => {

  checkForTom();
}, 8000);*/



// function checkForTom(data) {

// let skabGridRows = $('main').css('grid-template-areas').replace('"', '').slice(0, -1).split('\" \"')


// let brugtListe = [];


// console.log(skabGridAreas);






// $('main > div').each((index, element) => {

// let widgetGridAreas = $(element).css('grid-area').replaceAll(' ','').split('/');

// if (widgetGridAreas[0]==widgetGridAreas[3]) {
//   brugtListe.push(widgetGridAreas[0]);

//   }else{

  
// let startY = widgetGridAreas[0].split('Y')[1]/*(Y-værdigen i start)*/
// let slutY = widgetGridAreas[3].split('Y')[1]/*(Y-værdigen i slut)*/
    
//   if (startY==slutY) {
//     //Hvis start og end har samme Y-akse:


// let startX = widgetGridAreas[0].split('Y')[0].replaceAll('X', '')/*(X-værdigen i start)*/
// let slutX = widgetGridAreas[3].split('Y')[0].replaceAll('X', '')/*(X-værdigen i slut)*/


//     brugtListe.push('X'+parseFloat((Math.abs((slutX-startX)-1)))+'Y'+startY);
//   console.log(brugtListe)

  
// }


//   widgetGridAreas[0]


//   }



 
// });

//}



arr_diff(brugte.flat(), skabelonData['grid-template-areas'].replaceAll(',', ' ').split(' '))
.forEach((i)=>{
  $('main').append(`<div class="widget-con" id="${i}" style="grid-area: ${i};"><div class="plus"><i class="fas fa-plus"></i></div> <p class="WidgetConKord">${i}</p> </div>  `)
});




function arr_diff (a1, a2) {

    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
}