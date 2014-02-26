//ExampleView Object constructor
var SideBarView = function(container, model) {

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
    this.numberOfGuests = container.find("input[name=numOfGeust]");
    this.menuTable = container.find("table");

    this.showView = function() {
        $(container).show();
    }

    this.updateNumOfGuest = function() {
        this.numberOfGuests.val(model.getNumberOfGuests());
    };

    this.updateSelectedDishes = function() {
        // first clear the table
        $(this.menuTable).find("tbody").html("");

        var selectedDishes = model.getFullMenu();
        var totalMenuPrice = 0;
        for (key in selectedDishes) {
            var eachDish = selectedDishes[key];
            var totalPrice = model.getDishPrice(eachDish["id"]) * model.getNumberOfGuests();
            totalMenuPrice += totalPrice;
            $(this.menuTable).find("tbody").append("<tr><td>" + eachDish["name"] + "</td><td>" + totalPrice + '</td><td><input type="button" class="btn-xs btn-danger" value="x" dish-id="'+eachDish.id+'" /></td></tr>');
        }
        $(this.menuTable).find("tfoot td.cost").html(totalMenuPrice + " SEK");
    };

    // Populate data from model
    this.updateNumOfGuest();
    this.updateSelectedDishes();

    /*****************************************  
     Observer implementation    
     *****************************************/

    //Register an observer to the model
    model.addObserver(this);

    //This function gets called when there is a change at the model
    this.update = function(arg) {
//        alert("Changed data: " + arg);
        this.updateSelectedDishes();
    }


}

