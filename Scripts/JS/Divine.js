function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.opacity = 0.5;
    //$("#main").hide();
}

function off() {
    document.getElementById("overlay").style.display = "none";
    //$("#main").show();
}

function firston() {
    setTimeout(function () {
        //$("#main").show();
        document.getElementById("Home_overlay").style.display = "none";
    }, 7000);
    //$("#main").hide();
    document.getElementById("Home_overlay").style.display = "block";
}

function openMap() {
    window.open('https://www.google.com/maps/place/Divine+arts+work/@26.2633454,72.9882253,17z/data=!3m1!4b1!4m5!3m4!1s0x39418f24d22d3c05:0xeafb91b86ad51bc0!8m2!3d26.2633406!4d72.990414');
}


$(document).ready(function () {
    var html = '<div class="container"  style="margin-top: 75px;">'
    + '<ul class="nav nav-pills nav-stacked">'
    + '<li><a href="Index.html">Home</a></li>'
    + '<li><a href="AboutUs.html">About Us</a></li>'
    + '<li><a href="Products.html">Products</a></li>'
    + '<li><a href="ContactUs.html">Contact Us</a></li>'
    + '</ul>'
    + '</div>'

    $("#overlay").html(html);
});