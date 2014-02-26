//dinner_preparationView

var dinnerPreparationView = function(container, model){

    var dinnerModel = model;
	var fullMenu = dinnerModel.getFullMenu();
	
	this.showPreparationsOfFullMenu = function(){
	
	   for(var i = 0; i < fullMenu.length; i++ ){
	   // create the row for dinnerPreparation
                var dinnerPreparationRow = $('<div>');
	        row.addclass("row");
              // the content in dinner preparation, including img, description, preparation
                //img
                var imageDiv = $("<div>");
                imageDiv.addClass("col-md-2 col-lg-2");
                
                    var img = $("<img>");
                    img.addClass("img-thumbnail");
                    var string1 = new String('images/');
                    //Todo: load dishes from model and get the src of the image, replace the "toast.jpg" with the src get from the model;
                    var imgsrc = new String(string1.concat(fullMenu[g].image));
                    //  var string2 = new String(string1.concat('toast.jpg'));
                     img.attr("src", imgsrc);
               imageDiv.append(img);
               //description
               
               var descripDiv = $("<div>")
               descripDiv.addClass("col-md-4 col-lg-4")
              
                    var dishName = $("<h3>");
                    dishName.html(fullMenu[g].name);
                    var descrp = $("<p>");
                    descrp.html(fullMenu[g].description);
                
                descripDiv.append(dishName);
                descripDiv.append(descrp);
                
                //preparation
                var preparationDiv = $("<div>");
                preparationDiv.addClass("col-md-6 col-lg-6");

                    preparationDiv.html("<h6>Preparation</h6>");
                    var preparation = $("<p>");
                    preparation.html(fullMenu[g].preparation);
                
                preparationDiv.append(preparation);
                 
                //add the 3 parts of preparation of a dish in one row. 
                row.append(imageDiv);
                row.append(descripDiv);
                row.append(preparationDiv);
                
                container.append(row);
                
	  }
	};
	

};