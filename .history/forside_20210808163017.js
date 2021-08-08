
const admin = require('firebase-admin');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const csrf = require('csurf');
const ejs = require('ejs');
const csrfMiddleware = csrf({ cookie: true });

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
const fetch = require('node-fetch');
const app = express();
let router = express.Router();

app.use(express.static(__dirname+'/public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(csrfMiddleware);
app.set('view engine', 'ejs');


app.all("*", (req, res, next) => {
  res.cookie("XSRF-TOKEN", req.csrfToken());
})

app.get('/login', (req, res) =>{

  res.render(__dirname+'/public/views/login.ejs', {});


});

  app.get('/', (req, res) => {
  


 // loginCheck().then((loginData)=>{
    let skærme= [];
    let slideshows= [];
    let vistPå = {};
    
        db.collection('skærme')
        .get()
        .then(function (doc){
          
        doc.forEach(function (doc){
          skærme.push(doc.id);
        });
           
              db.collection('slideshows')
              .get()
              .then( function (doc){
                let antal = doc.size;
                let st = 0;
               doc.forEach(function (doc){ 
                 let slideshowOptr = [];
                slideshows.push(doc.id);
                var slideshow = doc.id;
                
                console.log(slideshow);
                db.collectionGroup('widgets')
                .where('slideshowParent','==', slideshow)
                .get()
                .then((doc) => {
                  antal = antal+doc.size;
                  doc.forEach((doc)=>{
                    slideshowOptr.push(doc.ref.path.split('/')[1]); 
                    st++
                });
    
                vistPå[slideshow]=slideshowOptr;
    
               
              
              });
                
    
    
              st++;
    
    
              if (st == antal) {
               setTimeout(() =>{ 
                 console.log(vistPå);
                res.render(__dirname+'/public/views/forside', {skærme, slideshows, vistPå, link:`./rediger/sk%C3%A6rme/`});
             },1000)
              
            }
             
    
    
              });
    
              
                 
              }); 
    
    
             
    
        });
        
    
  //})


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



app.get('/API/bekaeftLoginToken', (req, res)=>{
  (async ()=>{
  if (req.headers?.authorization?.startsWith('Bearer ')){
    const idToken = req.headers.authorization.split('Bearer ')[1];

    try {
      const decodedIdToken = await admin.auth().verifyIdToken(idToken);
      req['currentUser'] = decodedToken;
    } catch (error) {
      console.log(error);
      }
    }
  })();
});


app.get('/rediger/slideshows/:slideshowId', (req, res) => {
  let { slideshowId } = req.params;
  

  db.collection(`slideshows`).doc(slideshowId).get().then((snapshotQuery) => {
    if (snapshotQuery.exists){
      let slides = [];  
      let slideshow = snapshotQuery.data();
      let slideshowNavn = slideshowId.replace(/_/g, ' ');

              db.collection(`slideshows`).doc(slideshowId).collection(`slides`).get().then((snapshotQuery) => {
               snapshotQuery.forEach((doc)=>{console.log(doc.id); slides.push({id:doc.id, data:doc.data().data});
              
              });
          
              res.render(__dirname+'/public/views/MasterSlide.ejs', {slides, slideshow, slideshowId, slideshowNavn});
              
            });
    }else{
      res.send('Dette slideshow findes ikke!');
    }
  })

});

app.get('/slideshows/:slideshowId', (req, res) => {
  let { slideshowId } = req.params;
  
        db.collection(`slideshows`).doc(slideshowId).get().then((snapshotQuery) => {
          if (snapshotQuery.exists){
            let slides = [];
            let slideIns = snapshotQuery.data();
            let slideshowNavn = slideshowId.replace(/_/g, ' ');
      
                                res.render(__dirname+'/public/views/visSlideshow.ejs', {slideshowId, slideshowNavn, slideIns});
  
            
                    
                  
          }else{
            res.send('Dette slideshow findes ikke!');
          }
        })

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







function loginCheck(params) {
 /* return new Promise((resolve, reject)=>{
    console.log(admin.auth().currentUser);
    if (admin.auth().currentUser) { //Bruger er logget ind.
      resolve({bruger: admin.auth().currentUser});
    }else{
      reject('Bruger er ikke logget ind.');
    }
  });*/
  
}