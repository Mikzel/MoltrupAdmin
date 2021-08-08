

  async()=>{

    const  advarsel =  window.onbeforeunload =  await function(){
        return 'Er du sikker på, du vil forlade siden?'
        + 'Hvis du har lavet ugemte ændringer, vil de gå tabt!';
      };
    
      await advarsel;
  }