function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.opacity = 0.5;
    $("#main").hide();
	$(".carousel-indicators").show();
}

function off() {
	$("#overlay").hide();
	$("#main").show();
}

function firston() {
    setTimeout(function () {
        $("#main").show();
        $("#Home_overlay").hide();
    }, 7000);
    //$("#main").hide();
	$("#Home_overlay").show();
	$(".carousel-indicators").hide();
}

function openMap() {
    window.open("https://www.google.com/maps/place/26%C2%B014'04.7%22N+72%C2%B058'59.3%22E/@26.2346268,72.9809351,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d26.2346268!4d72.9831238?hl=en");
}


$(document).ready(function () {
    var html = '<div class="container container-size">'
    + '<ul class="nav nav-pills nav-stacked menu-font">'
    + '<li><a href="Index.html">Home</a></li>'
    + '<li><a href="AboutUs.html">About Us</a></li>'
    + '<li><a href="Products.html">Products</a></li>'
    + '<li><a href="ContactUs.html">Contact Us</a></li>'
    + '</ul>'
    + '</div>'

    $("#overlay").html(html);
	
	$("#logo").click(function() {
	location.reload();
	});
});
