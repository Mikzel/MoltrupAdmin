window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = 'Er du sikker på, du vil forlade siden?'
                            + 'Hvis du har lavet ugemte ændringer, vil de gå tabt!';

    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
});