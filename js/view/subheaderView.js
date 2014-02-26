//ExampleView Object constructor
var SubheaderView = function(container, model) {

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
    this.numberOfGuests = container.find(".numOfGuest");


    /*****************************************  
     Observer implementation    
     *****************************************/

    //Register an observer to the model
    model.addObserver(this);

    //This function gets called when there is a change at the model
    this.update = function(arg) {
        this.numberOfGuests.html(model.getNumberOfGuests());
    }

    // call update to init info
    this.update();
}

