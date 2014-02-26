// JavaScript Document
var SelectDishView = function(container, model) {
	
	  var type = new String();
	
	  var model = model;
	  
    this.typeSelect = $("select[name='dishType']");



	//add rows of dishes into html and load data from dinnerModel
	
	//div we just store in temporary variable because we won't need it later
    this.displayDishesByType = function(type) {
       // $("#showDishes").html("");
        //$("showDishes").empty();
       // var obj = $("#showDishes").next(".dummy");
       // obj.find('image').attr("src", something);
        
        for (var i = 0; i < model.getAllDishes(type).length; i += 6)
	{
	  var row = $("<div>");
	  ; 
	  row.addClass("row");
	  
	  var numInRow;
	  
            if (model.getAllDishes(type).length < 6) {
		  numInRow = model.getAllDishes(type).length
            } else {
                numInRow = 6
            }
            ;
            for (var g = 0; g < numInRow; g++) {
		  var dishItemView = $("<div>");
	           dishItemView.addClass("col-md-2");
	           dishItemView.addClass("col-lg-2");
			 // var imgsrc = "images" + allDishes[g].image;
	           var img = $("<img>");
			   img.addClass("img-thumbnail");
			   
                var string1 = new String('images/');
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
	 container.find(".dishes_container").append(row);
	}
	}
		
    this.displayDishes = function(type) {
//        alert("dishplayDishes");
//every time when the function is called, empty the content in div showDishes
     $("#showDishes").empty();
        if (type == 'all') {

            this.displayDishesByType("starter");
            this.displayDishesByType("main dish");
            this.displayDishesByType("dessert");
        }
	  
        else
            this.displayDishesByType(type)
	  
			  }
	
//type = temp.options[temp.selectedIndex].value;
	  
    //this.displayDishes("main dish");
//this.displayDishes("dessert");
	  
			   
			   
	};
	
