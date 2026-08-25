$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;

		// Lays the 7 balloons out evenly across whatever width the screen
		// actually has, instead of the old fixed +/-350..250px offsets
		// (which pushed balloons off-screen on phone-sized viewports).
		function layoutBalloons() {
			var ids = $('#b11').length
				? ['#b11','#b22','#b33','#b44','#b55','#b66','#b77']
				: ['#b1','#b2','#b3','#b4','#b5','#b6','#b7'];
			var screenW = $(window).width();
			var balloonW = $(ids[0]).outerWidth() || 100;
			var spacing = Math.min(balloonW + 40, (screenW - balloonW) / (ids.length - 1));
			var totalW = spacing * (ids.length - 1) + balloonW;
			var startLeft = Math.max(0, (screenW - totalW) / 2);

			$.each(ids, function(i, id){
				$(id).stop().animate({top:240, left: startLeft + spacing * i}, 500);
			});
		}

		$(window).resize(function(){
			layoutBalloons();
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	// Shared helper: pick a random spot that always stays inside the
	// current viewport, whether that's a desktop window or a phone screen.
	function randomBalloonSpot() {
		var balloonW = $('#b1').outerWidth() || 100;
		var balloonH = $('#b1').outerHeight() || 183;
		var maxLeft = Math.max($(window).width() - balloonW, 0);
		var maxTop = Math.max($(window).height() - balloonH - 100, 0);
		return {
			left: maxLeft * Math.random(),
			bottom: maxTop * Math.random()
		};
	}

	function loopOne() {
		var spot = randomBalloonSpot();
		$('#b1').animate({left:spot.left,bottom:spot.bottom},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var spot = randomBalloonSpot();
		$('#b2').animate({left:spot.left,bottom:spot.bottom},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var spot = randomBalloonSpot();
		$('#b3').animate({left:spot.left,bottom:spot.bottom},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var spot = randomBalloonSpot();
		$('#b4').animate({left:spot.left,bottom:spot.bottom},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var spot = randomBalloonSpot();
		$('#b5').animate({left:spot.left,bottom:spot.bottom},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var spot = randomBalloonSpot();
		$('#b6').animate({left:spot.left,bottom:spot.bottom},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var spot = randomBalloonSpot();
		$('#b7').animate({left:spot.left,bottom:spot.bottom},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		layoutBalloons();
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.balloons').fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
					$('.balloons').fadeIn('slow');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');