/* Script to show confirmation message before closing browser */
(function (e) {
    window.addEventListener('beforeunload', function (e) {
        var confirmationMessage = 'Czy na pewno chcesz opuścić stronę?';

        (e || window.event).returnValue = confirmationMessage; //Gecko + IE
        return confirmationMessage;                            //Webkit, Safari, Chrome
    }, false);
}());