//ExampleViewController Object constructor
var SideBarViewController = function(view, model) {


    view.numberOfGuests.change(function() {
//        alert("guest chagne: " + $(this).val());
        model.setNumberOfGuests($(this).val());
    });
}
