

var SelectDishViewController = function(view, model) {
    

     view.typeSelect.change(function() {


//        alert("select change111: " + $(this).val() + ".");
        view.displayDishes($(this).val());

    });

};