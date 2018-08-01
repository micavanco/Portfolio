/*   Script to add current year to footer paragraph  */
(function () {
    var today = new Date();
    var year = today.getFullYear();

    var footer = document.getElementById('footer_year');
    footer.textContent = year.toString();
}());