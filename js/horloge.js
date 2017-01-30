var divHorloge = document.getElementById('horloge');

function refreshHorloge() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    var format = h+'h'+m+'m'+s;

    divHorloge.innerHTML = format;
}

refreshHorloge();
setInterval(refreshHorloge, 1000);