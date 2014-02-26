

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
    
    $(view.dishItemImg).click(function(){
//        alert("click image: " + $(this).attr("dish-id"));
        gotoDishDetailsPage($(this).attr("dish-id"));
        
    });



};