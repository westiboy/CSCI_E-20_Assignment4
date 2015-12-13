//Flashacard view and tester

$(document).ready(function(){
	//Array of known school names
	var schArray = ["Harvard Extension School", "School for Engineering and Applied Sciences", "Graduate Schol of Education"];
	var crestArray = ["https://en.wikipedia.org/wiki/Harvard_Extension_School#/media/File:ExtensionFlag.png", "https://en.wikipedia.org/wiki/Harvard_John_A._Paulson_School_of_Engineering_and_Applied_Sciences#/media/File:HSEAS_Seal_New.png", "https://en.wikipedia.org/wiki/Harvard_Graduate_School_of_Education#/media/File:Harvard_shield-Education.png"];	

	//interactive feature 1
	$('#school').change(function(){
		var school = $('#school').val();
		var schimg;
		switch(school) {
			case 'HES':
				schimg="https://upload.wikimedia.org/wikipedia/en/8/89/ExtensionFlag.png";
				break;
			case 'SEAS':
				schimg="https://upload.wikimedia.org/wikipedia/en/f/f3/HSEAS_Seal_New.png";
				break;
			case 'GSE':
				schimg="https://upload.wikimedia.org/wikipedia/en/4/4a/Harvard_shield-Education.png";
				break;
			default:
				schimg="http://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Harvard_Wreath_Logo_1.svg/1051px-Harvard_Wreath_Logo_1.svg.png";		
		} //end switch
		$('#schimg').attr("src",schimg);
	}); //end school focusout

	//interactive feature 2
	$('#flashdata input').focusout(function(event){
		if ($(this).val().length == 0) {
			$(this).attr({
				class: 'fail'
			}); //end item attr
			event.preventDefault();
		} else {
			$(this).attr({
				class: 'none'
			}); //end item attr else
		}
	}); // end item focusout

	//hide center box until selection clicked
	$('#centerbox').hide();

	$('input[type="radio"]').attr('checked', false);

	$('#leftbox').hover(function(){
		$(this).css("background-color", "pink")
		$(this).css("font-weight", "bold")
		}, function(){
		$(this).css("font-weight", "normal")
		$(this).css("background-color", "#FFCCFF")
	}); //end hover function

	$('input[type="radio"]').click(function(){
		var button = $(this);
		console.log(button);
		var ans = $(this).val();
		console.log(ans);
		if (ans == 0){
			$('#centerbox').show(500);
			$('#definition').css('background-color', 'green');
		} else if (ans > 0){
			console.log($(this).val());
			$('input[type="radio"]:checked').attr({
				class: 'fail'
			}); //end item attr
		} else {
			$('input[type="radio"]:checked').attr({
				class: 'box'
			}) // end this attr
		}
	}); //end radio click
	//filter example
	$('ul li').filter(':even').css('font-family', 'Impact, sans-serif');
	
	//button to clear flashcards
	$('#clearflash').click(function(){
		$('.flashcard').clearCanvas();
	}); //end clear flash


}); //end ready














