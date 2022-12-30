let btn = document.querySelector("#button1")
let btn2 = document.querySelector("#button2")

btn.addEventListener("mousedown", function() {

    console.log("Apertou o botao");

});

btn.addEventListener("mouseup", function() {

    console.log("Soltou o botao");

});

btn2.addEventListener("dblclick", function() {

    console.log("Clicou duas vezes")

});

btn2.addEventListener("contextmenu", function(e) {

    e.preventDefault();
    console.log("Clicou com botão direito")

})


