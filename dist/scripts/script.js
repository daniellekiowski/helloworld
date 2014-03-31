	//initial hiding the poems on small screens
	$(".poetry").hide();

	//slider for computers
	if($("html").width() > 769){
		$(".fill_img").hide();
		$(".poetry").show();
	};
	//clicking on poetry hides filler image, expands poems	

	$("#poetry").click(function(){
		$(this).addClass("selected");
		$(".fill_img").hide();
		$(".poetry").show();
		return false;
	});

	//clicking on hedgeku resets
	$("h1").click(function(){
		$("#poetry").removeClass("selected");
		$(".fill_img").show();
		$(".poetry").hide();
		return false;
	});

