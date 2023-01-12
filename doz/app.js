'use strict';
let box = document.querySelectorAll(".box");
let container = document.querySelector(".container");
let rowOne = document.querySelector(".rowOne");
let rowTwo = document.querySelector(".rowTwo");
let rowThree = document.querySelector(".rowThree");
// player1 = true & player2 = false
let isWhichUser = true;
container.addEventListener("click", function (e) {
    if (e.target.innerHTML == '?') {
        if (isWhichUser) {
            e.target.innerHTML = "X";
            isWhichUser = false;
        } else {
            e.target.innerHTML = "O";
            isWhichUser = true;
        }
    }
    chekedTheBoxs();
    let is = 0;
    box.forEach(function (e) {
        if (e.innerHTML === '?') {
            is++;
        }
    })
    if (is == 0) {
        alert("GAME OVER");
        window.location.reload();
    }
});
function chekedTheBoxs() {
    let row1 = rowOne.children;
    let row2 = rowTwo.children;
    let row3 = rowThree.children;
    row(row1, row2, row3);
    column(row1, row2, row3);
    cross(row1, row2, row3);
}
// row
function row(row1, row2, row3) {
    // O
    row1[0].innerHTML === 'O' &&
        row1[1].innerHTML === 'O' &&
        row1[2].innerHTML === 'O'
        ? winner('O') : "";

    row2[0].innerHTML === 'O' &&
        row2[1].innerHTML === 'O' &&
        row2[2].innerHTML === 'O'
        ? winner('O') : "";

    row3[0].innerHTML === 'O' &&
        row3[1].innerHTML === 'O' &&
        row3[2].innerHTML === 'O'
        ? winner('O') : "";
    // X
    row1[0].innerHTML === 'X' &&
        row1[1].innerHTML === 'X' &&
        row1[2].innerHTML === 'X'
        ? winner('X') : "";

    row2[0].innerHTML === 'X' &&
        row2[1].innerHTML === 'X' &&
        row2[2].innerHTML === 'X'
        ? winner('X') : "";

    row3[0].innerHTML === 'X' &&
        row3[1].innerHTML === 'X' &&
        row3[2].innerHTML === 'X'
        ? winner('X') : "";
}
// column
function column(row1, row2, row3) {
    // O
    for (let a = 0; a < 3; a++) {
        row1[a].innerHTML === 'O' &&
            row2[a].innerHTML === 'O' &&
            row3[a].innerHTML === 'O' ? winner('O') : '';
    }
    // // X
    for (let a = 0; a < 3; a++) {
        row1[a].innerHTML === 'X' &&
            row2[a].innerHTML === 'X' &&
            row3[a].innerHTML === 'X' ? winner('X') : '';
    }
}
// 
function cross(row1, row2, row3) {
    // O
    row1[0].innerHTML === 'O' &&
        row2[1].innerHTML === 'O' &&
        row3[2].innerHTML === 'O' ? winner('O') : '';
    row1[2].innerHTML === 'O' &&
        row2[1].innerHTML === 'O' &&
        row3[0].innerHTML === 'O' ? winner('O') : '';
    // X
    row1[0].innerHTML === 'X' &&
        row2[1].innerHTML === 'X' &&
        row3[2].innerHTML === 'X' ? winner('X') : '';
    row1[2].innerHTML === 'X' &&
        row2[1].innerHTML === 'X' &&
        row3[0].innerHTML === 'X' ? winner('X') : '';
}
let win = document.querySelector(".winner");
function winner(whatsPlayer) {
    document.querySelector(".title").innerHTML += ' ' + whatsPlayer;
    container.style.display = "none";
    win.style.display = "block";
    let exit = document.querySelector(".exit");
    exit.addEventListener('click', function () {
        window.close();
    });
    let restart = document.querySelector(".restart");
    restart.addEventListener('click', function () {
        window.location.reload();
    });
}