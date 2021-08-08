gennemgåSkab();
const db = firebase.firestore();

db.collection('skærme').doc(skærm).collection('widgets')
.get()
.then((querySnapshot) => {
    querySnapshot.forEach((doc) =>{
        console.log(doc.id);
    })


});


/* 
console.log(widgetData);
widgetDB.forEach(doc => {
   let type = doc.data().widget;

   type({start:'X1Y1', tekst:doc.data().tekst});

}); 
*/