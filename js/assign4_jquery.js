//Flashacard view and tester

$(function(){

	//JQuery Interaction = Draggable/Droppable, and Animate Effect
	$( "#definition1" ).draggable();
	$( "#definition2" ).draggable();
	$( "#definition3" ).draggable();
	$( "#definition4" ).draggable();

	$( "#answerfield" ).droppable({
		drop: function( event, ui ) {
			$( this ).animate({backgroundColor: "green"},1500);
    	}
	});

	//Jquery Widget = Tabs and animate
	$( "#cards" ).tabs($( "#cards p" ).animate({backgroundColor: "blue"},2000));
	//end tabs function

	//
	//JQuery Effect = Toggle & Color Animation
	$( '#draghead' ).click(function() {
		$( '#definition2' ).toggle("highlight", 1500,fnAnimate()).animate({backgroundColor: "red"});
		$( '#definition3' ).toggle("highlight", 1500,fnAnimate()).animate({backgroundColor: "red"});
		$( '#definition4' ).toggle("highlight", 1500,fnAnimate()).animate({backgroundColor: "red"});

		function fnAnimate(){
			$( '#definition1' ).animate({backgroundColor: "green"}, 500);			
		};//end fnAnimate
	});//end click

	//End Jquery Effect
	//

}); //end ready