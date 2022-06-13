
const playercontainer = document.querySelector("#playercon");

dragElement(playercontainer);

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.e;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.e;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}







const setplayer = (name, symbol) => {
return {name, symbol};
}


const gameboard = (() => {
    let board = ["","","","","","","","","",]
    const close = document.querySelector("#close");
    const playerbtn = document.querySelector(".setplayers");
    const square = document.querySelectorAll(".square");
    
    playerbtn.addEventListener("click", () => {
        if (playercontainer.getAttribute("style") === "display: none") {
            playercontainer.setAttribute("style", "display: grid");
            playerbtn.classList.add("active");
            console.log(playercontainer.getAttribute("style"));
        } else if (playercontainer.getAttribute("style") !== "display: none") {
            playercontainer.setAttribute("style", "display: none");
            playerbtn.classList.remove("active");
            console.log(playercontainer.getAttribute("style"));

        }

    })

    close.addEventListener("click", () => {
        if (playercontainer.getAttribute("style") !== "display: none") {
            playercontainer.setAttribute("style", "display: none");
            playerbtn.classList.remove("active");
        }

    });

    square.forEach((sq, index) => {
        sq.addEventListener("click", function (e) {
            //sq.style.backgroundColor = "red";
            sq.classList.add(game.activeplayer.symbol);
            sq.innerText = game.activeplayer.symbol;
            board[index] = game.activeplayer.symbol;
            
            sq.style.pointerEvents = "none";

            game.remainingSpots -= 1;
            
            game.checkWinner();
            console.log(e.currentTarget);

        })
    })





    return { board };
})();




const game = (() => {

    const playerone = setplayer("player 1", "x");
    const playertwo = setplayer("player 2", "o");

    let activeplayer = playerone;
    let winnerDeclared = false;
    let remainingSpots = 9;

    let winningnum = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        ];

    function checkWinner() {

    }


    return {
     activeplayer,
     checkWinner,
     remainingSpots,

    };
})();





















