$(document).ready(function(e) {
    
$(function() {
	//The global variable so we can access it from other controller and views
	window.stage = "starter";
	
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"),model);
   	//var exampleViewControllSer = new ExampleViewController(exampleView,model);
	 var selectDishView = new SelectDishView($("#showDishes"), model);
});

// click button to go from home to select_dish page
$("#createNewDinner").click(function(){
	
	$("#descrption").fadeOut(300);
	$("#content").fadeIn(100);
	
	});
	

});
