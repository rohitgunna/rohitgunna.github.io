function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function closeTab(){
    var x = document.getElementById("myTopnav");
    if(x.className == "topnav responsive"){
        x.className = "topnav";
    }
}