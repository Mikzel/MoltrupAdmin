
const admin = require('firebase-admin');
const serviceAccount = require('./moltrup-f289d-firebase-adminsdk-v9u92-86908bf18c.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
     apiKey: "AIzaSyDWqlUDi0zFQzhx0UmaPL5MavMPD3WP_dM", authDomain: "moltrup-f289d.firebaseapp.com", databaseURL: "https://moltrup-f289d-default-rtdb.europe-west1.firebasedatabase.app", projectId: "moltrup-f289d", storageBucket: "moltrup-f289d.appspot.com", messagingSenderId: "501616983877", appId: "1:501616983877:web:706f3e5d111751f3aa882c", measurementId: "G-BX53EJ9DL6"
  });
  const db = admin.firestore();
const express = require('express');
const http = require('http');
const https = require('https');
const  fs = require('fs');
const app = express();
const fetch = require('node-fetch');
let router = express.Router();
let ejs = require('ejs');
app.set('view engine', 'ejs');
const initVejr = require('/Users/mikkelorskov/Desktop/Arbejde/MoltrupKontrolPanelNODE/public/SRC/initVejr.js');


initVejr();

 

app.use(express.static(__dirname+'/public'));




  app.get('/', (req, res) => {

let skærme= [];

    db.collection('skærme')
    .get()
    .then(function (doc){
    doc.forEach(function (doc){
      skærme.push(doc.id);
    })

res.render(__dirname+'/public/views/forside', {skærme:skærme, link:`./rediger/sk%C3%A6rme/`})
    });
    


});

app.get('/rediger/sk%C3%A6rme/:skaerm', (req, res)=> {
let { skaerm } = req.params;


db.collection('skærme').doc(skaerm)
.get()
 .then(docSnapshot => {
        if (docSnapshot.exists) {

          db.collection('Skabeloner').doc(`${docSnapshot.data().skabelon}`)
          .get()
          .then(docSnapshot => {
let skabsnap = docSnapshot.data();


  
      db.collection('widgets').get().then((snap) => {
        console.log(snap.size);
    let widgetList = [];
    let process = 0;
    snap.forEach((doc)=>{
    var midl = doc.data();
    midl.navn = `${doc.id}`;
    widgetList.push(midl);

      process++;

      if (process==snap.size) {
        
        
        console.log(widgetList); 
        let brugte = [];
      
    try {

      db.collection('skærme').doc(skaerm).collection('widgets') 
      .limit(1)
      .get()
      .then(query => {
    
      if (!query.size) {
        widgets ='';
        brugte=[];
        res.render(__dirname+'/public/views/skaerm', {skærm:skaerm, skabelon:skabsnap, widgets: widgetList, brugte:brugte});
      }else{


        db.collection('skærme').doc(skaerm).collection('widgets')
        .get()
        .then(snap => {
      let pro2 = 0;
          snap.forEach((doc)=>{

            if (doc.data().brugt) {
              brugte.push(doc.data().brugt.split(','));
            }
    
      pro2++;
    if (pro2==snap.size) {
      
      console.log(brugte);
      res.render(__dirname+'/public/views/skaerm', {skærm:skaerm, skabelon:skabsnap, widgets: widgetList, brugte:brugte});
    }
    
    
    
        });
      
      
      
      
      
        });

      }

      });


  
      } catch (error) {
          console.warn(error)
        }





    }
    });

});




           
          })

        }else{
        res.send('Denne skærm findes ikke!');
        }
  });






console.log(`${skaerm}`);
});



app.get('/sk%C3%A6rme/:skaerm', (req, res)=> {
  let { skaerm } = req.params;
  
  
  db.collection('skærme').doc(skaerm)
  .get()
   .then(docSnapshot => {
          if (docSnapshot.exists) {
  
            db.collection('Skabeloner').doc(`${docSnapshot.data().skabelon}`)
            .get()
            .then(docSnapshot => {
  let skabsnap = docSnapshot.data();




   res.render(__dirname+'/public/views/skaermVis', {skærm:skaerm, skabelon:skabsnap});
  

  

             
            })
  
          }else{
          res.send('Denne skærm findes ikke!');
          }
    });
  
  
  
  
  
  
  console.log(`${skaerm}`);
  });
  

app.listen(8000);

//   http.createServer(function(request, response) {  
// }).listen(8000);


    // response.writeHeader(200, {"Content-Type": "text/html"});  
    // response.write(html);  
    // response.end();  


// fs.readFile('../MoltrupKontrolPanel/Forside/forside/forside.html', function (err, html) {
//     if (err) {
//         throw err; 
//     }       
   
// });




