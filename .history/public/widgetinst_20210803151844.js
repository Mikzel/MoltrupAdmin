

function instFooter(widget) {
    $('#instCon').append(`
    
    <section class="footer">
    <input type="button" onclick="preview('${widget}')" value="Forhåndsvisning" id="previewKnap">
    <input onclick="gem('${widget}')" type="button" value="Gem" id="gemKnap">
    
    </section>
    
    `)
}

let params;
function widgetInst(data) {  

    ugemte = true;

    const loaderSlider = new Promise((resolve, reject) => {
        $('.popbilledecon').attr('class', 'widgetIns');

        $('.widgetIns').append(`
        <div id="slideLinje" title="Træk linjen mod højre eller venstre, for at se forhåndsvisningen i forskellige størrelser."></div>
        <div id="instGrid">
       
        </div>
        
        `);
    
         params = new URLSearchParams(window.location.search);
    

        resolve('Success!');
      });



 function wigdetInstLayout(data) {
    
    var center = '';

    if(data.center){center='center'}

    return `

    <div id="previewCon"> 
    <h2 class="forhåndsvisningOverskrift">Forhåndsvisning</h2> 
        
        
        <div id="widgetPreviewCon" class="${center}"> 
        
        
        </div>

    </div>
    
<div id="instCon">
<h2 class="">Indstillinger</h2> 

${data.instCon}


    </div>


    `
    
 }

switch (params.get('widget')) {
       
    // <div id="instCon" ></div>
    
    case 'nedtælling': 
  
    //   
    $('#instGrid').append(wigdetInstLayout({instCon: `
    <div class="samling">
    <input id="tekst" class="inst" data-skal="true"  placeholder="Skriv en overskrift til nedtællingen.">
    <input id="farve" class="inst" type="color" value="#ffffff" title="Vælg farven som tekten (nedtællingen og overskriften) skal have. standard er hvid.">
    <input id="størrelse" data-frivillig=true value="" type="number" class="inst"  title="Lad feltet stå tomt, for auto."  placeholder="skrift-størrelse i pixels. Lad feltet stå tomt, for auto">
    <input id="dato" class="inst" type="date"  title="Vælg datoen, nedtællingen skal tælle ned til." data-skal="true" placeholder="Vælg dato">
    <input id="tid" class="inst"  data-skal="true" title="Vælg klokkeslettet, af overstående dato, som nedtællingen skal tælle ned til. Klik på uret til højre, for valgmuligheder. "  type="time">
    </div>


        <div id="visDTMS">
        <h3>Vælg hvilke værdier, der skal vises</h3>
        <label>Dage</label>
        <input id="dage" data-frivillig=true class="inst"  type="checkbox"  checked="true"> 

        <label>Timer</label>
        <input id="timer" data-frivillig=true class="inst"  type="checkbox" checked="true">
   
        <label>Minutter</label>
        <input id="minutter" data-frivillig=true class="inst"  type="checkbox" checked="true">

        <label>Sekunder</label>
        <input id="sekunder" data-frivillig=true class="inst"  type="checkbox" checked="true">
        </div>
        

            <div id="efter">
            <h3>Efter nedtællingen er udløbet</h3>
            <label for="sluk" >Skjul nedtællingen</label>
            <input id="sluk" type="radio" name="efterOPT" checked="true">
            <label for="frys">Frys nedtællingen</label>
            <input id="frys" type="radio" name="efterOPT">
            <label for="efterTekst">Vis en besked</label>
            <input id="efterTekst" type="radio" name="efterOPT">
            </div>

            <textarea id="efterTekstBoks"  placeholder="Skriv beskeden her."></textarea>
    `, center: true}));
  


   

    break;
    
    case 'nyheder':
 //class="inst"   
        $('#instGrid').append(wigdetInstLayout({instCon: `
        <div id="nyhedskategorier">
        <h3>Vælg nyhedskategori</h3>
        <label for="alle_nyheder">Alle nyheder</label>
        <input id="alle_nyheder" type="radio" name="nyhedskategorier" checked=true data-path="allenyheder">

        <label for="indland">Indland</label>
        <input id="indland" type="radio" name="nyhedskategorier" data-path="indland">

        <label for="udland">Udland</label>
        <input id="udland" type="radio" name="nyhedskategorier" data-path="udland">

        <label for="penge">Penge</label>
        <input id="penge" type="radio" name="nyhedskategorier" data-path="penge">

        <label for="politik">Politik</label>
        <input id="politik" type="radio" name="nyhedskategorier" data-path="politik">

        <label for="kultur">Kultur</label>
        <input id="kultur" type="radio" name="nyhedskategorier" data-path="kultur">

        <label for="lev_nu">Lev nu</label>
        <input id="lev_nu" type="radio" name="nyhedskategorier" data-path="levnu">

        <label for="viden">Viden</label>
        <input id="viden" type="radio" name="nyhedskategorier" data-path="viden">

        <label for="sporten">Sporten</label>
        <input id="sporten" type="radio" name="nyhedskategorier" data-path="sporten">

        <label for="vejret">Vejret</label>
        <input id="vejret" type="radio" name="nyhedskategorier" data-path="vejret">

        <label for="ligetil">Ligetil</label>
        <input id="ligetil" type="radio" name="nyhedskategorier" data-path="ligetil">

        <label for="DR Midt-_og_Vestjylland">DR Midt- og Vestjylland</label>
        <input id="DR Midt-_og_Vestjylland" type="radio" name="nyhedskategorier" data-path="regionale/vest/">
        <p class="info">Alle artikler er hentet fra dr.dk</p>
           </div>

         


        <div class="samling" id="nyhedVisningInst">
        <h3>Visning</h3>
  
        <input type="number" placeholder="Antal nyheder af gangen (Max 20)" min="1" max="20" class="inst" id="antal">

        <input id="farve" class="inst" type="color" value="#ffffff" title="Vælg farven som tekten skal have. standard er hvid.">

        <input id="størrelse" value="" type="number" class="inst" data-frivillig=true  title="Lad feltet stå tomt, for auto."  placeholder="skrift-størrelse i pixels. Lad feltet stå tomt, for auto">
 
 
    
           </div>

        `}));

   $('#antal').on('input', ()=>{ $('#antal').val(parseFloat($('#antal').val())); if($('#antal').val() > 20){$('#antal').val(20)} });

        
    break;
    
    case 'dagens-vagter':



        $('#instGrid').append(wigdetInstLayout({instCon:`
        <div class="samling" id="stillinger">
            <h3>Vis vagter fra (scroll for at se flere)</h3>
            <div id="plandayPosList">
            
            </div>
        </div>

        <div class="samling" id="vagtVisning">
            <h3>Visning</h3>
            <label for="vagtTid">Klokkeslet</label>
            <input type="checkbox" class="inst" id="vagtTid">
            <input id="farve" class="inst" type="color" value="#ffffff" title="Vælg farven som tekten skal have. standard er hvid.">
            <input id="størrelse" value="" type="number" class="inst" data-frivillig=true  title="Lad feltet stå tomt, for auto."  placeholder="skrift-størrelse i pixels. Lad feltet stå tomt, for auto">
        </div>
        `}));

function loadPositionsListe() {
    
    fetch(`https://id.planday.com/connect/token`, {
        headers: { 'Content-Type':'application/x-www-form-urlencoded'},
        body: 'client_id=03f10bae-0029-4d34-9233-de8173b32652&grant_type=refresh_token&refresh_token=oCg5AjcuiEiPIksWAhCXHA',
        method: 'post',
      
      })
      .catch(err => console.log(err))
      .then(res => res.json()) .catch(err => console.log(err))
      .then(json => {

            fetch(`https://openapi.planday.com/scheduling/v1/positions`, {
                headers: { 'X-ClientId':'03f10bae-0029-4d34-9233-de8173b32652', 
                'Authorization':`Bearer ${json.access_token}`},
                method: 'get',
            })
            .then(res => res.json())
            .then(json => {json.data.forEach((pos)=>{$('#plandayPosList').append(`
            <label for="${pos.id}">${pos.name}</label>
            <input type="checkbox" id="${pos.id}">
            `); $( "#plandayPosList input[type='checkbox']" ).checkboxradio({icon: false});})});
        
      });
}
loadPositionsListe();

    break;
    
    case 'vejr':

        $('#instGrid').append(wigdetInstLayout({instCon:`
        <div class="samling" id="vejrVisning">
            <div id="vejrVisType">
                <label for="PT">PT</label>
                <input id="PT" type="radio" data-vejrVisType="vejrpt" checked=true name="vejrVisType">

                <label for="ugeOversigt">Uge oversigt</label>
                <input id="ugeOversigt" type="radio" data-vejrVisType="vejrudsigt" name="vejrVisType">
            </div>

        <input id="farve" class="inst" type="color" value="#ffffff" title="Vælg farven som tekten skal have. standard er hvid.">



        </div>

        `})); 

    break;

    case 'slideshow':

        $('#instGrid').append(wigdetInstLayout({instCon:`
        
        <div class="samling" id="vælgOpretSlideCon"> 
            <h3>Vælg slideshow</h3>
            <div  id="vælgOpretSlide"> 
                <select id="slideshowsVælg">
                <option disabled selected>Vælg et eksisterende slideshow</option>
                </select>
                <a onclick="nytSlideshow()" class="link" id="nytSlideshowLink">Eller opret et nyt.</a>
            </div>
        </div>
        <p>Øsnker du at redigere i et slideshow, bedes du gå </p><a href="${location.origin}/#slideshows">til slideshow menuen ved forsiden</a>
        `}));
        db.collection('slideshows')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc)=>{
                $('#slideshowsVælg')
                .append(`<option class="slideshowsVælgOpt" id="${doc.id}">${doc.id.replaceAll('_', ' ')}</option>`);
            });
       
   
        });
        $('#slideshowsVælg').selectmenu();

    break;

    default:
            break;


    }
    $( "input[type='radio']" ).checkboxradio({icon: false});
     instFooter(params.get('widget'));
     genMiniSkab();


