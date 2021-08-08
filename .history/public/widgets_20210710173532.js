



let timers= {};




// async function googlekalender() {
//     formatGoogleCalendar.init({
//        calendarUrl: 'https://www.googleapis.com/calendar/v3/calendars/moltrupgaest@gmail.com/events?key=AIzaSyB2SMWXop-DRTBRek1TMEoCHxPYaufgJeg',
//        past: false,
//        upcoming: true,
//        sameDayTimes: true,
//        dayNames: false,
//        upcomingTopN: 5,
//        recurringEvents: true, 
//        itemsTagName: 'li',
//        upcomingSelector: '#events-upcoming',
//        upcomingHeading: '<h2>Upcoming events</h2>',
//        format: ['*date*', ': ', '*summary*'],
//        timeMin: new Date().toISOString(),
//    });
//    return "succes"
//   }

//   googlekalender().then(
//     setTimeout(() => {
//         $('.date').each(function(index){
              
//             console.log(this.innerText.split(' ').pop().split(',')[0]);
            
//             });
//     }, 500)
//   );

   var wsUri = "ws://assets.mikzel.dk:8080/";
      var output;
		
      function testWebSocket() {
         websocket = new WebSocket(wsUri);
			
         websocket.onopen = function(evt) {
            websocket.send('Hej');
         };
		
         websocket.onmessage = function(evt) {
            console.log(evt);
         };
		
         websocket.onerror = function(evt) {
            console.log(evt);
         };
      }

//SRC'

function importervejrsrc() {!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');}
function feednami() {!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([,function(e,n){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}var l,a;l=function(){function e(n,t,r,i){o(this,e),this.client=n,this.url=t,this.options=r||{},this.callback=i}return i(e,[{key:"run",value:function(){var e=this;if(!this.callback)return"fetch"in window?this.send().then(function(e){if(e.error){var n=new Error(e.error.message);return n.code=e.error.code,Promise.reject(n)}return e.feed}):new Promise(function(n,t){e.send(function(e){if(e.error){var o=new Error(e.error.message);o.code=e.error.code,t(o)}else n(e.feed)})});this.send(this.callback)}},{key:"send",value:function(e){var n=window.feednamiEndpoint||"https://api.sekandocdn.net",t="".concat(n,"/api/v1.1"),o=this.url,r=this.options,i="url="+encodeURIComponent(o);this.client.publicApiKey&&(i+="&public_api_key="+this.client.publicApiKey),r.format&&(i+="&include_xml_document&format="+r.format),r.includeXml&&(i+="&include_xml_document");var l=t+"/feeds/load?"+i;if("fetch"in window)return fetch(l).then(function(e){return e.json()}).then(function(n){return e&&e(n),n});if(window.XDomainRequest){var a=document.createElement("script"),u="jsonp_callback_"+(new Date).getTime()+"_"+Math.round(1e6*Math.random());l+="&jsonp_callback="+u,window[u]=function(n){e(n),document.body.removeChild(a),window[u]=null;try{delete window[u]}catch(e){}},a.src=l,document.body.appendChild(a)}else{var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&e(JSON.parse(c.responseText))},c.open("GET",l),c.send()}}}]),e}(),a=function(){function e(){o(this,e),this.promisePolyfillCallbacks=[],this.promiseLoaded="Promise"in window}return i(e,[{key:"loadPolyfills",value:function(e){if(this.promiseLoaded)e();else if(this.promisePolyfillCallbacks.push(e),!this.polyfillScriptsAdded){this.polyfillScriptsAdded=!0;var n=document.createElement("script");n.src="https://feednami-static.storage.googleapis.com/js/v1.1/promise.js",document.head.appendChild(n)}}},{key:"loadPromiseCallback",value:function(){this.promiseLoaded=!0;var e=!0,n=!1,t=void 0;try{for(var o,r=this.promisePolyfillCallbacks[Symbol.iterator]();!(e=(o=r.next()).done);e=!0){var i=o.value;console.log(i),i()}}catch(e){n=!0,t=e}finally{try{e||null==r.return||r.return()}finally{if(n)throw t}}}},{key:"load",value:function(e,n,o){return"object"==t(e)?this.load(n.url,n,o):"function"==typeof n?this.load(e,{},n):new l(this,e,n,o).run()}},{key:"loadGoogleFormat",value:function(e,n){return window.feednami.load(e,{format:"google",includeXml:!0},n)}},{key:"setPublicApiKey",value:function(e){this.publicApiKey=e}}]),e}(),window.feednami=new a}]); }



