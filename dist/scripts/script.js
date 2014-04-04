	//initial hiding the poems on small screens
	$(".poetry").hide();

	//define functions
	var showPoetry = function(){
		$(".fill_img").hide();
		$(".poetry").show();
	}

	//slider for computers
	if($("html").width() > 769){
		showPoetry();	
	};

	//clicking on poetry hides filler image, expands poems	
	$("#poetry").on("click", function(event){
		event.preventDefault();
		$("#poetry").addClass("selected");
		showPoetry();
	});

	//clicking on hedgeku or other buttons resets
	$("h1, #contact, #about").on("click",function(){
		$("#poetry").removeClass("selected");
		$(".fill_img").show();
		$(".poetry").hide();
	});
