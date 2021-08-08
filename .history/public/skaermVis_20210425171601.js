gennemgåSkab();
const db = firebase.firestore();

db.collection('skærme').doc(skaerm).collection('widgets')
.get()
.then((querySnapshot) => {
let widgetsISkab = querySnapshot;


});


/* 
console.log(widgetData);
widgetDB.forEach(doc => {
   let type = doc.data().widget;

   type({start:'X1Y1', tekst:doc.data().tekst});

}); 
*/