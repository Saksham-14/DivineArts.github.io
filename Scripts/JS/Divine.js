function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.opacity = 0.5;
    $("#main").hide();
}

function off() {
    document.getElementById("overlay").style.display = "none";
	$("#main").show();
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
    window.open("https://www.google.com/maps/place/26%C2%B014'04.7%22N+72%C2%B058'59.3%22E/@26.2346268,72.9809351,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d26.2346268!4d72.9831238?hl=en");
}

$(document).ready(function () {
    var html = '<div class="container menu">'
    + '<ul class="nav nav-pills nav-stacked">'
    + '<li><a href="Index.html">Home</a></li>'
    + '<li><a href="AboutUs.html">About Us</a></li>'
    + '<li><a href="Products.html">Products</a></li>'
    + '<li><a href="ContactUs.html">Contact Us</a></li>'
    + '</ul>'
    + '</div>'

    $("#overlay").html(html);
	
    $("#overlay").click(function(){
        off();
    });
    
    $("#menuToggle").click(function(){
        on();
    });

    $("#logo").click(function(){
        location.reload();
    });
});