//ExampleViewController Object constructor
var SideBarViewController = function(view, model) {


    view.numberOfGuests.change(function() {
//        alert("guest chagne: " + $(this).val());
        model.setNumberOfGuests($(this).val());
    });
    
    view.menuTable.on("click", "tbody input[type=button]", function(){
//       alert($(this).attr("dish-id")); 
       model.removeDishFromMenu($(this).attr("dish-id"));
    });
}