//WIDGETS:

function tekstboks(data) {
    $('main').append(`
    <div class="tekstboks"  style="color: ${data.farve || 'white'}; font-size: ${data.størrelse || '2em'}; grid-area: ${data.start}; text-align:${data.align || 'left'}; grid-column-end: ${data.sluty}; grid-row-end: ${data.slutx};">
    <h1>${data.overskrift}</h1>
    <p>${data.tekst}</p>
</div>
    `);
}

function vejr(data){
    switch (data.vistype) {
        case 'vejrpt':
            $('main').append(`
            <div class="ptvejr" id="${data.id}" style= "grid-area: ${data.start};grid-column-end: ${data.sluty}; grid-row-end: ${data.slutx};">
            <a class="weatherwidget-io" href="https://forecast7.com/da/56d208d77/vildbjerg/" data-mode="Current" data-theme="original" data-basecolor="${data.BG || 'rgba(31, 86, 124, 0)'}" data-textcolor="${data.farve || '#ffffff'}" data-cloudcolor="${data.farve || '#ffffff'}">Vildbjerg, Denmark</a>
            </div>`);
            importervejrsrc();
            break;

        case 'vejrudsigt':
            $('main').append(`
            <div class="vejrudsigt" id="${data.id}" style= "grid-area: ${data.start}; grid-column-end: ${data.sluty}; grid-row-end: ${data.slutx};">
            <a class="weatherwidget-io" href="https://forecast7.com/da/56d208d77/vildbjerg/" data-label_1="VILDBJERG" data-theme="original" data-basecolor="${data.BG || 'rgba(31, 86, 124, 0)'}" data-textcolor="${data.farve || '#ffffff'}" data-cloudcolor="${data.farve || '#ffffff'}" >VILDBJERG</a>
        </div>
            `);
            importervejrsrc();
            break;
    
        default:
            return alert('Du har ikke valgt hvilken type vejrudsigten skal vises i!');     
    }
}



function aktiviteter(data) {
    
    $.getJSON( `https://www.googleapis.com/calendar/v3/calendars/moltrupgaest@gmail.com/events?key=AIzaSyB2SMWXop-DRTBRek1TMEoCHxPYaufgJeg&timeZone=GMT+1&timeMin=${new Date().toISOString()}`, function( data ) {
    
    
        for (let index = 0; index < data.items.length; index++) {
            
          console.log(data.items[index].summary+'  =>  '+data.items[index].end.dateTime) 
        }
      
      
        });
    }
    


function nedtælling(data) {



$(`${data.parent||'main'}`).append(`  

<div class="nedtælling" id='${data.id}' style="color: ${data.farve || 'white'} !important; font-size: ${data.størrelse || '2em'}; grid-area: ${data.start}; grid-column-end: ${data.sluty}; grid-row-end: ${data.slutx}; grid-column-end: ${data.sluty}; grid-row-end:${data.slutx};">
<p style="color: ${data.farve || 'white'} !important; font-size: ${data.størrelse+'px' || '1.2rem'}; font-weight: ${data.skrifttype || 'regular'};" class='nedtæloverskrift'>${data.tekst || ''}</p>
<p style="color: ${data.farve || 'white'} !important; font-size: ${data.størrelse+'px'|| '1rem'};"  class='nedtælud'></p>
</div>`);



var countDownDate = new Date(`${data.dato} ${data.tid}`).getTime();
timers[data.id] = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
var count = [];

if (data.dage != false) {
    count.push(days+'d');
}

if (data.timer != false) {
    count.push(hours+'t');
}

if (data.minutter != false) {
    count.push(minutes+'m');
}

if (data.sekunder != false) {
    count.push(seconds+'s');
}

var viscount = count.toString().replace(/,/g, ' ');
$(`#${data.id} > .nedtælud`).text(viscount);


  if (days<=0 && hours<=0 && minutes<=0 && seconds<=0) {

    switch (data.efter) {
        case 'sluk':
            $(`#${data.id} *`).css('display', 'none');
            break;
        case 'frys':
            $(`#${data.id} .nedtælud`).text('0d 0t 0m 0s');
            break;
    
        default:
            $(`#${data.id} *`).css('display', 'none');
            $(`#${data.id}`).append(`<p style='color: ${data.farve}'>${data.efter}</p>`);
            break;
    }
    clearInterval(timers[data.id]);
//FÆRDIG
  }
}, 1000); 
}






feednami();

