let turn = 1;
let x_score = 0;
let o_score = 0;

let alist = Object.entries(document.getElementsByTagName("td")).map((ele) => { return ele[1] });

function checkwin() {
    if (alist[0].state === alist[1].state && alist[0].state === alist[2].state && alist[0].state !== undefined)
        return alist[0].state
    if (alist[3].state === alist[4].state && alist[3].state === alist[5].state && alist[3].state !== undefined)
        return alist[3].state
    if (alist[6].state === alist[7].state && alist[6].state === alist[8].state && alist[6].state !== undefined)
        return alist[6].state

    if (alist[0].state === alist[3].state && alist[0].state === alist[6].state && alist[0].state !== undefined)
        return alist[0].state
    if (alist[1].state === alist[4].state && alist[1].state === alist[7].state && alist[1].state !== undefined)
        return alist[1].state
    if (alist[2].state === alist[5].state && alist[2].state === alist[8].state && alist[2].state !== undefined)
        return alist[2].state

    if (alist[0].state === alist[4].state && alist[0].state === alist[8].state && alist[0].state !== undefined)
        return alist[0].state
    if (alist[6].state === alist[4].state && alist[6].state === alist[2].state && alist[6].state !== undefined)
        return alist[6].state
}

function clearBoard() {
    alist.forEach((ele) => {
        ele.innerHTML = "";
        ele.state = undefined;
    })
}

document.getElementById("clearButton").onclick = (ele) => {
    clearBoard()
}

function checkGameState() {
    let gameState = checkwin();
    console.log(gameState);

    document.getElementById("turn").innerHTML = "Player turn: " + ((turn == -1) ? "x" : "o");
    // clear after win
    if (Boolean(gameState)) {
        gameState === 1 ? x_score++ : o_score++;
        document.getElementById("x_score").innerHTML = "X: " + x_score;
        document.getElementById("o_score").innerHTML = "O: " + o_score;
        clearBoard()
    }
}

alist.forEach((ele) => {
    ele.onclick = (e) => {
        if (typeof e.target.state !== "number") {
            e.target.state = turn;
            e.target.innerHTML = e.target.state == 1 ? "x" : "o";
            checkGameState();
            turn *= -1;
        }
    }
})
