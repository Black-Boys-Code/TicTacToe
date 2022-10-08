let turn = 1;
let x_score = 0;
let o_score = 0;
let isGameOver = false;

let alist = Object.entries(document.getElementsByTagName("td")).map((ele) => { return ele[1] });

function highLightWin(p1, p2, p3) {
    p1.style.background = "lightgray";
    p2.style.background = "lightgray";
    p3.style.background = "lightgray";
}

function checkwin() {
    if (alist[0].state === alist[1].state && alist[0].state === alist[2].state && alist[0].state !== undefined) {
        highLightWin(alist[0], alist[1], alist[2]);
        return alist[0].state
    }
    if (alist[3].state === alist[4].state && alist[3].state === alist[5].state && alist[3].state !== undefined) {
        highLightWin(alist[3], alist[4], alist[5]);
        return alist[0].state
    }
    if (alist[6].state === alist[7].state && alist[6].state === alist[8].state && alist[6].state !== undefined) {
        highLightWin(alist[6], alist[7], alist[8]);
        return alist[3].state
    }

    if (alist[0].state === alist[3].state && alist[0].state === alist[6].state && alist[0].state !== undefined) {
        highLightWin(alist[0], alist[3], alist[6]);
        return alist[0].state
    }
    if (alist[1].state === alist[4].state && alist[1].state === alist[7].state && alist[1].state !== undefined) {
        highLightWin(alist[1], alist[4], alist[7]);
        return alist[1].state
    }
    if (alist[2].state === alist[5].state && alist[2].state === alist[8].state && alist[2].state !== undefined) {
        highLightWin(alist[2], alist[5], alist[8]);
        return alist[2].state
    }

    if (alist[0].state === alist[4].state && alist[0].state === alist[8].state && alist[0].state !== undefined) {
        highLightWin(alist[0], alist[4], alist[8]);
        return alist[0].state
    }
    if (alist[6].state === alist[4].state && alist[6].state === alist[2].state && alist[6].state !== undefined) {
        highLightWin(alist[6], alist[4], alist[2]);
        return alist[6].state
    }
}

function clearBoard() {
    alist.forEach((ele) => {
        ele.innerHTML = "";
        ele.state = undefined;
        ele.style.background = "white";
    })
    isGameOver = false;
}

document.getElementById("clearButton").onclick = (ele) => {
    clearBoard()
}

function checkGameState() {
    let gameState = checkwin();
    console.log(gameState);

    document.getElementById("turn").innerHTML = "Player turn: " + ((turn == -1) ? "X" : "O");
    // clear after win
    if (Boolean(gameState)) {
        gameState === 1 ? x_score++ : o_score++;
        document.getElementById("x_score").innerHTML = "X: " + x_score;
        document.getElementById("o_score").innerHTML = "O: " + o_score;
        isGameOver = true;
    }
}

alist.forEach((ele) => {
    ele.onclick = (e) => {
        if (typeof e.target.state !== "number" && !isGameOver) {
            e.target.state = turn;
            e.target.innerHTML = e.target.state == 1 ? "X" : "O";
            checkGameState();
            turn *= -1;
        }
    }
})
