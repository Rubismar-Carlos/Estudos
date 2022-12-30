let btn = document.querySelector("#button1");
let btn2 = document.querySelector("#button2");
let p = document.querySelector("p");
let a = document.querySelector("a");

function msg(e){

    console.log("Cliclou em mim!");
    e.stopPropagation();

}

btn.addEventListener("click", msg);

btn2.addEventListener("click", function(event) {

    console.log(event);
    
})

p.addEventListener("click", function() {

    console.log("Clicou no paragrafo");

})

a.addEventListener("click", function(e) {

    e.preventDefault();

    console.log("Não vai mudar de link")

});