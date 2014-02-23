// JavaScript Document
var SelectDishView = function(container, model){
	
	 
	var allDishes = model.getAllDishes();
	
	//add rows of dishes into html and load data from dinnerModel
	
	//div we just store in temporary variable because we won't need it later
	
	for(var i=0; i<allDishes.length; i+=6)
	{
	  var row = $("<div>");
	  row.addClass("row");
	  for(var g=0; g<6; g++){
	       var dishItemView = $("<div>");
	           dishItemView.addclass("col-md-2");
	           dishItemView.addClass("col-lg-2");
	           dishItemView.html('<img src="images/meatballs.jpg" alt="meatballs" class="img-thumbnail"/>')
              row.append(dishItemView);
			  }
	//finally we add the div to the view container
	 container.append(row);
	}
	
	}