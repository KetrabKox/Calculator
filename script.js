const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let values=[];
let connectValues

function changeSign(){
    if(values[0]==="-"){
        values.shift();
    }else{
        values.unshift("-");
    }
    connectValues=values.join("");
    screen.textContent=connectValues;
}

function calc(button) {
    const value = button.textContent;
    if (value === "C"){
        values = [];
        screen.textContent="0";
    } else if(value === "="){
        screen.textContent=eval(connectValues);
    }else if(value === "+/-"){
        changeSign();
    }else if(value === "%"){
        values.push("/100");
        connectValues=values.join("");
        screen.textContent=eval(connectValues);
    }else if(value === "×"){
        values.push("*");
        connectValues=values.join("");
        screen.textContent=connectValues;
    }else if(value === "÷"){
        values.push("/");
        connectValues=values.join("");
        screen.textContent=connectValues;
    }else{
        values.push(value);
        connectValues=values.join("");
        screen.textContent=connectValues;
    }

}


buttons.forEach(button => {button.addEventListener("click", () => calc(button))});