$(function () {
    var elJavaList = document.getElementById('java-list');
    var el = document.getElementById('content');
    var text = new XMLHttpRequest();

    text.onreadystatechange = function () {
        el.innerHTML = text.responseText;
    }

    function addText(e) {
        switch (e.target.id.toString()) {
            case 'bvh':
                text.open('GET', 'descriptions/bvh.txt', false);
                break;
            case 'norsk':
                text.open('GET', 'descriptions/norskmemo.txt', false);
                break;
            case 'pagescheck':
                text.open('GET', 'descriptions/pagescheck.txt', false);
                break;
            case 'arkanoid':
                text.open('GET', 'descriptions/arkanoid.txt', false);
                break;
        }
        text.send();
        text.abort();
    }

    elJavaList.addEventListener('click', function (e) {
        addText(e)
    },false);

}());