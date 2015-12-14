//Flashacard view and tester

$(function(){

	//JQuery Interaction = Draggable/Droppable, and Animate Effect
	$( "#definition1" ).draggable();
	$( "#definition2" ).draggable();
	$( "#definition3" ).draggable();
	$( "#definition4" ).draggable();

	$( "#answerfield" ).droppable({
		drop: function( event, ui ) {
			varVAL = $( this ).val();
			console.log(varVAL);
			$( this ).animate({backgroundColor: "green"},1500); //addClass( "droppedTRUE");
    	}
	});

	//Jquery Widget = Tabs and animate
	$( "#cards" ).tabs($( "#cards p" ).animate({backgroundColor: "blue"},2000));
	//end tabs function

}); //end ready