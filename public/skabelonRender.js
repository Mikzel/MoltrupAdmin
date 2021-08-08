
function setSkabelon(navn, værdi) { 
    $('main').css(`${navn}`, værdi);
    console.log(navn, værdi);
   }
   function GetGridElementsPosition(index){
    const colCount = $('main').css('grid-template-columns').split(' ').length;
    const rowPosition = (Math.floor(index / colCount));
    const colPosition = (index % colCount);
    return { X: colPosition , Y: rowPosition } ;
  }
  
  
  let plusIkon;
  function gennemgåSkab(X) { 
     if (X) {
        plusIkon = '<div class="plus tomPlads"><i class="fas fa-plus"></i></div>';
     }
    $.each(skabelonData, function( index, value ){
  
        if (index == 'grid-template-areas') {
          var gta = '"'+value.replaceAll(',', '" "')+'"';
          setSkabelon(index, gta);
      
      //Laver divs svarende til antal grids:
    //  $.each(gta.split(' '), ()=>{$('main').append(`<div class="widget-con">${plusIkon || ''}</div>  `)});
      
        }else{
          setSkabelon(index, value);   
        }
      
      
      });
      
   }



