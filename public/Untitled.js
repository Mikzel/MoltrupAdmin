
//Luk popup event.
function luk(data) {
    document.querySelector('.popupcon').remove();

    if (data=='hidden') {
    document.body.style.overflow="hidden";
  }else{
  	document.body.style.overflow="auto";
  }

    //Lukker popup, ved ESC.
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            luk();
        }
    };



function popup() {

    if (!document.querySelector('.popstyle')) {
        console.log('laver popstyle');
        
    var stil = document.createElement('style');
    stil.setAttribute('class', 'popstyle');
    
    stil.innerHTML = `
    .popupcon {
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: rgb(0, 0, 0, 0.5);
      z-index: 5;
      top: 0;
      display: none;
      animation: fadeIn ease 0.5s;
      -webkit-animation: fadeIn ease 0.5s;
      -moz-animation: fadeIn ease 0.5s;
      -o-animation: fadeIn ease 0.5s;
      -ms-animation: fadeIn ease 0.5s;
    }
    
    .popup {
      background-color: #6a040f;
      width: 90%;
      height: 90%;
      border-radius: 25px;
      position: relative;
      left: 0;
      right: 0;
      margin: 50px auto;
      min-height: 500px;
     
    }

    .popup>h1{
    	position: relative;
    	text-align: center;
    	transform: translateY(50px);
    	font-size: 3em;
    }
    
    .popbilledecon, .widgetIns {
      width: 90%;
      height: 77%;
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -53%);
     
     
    }
    
    .popbilledecon>img {
      max-width: 100%;
      height: 100%;
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      object-fit: contain;
    }
    
    .downloadbillede {
      text-align: center;
      background-color: #500104;
      border-radius: 20px;
      font-size: 40px;
      position: absolute;
      bottom: 10px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 500px;
      min-width: 100px;
      height: 70px;
      cursor: pointer;
      box-sizing: border-box;
    }
    
    .x {
      position: absolute;
      right: 0;
      top:0;
      margin: 10px;
      font-weight: bold;
      font-size: 30px;
      margin-right: 20px;
      cursor: pointer;
    }


@media screen and (max-height: 714px) {
  .popup>h1 {
    transform: translateY(20px);
  }
}

    `;
  

document.head.appendChild(stil);


    }

   




   if (arguments[0]=='img') {
        var con = document.createElement('DIV');
        con.setAttribute('class', 'popupcon');
        var popup = document.createElement('DIV');
        popup.setAttribute('class', 'popup');
        con.appendChild(popup);
        var x = document.createElement('P');
        x.setAttribute('class', 'x');
        x.setAttribute('onclick', 'luk()');
        popup.appendChild(x);
        x.innerText='x';
        var popbilledecon = document.createElement('DIV');
        popbilledecon.setAttribute('class', 'popbilledecon');
        popup.appendChild(popbilledecon);
        if (Object.values(arguments).indexOf('ramme') > -1) { 
          var val = Object.values(arguments).indexOf('ramme')+1;
    
          if (arguments[val]==true) {
            popbilledecon.style.border="solid #500104 4px";
          }
          }
        con.style.display='block';
        popbilledecon.innerHTML=`<img src="${arguments[1]}" draggable="false">`;
      
        document.querySelector('body').style.overflow='hidden';
        document.body.prepend(con);
        con.addEventListener("click", (evt) => {
            const flyoutElement = document.querySelector(".popup");
            let targetElement = evt.target; // clicked element
       
            do {
                if (targetElement == flyoutElement) {
                    // Klik inde for popup boks:
       
                    return;
                }
       
                targetElement = targetElement.parentNode;
            } while (targetElement);
            // Klik udenfor popup boks:
          luk();
        });



       










   } else if(arguments[0]=='titel'){
      







  
    var con = document.createElement('DIV');
    con.setAttribute('class', 'popupcon');
    var popup = document.createElement('DIV');
    popup.innerHTML=`<h1>${arguments[1]}</h1>`
    popup.setAttribute('class', 'popup');
    con.appendChild(popup);
    var x = document.createElement('P');
    x.setAttribute('class', 'x');
    x.setAttribute('onclick', 'luk()');
    popup.appendChild(x);
    x.innerText='x';
    var popbilledecon = document.createElement('DIV');
    popbilledecon.setAttribute('class', 'popbilledecon');
    popup.appendChild(popbilledecon);
    if (Object.values(arguments).indexOf('ramme') > -1) { 
      var val = Object.values(arguments).indexOf('ramme')+1;

      if (arguments[val]==true) {
        popbilledecon.style.border="solid #500104 4px";
      }
      }
    con.style.display='block';
    if (arguments[2]) { popbilledecon.innerHTML=`${arguments[2]}`; }
    document.querySelector('body').style.overflow='hidden';
    document.body.prepend(con);
    con.addEventListener("click", (evt) => {
        const flyoutElement = document.querySelector(".popup");
        let targetElement = evt.target; // clicked element
   
        do {
            if (targetElement == flyoutElement) {
                // Klik inde for popup boks:
   
                return;
            }
   
            targetElement = targetElement.parentNode;
        } while (targetElement);
        // Klik udenfor popup boks:
      luk();
    });

 

  


   }else {


        var con = document.createElement('DIV');
        con.setAttribute('class', 'popupcon');
        var popup = document.createElement('DIV');
        popup.setAttribute('class', 'popup');
        con.appendChild(popup);
        var x = document.createElement('P');
        x.setAttribute('class', 'x');
        x.setAttribute('onclick', 'luk()');
        popup.appendChild(x);
        x.innerText='x';
        var popbilledecon = document.createElement('DIV');
        popbilledecon.setAttribute('class', 'popbilledecon');
        popup.appendChild(popbilledecon);
        if (Object.values(arguments).indexOf('ramme') > -1) { 
          var val = Object.values(arguments).indexOf('ramme')+1;
    
          if (arguments[val]==true) {
            popbilledecon.style.border="solid #500104 4px";
          }
          }
        con.style.display='block';
        popbilledecon.innerHTML=`${arguments[0]}`;
      
        document.querySelector('body').style.overflow='hidden';
        document.body.prepend(con);
        con.addEventListener("click", (evt) => {
            const flyoutElement = document.querySelector(".popup");
            let targetElement = evt.target; // clicked element
       
            do {
                if (targetElement == flyoutElement) {
                    // Klik inde for popup boks:
       
                    return;
                }
       
                targetElement = targetElement.parentNode;
            } while (targetElement);
            // Klik udenfor popup boks:
          luk();
        });

   }



  
}