//Flashacard view and tester

$(function(){

	//JQuery Interaction = Draggable/Droppable, and Animate Effect
	$( "#definition1" ).draggable();
	$( "#definition2" ).draggable();
	$( "#definition3" ).draggable();
	$( "#definition4" ).draggable();

	$( "#answerfield" ).droppable({
		drop: function( event, ui ) {
	        $( this ).animate({backgroundColor: "green"},1500); //addClass( "droppedTRUE");
    	}
	});

	//Jquery Widget = Tabs
	$( "#cards" ).tabs();

}); //end ready