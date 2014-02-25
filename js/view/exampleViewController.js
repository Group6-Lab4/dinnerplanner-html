//ExampleViewController Object constructor
var ExampleViewController = function(view, model ) {
	
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
                alert("plus");
	});
	
	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
                alert("minus");
	});
        
        view.typeSelect.change(function(){
           alert("select chagne: " + view.typeSelect.val() ); 
        });
}
