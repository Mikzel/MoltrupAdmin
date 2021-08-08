
$('main').on('click', '.widget-con', function(e){
 
    setParam('Kord',$(this).attr('id'));
    genWidgetMenu();
       
    
    });




$(document).on('click','.widget',function(e){
    luk({hidden: true});
    setParam('widget',e.target.getAttribute('id'));
    widgetPop(e.target);
  });
  


  const widgetPop = async(widget) =>{ 
  let id = widget.getAttribute('id');
    let navn = id.replaceAll('-', ' ');

  await popup('titel',navn,`
  
  
  `,{ugemte: false});

await widgetInst();


  
  hjemKnap({ParentElement:'.popup', Ikon: 'fas fa-arrow-left',Fun:true,Url: "genWidgetMenu()"}); 
  $('.hjem').on('click', (e)=>{
      luk({hidden: true, ugemte:false});
      genWidgetMenu();
  })
  
  
   }
  // widgetPop();




   function genWidgetMenu() { 
    popup('titel','Widgets',`
    <section id="widgets"></section>
    <p id="disc">Flere widgets ER på vej!</p>`);
    widgetData.forEach(el => {
      if (el.navn!='STANDARD') {
       $('#widgets').append(`
       <div id='${(el.navn).replaceAll(' ','-')}'  class="widget">
       <div class="widgetIkonCon">
       <i class="${el.ikon} widget-ikon"></i>
       <p class="widget-tekst">${el.navn}</p>
       </div>
         </div>`);
      }
    
    });
   }
  

  
