
// saw this  in the debugging module and came back to fix my code using it
$("#boxGrow").on("click", function() {
	// clicking adds 35px to box element
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

// 
$("#boxShrink").on("click", function() {
	// decreases box by 35px 
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})

$("#boxFadeout").on("click", function() {
    // will decrease opacity on click
    $("#box").fadeOut()
})
$("#boxFadein").on("click", function() {
    // will increase opacity on click
    $("#box").fadeTo("slow","1")
})

$("#boxBlue").on("click", function() {
    // will change the box to blue
    $("#box").css("background-color", "blue")
})

$("#boxReset").on("click", function() {
    // will change the box back to defaults
    $("#box").css({"height": "150px", "width": "150px", "background-color": "orange", "margin": "25px"})
})