/* data.tekstInput.forEach(i => {
     alert(i);
 });*/


    //Slider + grid resp:
 loaderSlider.then(()=>{
    $('#slideLinje').draggable({
        drag: function( event, ui ) {
        
          var vPlads = (ui.position.left+'').split('.')[0];
          $('#instGrid').css( "grid-template-columns", `${vPlads}px auto` );
     
        
        
        },
        axis: 'x',
        scroll: false
      });

      $("#efter input:radio").change(function () {
       if ($(this).attr('id')=='efterTekst') {
           $('#efterTekstBoks').css('display', 'inline');
       }else{
        $('#efterTekstBoks').css('display', 'none');  
       }
        });
    
      
})


}






$(document).ready(function(){
    $('.popup').tooltip();
})



function tagInputs(widget) {
    let videresend = true;
    let instObj = {};

$('.inst').each(function (i, el) { 



    if(!$(el).val() && !$(el).attr('data-frivillig')){ videresend=false; alert('Du mangler at udfylde '+$(el).attr('id')+'!'); }

    let key = $(el).attr('id');
    let value = $(el).val();

    if($(el).attr('type')=='checkbox'){

        value = $(this).is(':checked');

    }

    if($(el).attr('type')=='date'){

        value = moment($(el).val()).format('YYYY-M-D');

    }





  


    instObj[key] = value;


});
if (widget=='nedtælling') {

    if ( $('#efter input[type="radio"]:checked').attr('id') == 'efterTekst') {
        instObj['efter'] = $('#efterTekstBoks').val();
    }else{
        instObj['efter'] = $('#efter input[type="radio"]:checked').attr('id');
    }
    

}

if (widget=='nyheder') {

  instObj['kategori']=$('#nyhedskategorier input[type="radio"]:checked').attr('data-path');
    

}

if (widget=='vejr') {

    instObj['vistype']=$('#vejrVisType input[type="radio"]:checked').attr('data-vejrVisType');
      
  
  }

if (widget=='dagens-vagter') {

        var pos = [];
        $("#plandayPosList input[type='checkbox']:checked").each((i,x)=>{pos.push($(x).attr('id'))});
    
        instObj['stillinger'] = pos.toString();  
 
}

if(widget=='slideshow'){
    instObj['slideshowParent'] = $('#slideshowsVælg').find(':selected').val();
}

if(videresend){return instObj;}else{throw new Error('et eller flere oblikatoriske felter står tomme!')}



/*
switch (widget) {




    case 'nedtælling':

        nedtælling({
            parent: '#widgetPreviewCon',
            tekst:$('#tekst').val(), 
            farve: $('#farve').val(), 
            størrelse:$('#størrelse').val(), 
            dato: $('#dato').val(),
            tid: $('#tid').val(), 
            dage:$('#dage').val(), 
            timer:true, 
            minutter:true, 
            sekunder:true, 
            efter:'frys'
        });
    
        
        break;

    default:
        break;
} */
 

}


