

var SelectDishViewController = function(view, model) {


    view.typeSelect.change(function() {
        view.displayDishes($(this).val());

    });
    
    view.searchForm.submit(function(e){
        view.searchButton.click();
        
        //prevent form submit
        event.preventDefault();
    });
    
    view.searchButton.click(function(){
        view.displayDishes($(view.typeSelect).val(), $(view.searchText).val());
        
    });
    
    // Using dishItemContainer as a delegate parent to handle events because content inside are dynacmically added
    $(view.dishItemContainer).on("click", "img" ,function(){
         var dishId = $(this).attr("dish-id");
          model.setSelectedDishDetailId(dishId);
//        alert("click image: " + $(this).attr("dish-id"));
        gotoDishDetailsPage($(this).attr("dish-id"));
        
    });



};