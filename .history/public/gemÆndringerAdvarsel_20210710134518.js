let ugemte;


window.addEventListener('beforeunload', (event) => {
  if (formChanged) {
    event.returnValue = 'You have unfinished changes!';
  }
});