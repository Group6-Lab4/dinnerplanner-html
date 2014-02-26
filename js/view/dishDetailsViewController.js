//ExampleViewController Object constructor
var DishDetailsViewController = function(view, model) {


    view.confirmButton.click(function() {
//        alert("clicked confirm");
        model.addDishToMenu(view.dishId);
        
    });
}
