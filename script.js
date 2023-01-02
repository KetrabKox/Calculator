const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let values=[];
let connectValues

function calc(button) {
    const value = button.textContent;
    if (value === "C"){
        values = [];
        screen.textContent="0";
    } else if(value === "="){
        screen.textContent=eval(connectValues);
    } else{
        values.push(value);
        connectValues=values.join("");
        screen.textContent=connectValues;
    }

}

buttons.forEach(button => {button.addEventListener("click", () => calc(button))});