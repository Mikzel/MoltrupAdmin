gennemgåSkab();

let widgetDB = JSON.parse(widgetData);
widgetData.forEach(doc => {
   let type = doc.data().widget;

   type({start:'X1Y1', tekst:doc.data().tekst});

});