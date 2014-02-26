//ExampleView Object constructor
var DinnerOverviewView = function(container, model) {

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
    this.starterDish = container.find(".selectedDish:first");
    this.mainDish = this.starterDish.next(".selectedDish");
    this.dessertDish = this.mainDish.next(".selectedDish");



    /*****************************************  
     Observer implementation    
     *****************************************/

    //Register an observer to the model
    model.addObserver(this);

    //This function gets called when there is a change at the model
    this.update = function(arg) {

        var selectedStarter = model.getSelectedDish("starter");
        var selectedMain = model.getSelectedDish("main dish");
        var selectedDessert = model.getSelectedDish("dessert");

        this.starterDish.find("img").attr("src", "images/" + selectedStarter["image"]);
        this.starterDish.find("h4").html(selectedStarter["name"]);
        this.starterDish.find("p").html(model.getDishPrice(selectedStarter["id"]) * model.getNumberOfGuests() + " SEK");

        this.mainDish.find("img").attr("src", "images/" + selectedMain["image"]);
        this.mainDish.find("h4").html(selectedMain["name"]);
        this.mainDish.find("p").html(model.getDishPrice(selectedMain["id"]) * model.getNumberOfGuests() + " SEK");

        this.dessertDish.find("img").attr("src", "images/" + selectedDessert["image"]);
        this.dessertDish.find("h4").html(selectedDessert["name"]);
        this.dessertDish.find("p").html(model.getDishPrice(selectedDessert["id"]) * model.getNumberOfGuests() + " SEK");

        container.find(".totalPrice").html(model.getTotalMenuPrice() + " SEK");
    }

    // call update to init info
    this.update();

}

