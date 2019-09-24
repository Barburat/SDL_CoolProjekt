function init(){
    console.log("hello");
    document.getElementById("button").addEventListener("click", clicked1)
    document.getElementById("button").style.display="block";
    document.getElementById("button2").addEventListener("click", clicked2)
    document.getElementById("button2").style.display="none";
}

function clicked1(){
    console.log("clicked 1");
}

function clicked2(){
    console.log("clicked 2");
}

window.addEventListener("load", init);