function preview(widget) {

let parent = '#widgetPreviewCon';


    try {
        $(`${parent} .${widget}`).remove(); 
    } catch (error) {
        console.warn(error);
    }


console.log(widget);





   switch (widget) {
       case 'nedtælling':
        clearInterval(timers['previewNedtælling']);
        nedtælling({...tagInputs('nedtælling'),skrifttype:'bold', parent, id: 'previewNedtælling'})
        console.log(tagInputs('nedtælling'));


           break;

        case 'nyheder':
    try {
        nyheder({...tagInputs('nyheder'), parent, id: 'previewNyheder'});
    } catch (error) {
        console.error(error);
    }
            
            break;

        case 'dagens-vagter':
            dagensvagt({...tagInputs('dagens-vagter'), parent, id:'previewVagter'});
            break;

        case 'vejr': 
            var aClass = 'previewVejr';
            vejr({...tagInputs('vejr'), parent, id:'previewVejr', aClass});
            initVejrPreview(aClass);
        case 'slideshow':
            slideshow({...tagInputs('slideshow'), parent, id:'previewSlideshow'});
       default:
           break;
   } 
    
}


async function gem(widget) {
    if (confirm('Er du sikker på, at du vil offentliggøre denne widget?')) {
        let valgteGrids = [];
        let højestLavest = {};
      
       await $('.ubrugtCheck:checked').each((i,el)=>{
            valgteGrids.push($(el).attr('id').replace('check_', ''));
           
           var xy = $(el).attr('id').replace('check_', '').replace('X','').split('Y')
           højestLavest[$(el).attr('id').replace('check_', '')]=parseFloat(xy[0])+parseFloat(xy[1]);
       
        });

        console.log(maxVal(højestLavest).toString(), minVal(højestLavest).toString());

    


     await db.doc(`skærme/${skærm}/widgets/${minVal(højestLavest).toString()},${maxVal(højestLavest).toString()},${maxVal(højestLavest).toString()}`).set({
            brugt: valgteGrids.toString(), 
            ...tagInputs(widget),
            id: `${widget}_${Math.floor(1000 + Math.random() * 9000)}`,
            widget
         
        });
        
        location.reload();
        
    }
   

}




