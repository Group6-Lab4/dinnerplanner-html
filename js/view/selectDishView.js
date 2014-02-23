// JavaScript Document
var SelectDishView = function(container, model){
	
	 var starter = model.getAllDishes('starter');
	 var main = model.getAllDishes('main dish');
	
	
	  
	//add rows of dishes into html and load data from dinnerModel
	
	//div we just store in temporary variable because we won't need it later
	
	for(var i=0; i<36; i+=6)
	{
	  var row = $("<div>");
	  ; 
	  row.addClass("row");
	  for(var g=0; g<6; g++){
		  var dishItemView = $("<div>");
	           dishItemView.addClass("col-md-2");
	           dishItemView.addClass("col-lg-2");
			 // var imgsrc = "images" + allDishes[g].image;
	           var img = $("<img>");
			   img.addClass("img-thumbnail");
			   
			   var string1 = new String( 'images/');
			   //Todo: load dishes from model and get the src of the image, replace the "toast.jpg" with the src get from the model;
			 var imgsrc = new String(string1.concat(starter[g][4]));
			   var string2 = new String(string1.concat('toast.jpg'));
			   
			   img.attr("src", string2);
			   
			    var dishName = $("<h4>");
				dishName.html("Toast");
				
				var descrp = $("<p>");
				descrp.html("Description of the toast");
				
				dishItemView.append(img);
				dishItemView.append(dishName);
				dishItemView.append(descrp);
              row.append(dishItemView);
			  
			  
			  }
			  //finally we add the div to the view container
	 container.append(row);
	}
	
	}