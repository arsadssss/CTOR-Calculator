let btn = document.querySelector("#submit");
let txt = document.querySelector("#text");


btn.addEventListener("click", ()=> {
    let click = document.querySelector("#clicked");
    let open = document.querySelector("#Opened");
    let clicked = click.value;
    let opened = open.value;
    let totalCTOR = (clicked*100)/opened;
    let total = totalCTOR.toFixed(2);
    txt.innerHTML =`Total CTOR : ${total}%`;
    if(opened === "" && clicked == ""){
        txt.innerHTML = "Please enter values";
    }else if(!opened == "" && clicked == ""){
        txt.innerHTML = "Please enter Clicked value";
    }else if(opened == "" && !clicked == ""){
        txt.innerHTML = "Please enter Opened value";
    }else{
        txt.innerHTML =`Total CTOR : ${total}%`;
    }
});