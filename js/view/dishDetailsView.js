/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var DishDetailsView = function(container, model){
    
  
    this.numberOfGuestsSpan = container.find("#numOfGuests");
    this.confirmButton = $("#ingrd input");
    this.selectedDishDetail = model.getDish(model.getSelectedDishDetailId());
    
    this.ingrdTable = container.find("table");
    this.dishPrice = $("#dishPrice");
    
    this.displayDishDetails = function(){
        
       // alert(model.getSelectedDishDetailId());
         
        //display the row of image and ingrediant table
           
             
                // var imageViewDetail = container.find("#descr");
                  
                 //dishName
                     var dishDetailName = $("#descr h3");
                     dishDetailName.html(this.selectedDishDetail.name);
                   //  alert("selectedDishDetail name"+ this.selectedDishDetail.name);
                 //dish img
                     var img = container.find("#descr img");
                      
                     var string1 = new String('images/');
                     var imgsrc = new String(string1.concat(this.selectedDishDetail.image)); 
                     img.attr("src", imgsrc);
                     
                     
                 //dish description
                     var descrp = container.find("#descr p");
                     descrp.html(this.selectedDishDetail.description);
                   
                     var numberOfGuests = model.getNumberOfGuests();
                    // alert("dishDetailView get numberOfGuests "+numberOfGuests);
                     this.numberOfGuestsSpan.html(numberOfGuests);
                  
                 //ingrd table
                   for(var i=0; i<this.selectedDishDetail.ingredients.length; i++){
                     
                      var tr = $("<tr>");
                          var quantity = this.selectedDishDetail.ingredients[i].quantity*numberOfGuests;
                       //   alert(quantity);
                          var unit = this.selectedDishDetail.ingredients[i].unit;

                         // var quantityWithUnit = new String(quantity.concat(unit));
                          var quantityUnity =$("<td>");
                          quantityUnity.html(quantity + unit);

                          var name = $("<td>");
                          name.html(this.selectedDishDetail.ingredients[i].name);
                          var SEK = $("<td>");
                          SEK.html("SEK")

                          var price = $("<td>");
                          var ingrdPrice = this.selectedDishDetail.ingredients[i].price*numberOfGuests;
                          price.html(ingrdPrice);
                      
                      tr.append(quantityUnity);
                      tr.append(name);
                      tr.append(SEK);
                      tr.append(price);
                      
                      this.ingrdTable.append(tr);
                   };
                 
             
             //dish price
             var selectedDishPrice =model.getDishPrice(this.selectedDishDetail.id)*numberOfGuests;
             this.dishPrice.html(selectedDishPrice);
             
             //back to select button
        //display the row of preparation
            var preparationRow = $("#preparation p");
            preparationRow.html(this.selectedDishDetail.preparation);
            
    };
        
     model.addObserver(this);
        
     this.update = function(arg){
                this.selectedDishDetail = model.getDish(model.getSelectedDishDetailId());
                this.ingrdTable.empty();
                this.displayDishDetails();
                
                };
        
        
    
    this.update();
    
};

