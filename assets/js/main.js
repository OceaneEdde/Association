// Changement de l'année dynamique
const currentYearElmt = document.getElementById("current_year");
currentYearElmt.textContent = new Date().getFullYear();

$(document).ready(function () {
    if (!$.browser.webkit) {
        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
    }
});