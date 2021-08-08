let ugemte;

let formChanged = false;
myForm.addEventListener('change', () => formChanged = true);
window.addEventListener('beforeunload', (event) => {
  if (formChanged) {
    event.returnValue = 'You have unfinished changes!';
  }
});