//Flashacard view and tester

$(function(){
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

	//JQuery Mobile Event 1
	$( "#schimg" ).bind( "taphold", tapholdHandler );
	function tapholdHandler( event ){
	    $( event.target ).attr("src", "http://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Harvard_Wreath_Logo_1.svg/1051px-Harvard_Wreath_Logo_1.svg.png" );
	}

	//Jquery Mobile Event 2
	$( '#card_test' ).on( "swipe", swipeHandler)
	function swipeHandler( event ){
		$( event.target ).removeClass("ui-bar-c").addClass("ui-bar-a");
	}

	//JQuery Interaction = Draggable/Droppable
	$( "#definition1" ).draggable();
	$( "#definition2" ).draggable();
	$( "#definition3" ).draggable();
	$( "#definition4" ).draggable();

	$( "#definition_display_element" ).droppable({
		drop: function( event, ui ) {
	        $( this )
					.addClass( "droppedTRUE" );
    	}
	});


}); //end ready