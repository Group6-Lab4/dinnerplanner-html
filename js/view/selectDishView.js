// JavaScript Document
var SelectDishView = function(container, model){
	
	  var type = new String();
	
	  var model = model;
	  
	//add rows of dishes into html and load data from dinnerModel
	
	//div we just store in temporary variable because we won't need it later
	this.displayDishes = function(type){
		for(var i=0; i<model.getAllDishes(type).length; i+=6)
	{
	  var row = $("<div>");
	  ; 
	  row.addClass("row");
	  
	  var numInRow;
	  
	  if(model.getAllDishes(type).length < 6){
		  numInRow = model.getAllDishes(type).length
		  }else{numInRow = 6};
	  for(var g=0; g<numInRow; g++){
		  var dishItemView = $("<div>");
	           dishItemView.addClass("col-md-2");
	           dishItemView.addClass("col-lg-2");
			 // var imgsrc = "images" + allDishes[g].image;
	           var img = $("<img>");
			   img.addClass("img-thumbnail");
			   
			   var string1 = new String( 'images/');
			   //Todo: load dishes from model and get the src of the image, replace the "toast.jpg" with the src get from the model;
			 var imgsrc = new String(string1.concat(model.getAllDishes(type)[g].image));
			 //  var string2 = new String(string1.concat('toast.jpg'));
			   
			   img.attr("src", imgsrc);
			   
			    var dishName = $("<h4>");
				dishName.html(model.getAllDishes(type)[g].name);
				
				var descrp = $("<p>");
				descrp.html(model.getAllDishes(type)[g].description);
				
				dishItemView.append(img);
				dishItemView.append(dishName);
				dishItemView.append(descrp);
              row.append(dishItemView);
			  
			  
			  }
			  //finally we add the div to the view container
	 container.append(row);
	}
	}
		
this.displayDishes("starter");
this.displayDishes("main dish");
this.displayDishes("dessert");

/*		}
	for(var i=0; i<model.getAllDishes("starter").length; i+=6)
	{
	  var row = $("<div>");
	  ; 
	  row.addClass("row");
	  
	  var numInRow;
	  
	  if(model.getAllDishes("starter").length < 6){
		  numInRow = model.getAllDishes("starter").length
		  }else{numInRow = 6};
	  for(var g=0; g<numInRow; g++){
		  var dishItemView = $("<div>");
	           dishItemView.addClass("col-md-2");
	           dishItemView.addClass("col-lg-2");
			 // var imgsrc = "images" + allDishes[g].image;
	           var img = $("<img>");
			   img.addClass("img-thumbnail");
			   
			   var string1 = new String( 'images/');
			   //Todo: load dishes from model and get the src of the image, replace the "toast.jpg" with the src get from the model;
			 var imgsrc = new String(string1.concat(model.getAllDishes("starter")[g].image));
			 //  var string2 = new String(string1.concat('toast.jpg'));
			   
			   img.attr("src", imgsrc);
			   
			    var dishName = $("<h4>");
				dishName.html(model.getAllDishes("main dish")[g].name);
				
				var descrp = $("<p>");
				descrp.html(model.getAllDishes("main dish")[g].description);
				
				dishItemView.append(img);
				dishItemView.append(dishName);
				dishItemView.append(descrp);
              row.append(dishItemView);
			  
			  
			  }
			  //finally we add the div to the view container
	 container.append(row);
	};
	
	for(var i=0; i<model.getAllDishes("main dish").length; i+=6)
	{
	  var row = $("<div>");
	  ; 
	  row.addClass("row");
	  
	  var numInRow;
	  
	  if(model.getAllDishes("main dish").length < 6){
		  numInRow = model.getAllDishes("main dish").length
		  }else{numInRow = 6};
	  for(var g=0; g<numInRow; g++){
		  var dishItemView = $("<div>");
	           dishItemView.addClass("col-md-2");
	           dishItemView.addClass("col-lg-2");
			 // var imgsrc = "images" + allDishes[g].image;
	           var img = $("<img>");
			   img.addClass("img-thumbnail");
			   
			   var string1 = new String( 'images/');
			   //Todo: load dishes from model and get the src of the image, replace the "toast.jpg" with the src get from the model;
			 var imgsrc = new String(string1.concat(model.getAllDishes("main dish")[g].image));
			 //  var string2 = new String(string1.concat('toast.jpg'));
			   
			   img.attr("src", imgsrc);
			   
			    var dishName = $("<h4>");
				dishName.html(model.getAllDishes("main dish")[g].name);
				
				var descrp = $("<p>");
				descrp.html(model.getAllDishes("main dish")[g].description);
				
				dishItemView.append(img);
				dishItemView.append(dishName);
				dishItemView.append(descrp);
              row.append(dishItemView);
			  
			  
			  }
			  //finally we add the div to the view container
	 container.append(row);
	};
	
	for(var i=0; i<model.getAllDishes("dessert").length; i+=6)
	{
	  var row = $("<div>");
	  ; 
	  row.addClass("row");
	  
	  var numInRow;
	  
	  if(model.getAllDishes("dessert").length < 6){
		  numInRow = model.getAllDishes("dessert").length
		  }else{numInRow = 6};
	  for(var g=0; g<numInRow; g++){
		  var dishItemView = $("<div>");
	           dishItemView.addClass("col-md-2");
	           dishItemView.addClass("col-lg-2");
			 // var imgsrc = "images" + allDishes[g].image;
	           var img = $("<img>");
			   img.addClass("img-thumbnail");
			   
			   var string1 = new String( 'images/');
			   //Todo: load dishes from model and get the src of the image, replace the "toast.jpg" with the src get from the model;
			 var imgsrc = new String(string1.concat(model.getAllDishes("dessert")[g].image));
			 //  var string2 = new String(string1.concat('toast.jpg'));
			   
			   img.attr("src", imgsrc);
			   
			    var dishName = $("<h4>");
				dishName.html(model.getAllDishes("dessert")[g].name);
				
				var descrp = $("<p>");
				descrp.html(model.getAllDishes("dessert")[g].description);
				
				dishItemView.append(img);
				dishItemView.append(dishName);
				dishItemView.append(descrp);
              row.append(dishItemView);
			  
			  
			  }
			  //finally we add the div to the view container
	 container.append(row);
	}
	*/
	
	}