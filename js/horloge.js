var divHorloge = document.getElementById('horloge');

function refreshHorloge() {
    var now = new Date();
    var h = now.getHours();

    if (h < 10) {
        h = '0' + h;
    }

    var m = now.getMinutes();

    if (m < 10) {
        m = '0' + m;
    }

    var s = now.getSeconds();

    if (s < 10) {
        s = '0' + s;
    }

    var format = h+'h'+m+'m'+s;

    divHorloge.innerHTML = format;
}

refreshHorloge();
setInterval(refreshHorloge, 1000);