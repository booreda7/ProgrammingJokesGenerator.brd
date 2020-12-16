function dropdownmenu (){
    var x = document.getElementById("dropdown");
    if (x.className === "topnav"){
        x.className += " responsive";
    }
    else{
        x.className = "topnav";
    }
}