let btn = document.querySelector("#button1");
let btn2 = document.querySelector("#button2")

function msg(e){

    console.log(e);

}

btn.addEventListener("click", msg);

btn2.addEventListener("click", function(event) {

    console.log(event);
    
})