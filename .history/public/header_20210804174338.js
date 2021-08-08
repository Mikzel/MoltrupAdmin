var firebaseConfig = { apiKey: "AIzaSyDWqlUDi0zFQzhx0UmaPL5MavMPD3WP_dM", authDomain: "moltrup-f289d.firebaseapp.com", databaseURL: "https://moltrup-f289d-default-rtdb.europe-west1.firebasedatabase.app", projectId: "moltrup-f289d", storageBucket: "moltrup-f289d.appspot.com", messagingSenderId: "501616983877", appId: "1:501616983877:web:706f3e5d111751f3aa882c", measurementId: "G-BX53EJ9DL6" }; firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
//     firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       document.querySelector('.authnavn').innerText=user.displayName;
//         }


// });


disploc();

window.addEventListener('locationchange', function () {
    disploc();
});


function disploc() {
    var url = window.location.href.split('#');
  

    switch (url[1]) {
        case 'opretny':
            document.querySelector('.disploc').innerText='Opret ny';
            document.querySelector('.alleMenu').style.display="none";
            document.querySelector('main').style.display="none";
            break;
        case 'log':
            document.querySelector('.disploc').innerText='Aktivitets log';
            document.querySelector('.alleMenu').style.display="none";
            document.querySelector('main').style.display="none";
            break;
        case 'slideshows':
            document.querySelector('.disploc').innerText='Slideshows';
            document.querySelector('main').style.display="none";
            document.querySelector('.alleMenu').style.display="none";
            document.querySelector('.slideshowMenu').style.display="block";
            break;
    
        default:
            document.querySelector('.disploc').innerText='Overblik';
            document.querySelector('.alleMenu').style.display="none";
            document.querySelector('main').style.display="none";
            document.querySelector('.overblik').style.display="block";
            break;
    }
}


function loc(){
    var url = window.location.href.split('#');
    return url[1];
}


/* locationchange */
history.pushState = ( f => function pushState(){
    var ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
})(history.pushState);

history.replaceState = ( f => function replaceState(){
    var ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
})(history.replaceState);

window.addEventListener('popstate',()=>{
    window.dispatchEvent(new Event('locationchange'))
});