function genMiniSkab() {
    let brugteKord=[];
    var miniskabInst = JSON.parse(JSON.stringify(skabelonData));
    delete miniskabInst['grid-template-areas'];
    miniskabInst['grid-template-areas'] = '"'+skabelonData['grid-template-areas'].replaceAll(',', '" "')+'"';
    $('#instCon').append(`<div class="miniSkabParent"><h3>Vælg placering</h3><div id="miniSkab"></div></div>`);
    $('#miniSkab').css({...miniskabInst});

    brugte.forEach((i)=>{
        i.forEach((x)=>{
            $('#miniSkab').append(`<div class="miniSkabCon brugt" style="grid-area: ${x};"></div>`);
            brugteKord.push(x)
        })

    })

   arr_diff(brugteKord, skabelonData['grid-template-areas'].replaceAll(',',' ').split(' '))
   .forEach((ubrugt)=>{
    $('#miniSkab').append(`<div class="miniSkabCon ubrugt" style="grid-area: ${ubrugt};">
    
    <input type="checkbox" class="ubrugtCheck" id="check_${ubrugt}">

    </div>`);
   })
   
   
   $(`#check_${params.get('Kord')}`).attr('checked',true);

}



function maxVal(object) {
    
    return Object.keys(object).filter(x => {
        return object[x] == Math.max.apply(null, 
        Object.values(object));
  });

}
function minVal(object) {
    
    return Object.keys(object).filter(x => {
        return object[x] == Math.min.apply(null, 
        Object.values(object));
  });

}




async function nytSlideshow() {
    let navn = await prompt('Vælg et navn til slideshowet');
    let forbudteTegn = ['/','*','"',"'",'=','$','_'];
    let forbudtNavn = false;
    await forbudteTegn.forEach((tegn)=>{navn.includes(tegn)?forbudtNavn=true:''});
    if(forbudtNavn){
      if(confirm(`Navnet indeholder et eller flere forbudte tegn! \nDisse tegn er ulovlige: ${forbudteTegn.toString()}. \nKlik ok, for at prøve igen.`)){
        nytSlideshow();
      }else{return;}
    }else{ //Navnet indeholder ingen ugyldige tegn:
      navn = navn.replaceAll(' ', '_').toLowerCase();
      await db.collection('slideshows').doc(navn).get().then((docSnapshot)=>{
        if(docSnapshot.exists){
          if(confirm(`"${navn}" findes allerede! \nPrøv et andet navn.`)){nytSlideshow();
          }else{return;}
        }else{ //Navnet findes ikke allerde (opret slideshow i DB):
           (async () =>{
                await db.collection('slideshows').doc(navn).set({toggleaktiv: true, toggleovergang: true, varighed: 10});
                await alert(`${navn} blev oprettet! 🎉\nDu vil nu blive taget til slideshow manageren, hvor du kan redigere og tilpasse slideshowet.`);
                location.href=`${location.origin}/rediger/slideshows/${navn}`; 
           })();
           
        }
      });
      
    }
 }