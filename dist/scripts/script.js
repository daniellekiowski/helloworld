	//initial hiding the poems on small screens
	$(".poetry").hide();
	
	
	//load hedgekus on pg load
	var images = [];
	var poems = [];

	$.getJSON( "/hedgekus", function( data ) {
		$.each( data, function( key, val ) {
			//if key is images, push entire object to images to use in generating img
			console.log(key,val);
			if(key=="Images"){
				images = val;
			}
			//if key is poems, push each line of the poem to a p tag within an array inside the poems array
			if(key=="Poems"){
				for(var i=0;i<val.length;i++){
					poems.push(["<p>" + val[i]["line1"] + "</p>","<p>" + val[i]["line2"] + "</p>","<p>" + val[i]["line3"] + "</p>"] );
				}	
			}
		});
	}).done( function(){
//callbacks?
			
	for(var i=0;i<images.length;i++){
		$("<div/>",{
			"class": "poem",
			id: i
			}
		).appendTo(".poetry");

		$("<img/>", images[i]
		).appendTo("#"+i);

		$("<div/>",{
			"class": "haiku",
			html: poems[i].join("")
		}).appendTo("#"+i);

	};
});

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
