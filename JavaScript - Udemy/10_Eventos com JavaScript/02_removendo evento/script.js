let btn = document.querySelector("#button1");
let btn2 = document.querySelector("#button2")

function msg(){

    console.log("Cliclou em mim!")

}

btn.addEventListener("click", msg);

btn2.addEventListener("click", function() {

    btn.removeEventListener("click", msg);
    
})