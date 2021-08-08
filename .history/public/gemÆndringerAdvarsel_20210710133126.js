



window.addEventListener("onbeforeunload", advarselpopup);
    
    
    
    
    function advarselpopup(){
        console.log('Test');
        return 'Er du sikker på, du vil forlade siden?'
        + 'Hvis du har lavet ugemte ændringer, vil de gå tabt!';
      };
    
 