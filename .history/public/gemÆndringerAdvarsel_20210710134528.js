let ugemte = false;


window.addEventListener('beforeunload', (event) => {
  if (ugemte) {
    event.returnValue = 'You have unfinished changes!';
  }
});