function nyheder(data) {





//Alle kategorier: https://www.dr.dk/nyheder/dr-nyheder-som-rss-feed
var feedurl = 'https://www.dr.dk/nyheder/service/feeds/'+data.kategori;

    feednami.load(feedurl)
    .then(feed => {


        $(data.parent || 'main').append(`
<div class="nyheder" id="${data.id}" style="color: ${data.farve || 'white'};  grid-area: ${data.start}; grid-column-end: ${data.sluty}; grid-row-end:${data.slutx};">
<p class="nyhed-kategori" style="font-size: ${data.størrelse+'px'|| '1.4em'}; color: ${data.farve || 'white'}">${feed.meta.title}</p>
<ul>

</ul>
</div>
`);





        let entry = feed.entries;
      console.log(feed);
      var i;
      for(i = 0; i < data.antal; i++){
        $(`#${data.id} *`).css({color: data.farve})
          $(`#${data.id} > ul`)
          .append(`
          <li class="nyheder-li-border">
          <p id="autoStr" class="nyhed-overskrift" style="font-size: ${data.størrelse+'px' || '1em'}; color: ${data.farve}">${entry[i].title}</p>
          <p id="autoStr" class="nyhed-beskrivelse" style="font-size: ${data.størrelse+'px' || '1em'}; color: ${data.farve}">${entry[i].description}</p>
      </li>
          `);
       
         
      }
      $(`#${data.id}`)
      .append(`
      <p class="info">Fra dr.dk</p>
          `);
    });
}





async function dagensvagt(data) {


     

    let sted = data.bygning;
    let idagRaw = new Date();
    let idag = (idagRaw.toISOString()).split('T')[0];
    let imorgen = new Date(idagRaw);
    imorgen.setDate((imorgen.getDate()+1));
    imorgen.setHours(9, 30);
    imorgen = imorgen.toISOString();
    let stillinger = data.stillinger.split(',');
console.log(imorgen);
    $(`${data.parent||'main'}`).append(`
    <div class="dagens-vagter"  id="${data.id}"  style="padding: 5px; font-size: ${data.størrelse+'px' || '1em'}; color: ${data.farve || 'white'} !important; grid-area: ${data.start}; grid-column-end: ${data.sluty}; grid-row-end:${data.slutx};"></div>`)

    fetch(`https://id.planday.com/connect/token`, {
      headers: { 'Content-Type':'application/x-www-form-urlencoded'},
      body: 'client_id=03f10bae-0029-4d34-9233-de8173b32652&grant_type=refresh_token&refresh_token=oCg5AjcuiEiPIksWAhCXHA',
      method: 'post',
    
    })
    .catch(err => console.log(err))
    .then(res => res.json()) .catch(err => console.log(err))
    .then(json => {
    
      const accessToken = json.access_token;
     
      fetch(`https://openapi.planday.com/scheduling/v1/shifts?from=${idag}&to=${idag}&limit=200`, {
        headers: { 'X-ClientId':'03f10bae-0029-4d34-9233-de8173b32652', 
        'Authorization':`Bearer ${accessToken}`},
        method: 'get',
    })
    .then(res => res.json())
    .then(json => {
  
      json.data.forEach(element => {

        var posStr = element.positionId.toString() || '';
if (stillinger.includes(posStr)) {
    let beskrivelse='';
    console.log(element.employeeId);
    let id = element.employeeId;
     let fratid = element.startDateTime.split('T')[1];
     let tiltid = element.endDateTime.split('T')[1];
     if(data.vagtTid){beskrivelse = `${fratid}-${tiltid}`}
    let status = element.status;
    let shifttype = element.shiftTypeId;


    await fetch(`https://openapi.planday.com/hr/v1/employees/${element.employeeId}`, {
      headers: { 'X-ClientId':'03f10bae-0029-4d34-9233-de8173b32652', 
      'Authorization':`Bearer ${accessToken}`},
      method: 'get',
  })
  .then(res => res.json())
  .then(json => {



       await $('.dagens-vagter').append(`
        <div>
        <p style=" color: ${data.farve || 'white'}">${json.data.firstName} ${json.data.lastName}</p>
        <p style=" color: ${data.farve || 'white'}">${beskrivelse}</p>
    </div>  `)

    

    
  }) 
}

        });
        $(`#${data.id} div`).css('border-bottom',`solid 2px green`);         
            });
           
    
                        })
    
                       
}







// function ptvejr(data){
// document.querySelector('body').append(``)
// }







