function init(){
    console.log("hello");
    document.getElementById("button").addEventListener("click", clicked)
    document.getElementById("button").style.display="block";
}

function clicked(){
    console.log("clicked");
}

window.addEventListener("load", init);