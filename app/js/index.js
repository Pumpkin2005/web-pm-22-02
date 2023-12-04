function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar-nav") {
        x.className += " responsive";
    } else {
        x.className = "navbar-nav";
    }
}