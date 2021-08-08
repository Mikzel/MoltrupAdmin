


window.addEventListener("beforeunload", advarselPopup);

  function advarselPopup(){
    return 'Er du sikker på, du vil forlade siden?'
    + 'Hvis du har lavet ugemte ændringer, vil de gå tabt!';
  };


