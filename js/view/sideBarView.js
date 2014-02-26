//ExampleView Object constructor
var SideBarView = function(container, model) {

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
    this.numberOfGuests = container.find("input[name=numOfGeust]");
    this.menuTable = container.find("table tbody");

    // Populate data from model
//    alert(model.getNumberOfGuests());
    this.numberOfGuests.val(model.getNumberOfGuests());


    var selectedDishes = model.getFullMenu();
    for (key in selectedDishes) {
//        alert(selectedDishes[key]["name"]);
        $(this.menuTable).append("<tr><td>name</td><td>price</td></tr>");
    }


    //Set the inital values of the components
//    this.numberOfGuests.html(model.getNumberOfGuests());
//    this.totalPrice.html(model.getTotalMenuPrice());

    /*****************************************  
     Observer implementation    
     *****************************************/

    //Register an observer to the model
    model.addObserver(this);

    //This function gets called when there is a change at the model
    this.update = function(arg) {
        this.numberOfGuests.html(model.getNumberOfGuests());
        this.totalPrice.html(model.getTotalMenuPrice());
    }
}

