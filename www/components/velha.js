// This is a JavaScript file

var gamer, master = null;
var gamerSelected = document.getElementById('gamer-selected');
var masterSelected = document.getElementById('master-selected');

changePlayer('X');

function chooseQuadrado(id) {
    if (master !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = gamer;
    quadrado.style.color = '#000';

    if (gamer === 'X') {
        gamer = 'O';
    } else {
        gamer = 'X';
    }

    changePlayer(gamer);
    checksMaster();
}

function changePlayer(valor) {
    gamer = valor;
    gamerSelected.innerHTML = gamer;
}

function checksMaster() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);
    
    if (checkSequence(quadrado1, quadrado2, quadrado3)) {
        changesColorQuadrado(quadrado1, quadrado2, quadrado3);
        changeMaster(quadrado1);
        return;
    }

    if (checkSequence(quadrado4, quadrado5, quadrado6)) {
        changesColorQuadrado(quadrado4, quadrado5, quadrado6);
        changeMaster(quadrado4);
        return;
    }

    if (checkSequence(quadrado7, quadrado8, quadrado9)) {
        changesColorQuadrado(quadrado7, quadrado8, quadrado9);
        changeMaster(quadrado7);
        return;
    }

    if (checkSequence(quadrado1, quadrado4, quadrado7)) {
        changesColorQuadrado(quadrado1, quadrado4, quadrado7);
        changeMaster(quadrado1);
        return;
    }

    if (checkSequence(quadrado2, quadrado5, quadrado8)) {
        changesColorQuadrado(quadrado2, quadrado5, quadrado8);
        changeMaster(quadrado2);
        return;
    }

    if (checkSequence(quadrado3, quadrado6, quadrado9)) {
        changesColorQuadrado(quadrado3, quadrado6, quadrado9);
        changeMaster(quadrado3);
        return;
    }

    if (checkSequence(quadrado1, quadrado5, quadrado9)) {
        changesColorQuadrado(quadrado1, quadrado5, quadrado9);
        changeMaster(quadrado1);
        return;
    }

    if (checkSequence(quadrado3, quadrado5, quadrado7)) {
        changesColorQuadrado(quadrado3, quadrado5, quadrado7);
        changeMaster(quadrado3);
    }
}

function changeMaster(quadrado) {
    master = quadrado.innerHTML;
    masterSelected.innerHTML = master;
}

function changesColorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#ee6df59c';
    quadrado2.style.background = '#ee6df59c';
    quadrado3.style.background = '#ee6df59c';
}

function checkSequence(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function restart() {
    master = null;
    masterSelected.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#997ff564';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    changePlayer('X');
}