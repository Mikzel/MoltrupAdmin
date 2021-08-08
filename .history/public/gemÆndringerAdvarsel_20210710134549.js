let ugemte = false;


window.addEventListener('beforeunload', (event) => {
  if (ugemte) {
    event.returnValue = 'Er du sikker på, du vil forlade siden?'
    + 'Hvis du har lavet ugemte ændringer, vil de gå tabt!';
  }
});