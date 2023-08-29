const dark = document.querySelector("#dark");

dark.addEventListener("click", function(e){
    document.body.style.backgroundColor = "Black"
    document.body.style.color = "lightgray"
})

const light = document.querySelector("#light");

light.addEventListener("click", function(e){
    document.body.style.backgroundColor = "White"
    document.body.style.color = "Black"
})

const basic = document.querySelector("#basic");

basic.addEventListener("click", function(e){
    document.body.style.backgroundColor = ""
    document.body.style.color = "Black"
})

