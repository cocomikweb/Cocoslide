		var i = 1;
		var x = $('.slide');
		var timer;
		slider();
		function slider(){
			i += 1;

			if(i > x.length){
				i = 1;
				$("#slides").stop(true,true).animate({left:'+=300%'},0);
				wait_time = 0;
			}
			else {
				$("#slides").stop(true,true).animate({left:'-=100%'},2000);
				wait_time = 3000;
			}
			timer = setTimeout(slider,wait_time);
		}

		// PLAY
		$(".play").click(function(){
			clearTimeout(timer);
			slider();
		});

		// PREVIOUS
		$(".previous").click(function(){
			clearTimeout(timer);
			i -= 1;
			if (i < 1){
				i = x.length-1;
				$("#slides").animate({left:"-=300%"},0);
				$("#slides").animate({left:'+=100%'},"medium");
			}
			else{
				$("#slides").animate({left:'+=100%'},"medium");
			}
		});

		//NEXT
		$(".next").click(function(){
			clearTimeout(timer);
			i += 1;
			if (i > x.length){
				i = 2;
				$("#slides").animate({left:"+=300%"},0);
				$("#slides").animate({left:'-=100%'},"medium");
			}
			else{
				$("#slides").animate({left:'-=100%'},"medium");
			}
		});

		//SWIPE PREVIOUS
		$(".play").hammer().on("swiperight",function(){
			clearTimeout(timer);
			i -= 1;
			if (i < 1){
				i = x.length-1;
				$("#slides").animate({left:"-=300%"},0);
				$("#slides").animate({left:'+=100%'},"medium");
			}
			else{
				$("#slides").animate({left:'+=100%'},"medium");
			}
		});

		//SWIPE NEXT
		$(".play").hammer().on("swipeleft",function(){
			clearTimeout(timer);
			i += 1;
			if (i > x.length){
				i = 2;
				$("#slides").animate({left:"+=300%"},0);
				$("#slides").animate({left:'-=100%'},"medium");
			}
			else{
				$("#slides").animate({left:'-=100%'},"medium");
			}
		});
