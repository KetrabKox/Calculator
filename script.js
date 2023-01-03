const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let values=[];
let connectValues;

function changeSign(v){
    if(v[0]==="-"){
        v.shift();
    }else{
        v.unshift("-");
    }
    connectValues=v.join("");
    screen.textContent=connectValues;
}

function calc(button) {
    const value = button.textContent;
    if (value === "C"){
        values = [];
        connectValues="0";
        screen.textContent="0";
    }else if(value === "="){
        screen.textContent=eval(connectValues);
        values=[eval(connectValues)];
    }else if(value === "+/-"){
        if(values.length===0){
            screen.textContent="0";
        }else{
        changeSign(values);}
    }else if(value === "%"){
        if(values.length===0){
            screen.textContent="0";
        }else{
            connectValues=values.join("");
            connectValues=eval(connectValues)/100;
            screen.textContent=eval(connectValues);
            values=[eval(connectValues)];
        }
    }else if(value === "×"){
        if(values.length===0){
            screen.textContent="0";
        }else{values.push("*");
            connectValues=values.join("");
            screen.textContent=connectValues;}
    }else if(value === "÷"){
        if(values.length===0){
            screen.textContent="0";}
        else{values.push("/");
            connectValues=values.join("");
            screen.textContent=connectValues;}
    }else if(value === "+"){
        if(values.length===0){
            screen.textContent="0";}
        else{values.push("+");
            connectValues=values.join("");
            screen.textContent=connectValues;}
    }else if(value === "-"){
        if(values.length===0){
            screen.textContent="0";}
        else{values.push("-");
            connectValues=values.join("");
            screen.textContent=connectValues;}
    }else if(value === "."){
        if(values.length===0){
            screen.textContent="0";}
        else{values.push(".");
            connectValues=values.join("");
            screen.textContent=connectValues;}
    }else{
        values.push(value);
        connectValues=values.join("");
        screen.textContent=connectValues;
    }
}


buttons.forEach(button => {button.addEventListener("click", () => calc(button))});