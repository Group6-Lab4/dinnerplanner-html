//dinner_preparationView

var dinnerPreparationView = function(container, model){

    var dinnerModel = model;
	var fullMenu = dinnerModel.getFullMenu();
	
	this.showPreparationsOfFullMenu = function(){
	
	   for(var i = 0; i < fullMenu.length; i++ ){
	   var row = $('<div>');
	   row.addclass("row");
	   
	   var img = new String (fullMenu[i].image);
	  }
	}
	

}