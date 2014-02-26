$(document).ready(function() {

    $(function() {
        //The global variable so we can access it from other controller and views
        window.stage = "starter";

        //We instantiate our model
        var model = new DinnerModel();

        //And create the needed controllers and views
        //var exampleView = new ExampleView($("#exampleView"),model);
        //var exampleViewControllSer = new ExampleViewController(exampleView,model);
        var selectDishView = new SelectDishView($("#content_select_dish"), model);
        var selectDishViewController = new SelectDishViewController(selectDishView, model);

        var sideBarView = new SideBarView($("#sidebar"), model);
        var sideBarViewController = new SideBarViewController(sideBarView, model);


        var subheaderView = new SubheaderView($("#subheader"), model);
        var dinnerPreparationView = new DinnerPreparationView($("#content_dinner_preparation"), model);
        var dinnerOverviewView = new DinnerOverviewView($("#content_dinner_overview"), model);
        var dishDetailsView = new DishDetailsView($("#content_dish_details"), model);


    //  gotoHomePage();
      gotoSelectDishPage();
  //    gotoDishDetailsPage();
//         gotoDinnerOverviewPage();
        //       gotoDinnerPreparationPage();

    });



    //TODO:MOVE below to controllers
    //Buttons handlers regarding page flow
    $("#btnCreateDinner, #subheader input, #descr input[name=back]").click(function() {
        gotoSelectDishPage(true);
    });

    $("#sidebar").find("input[type=button]").click(function() {
        gotoDinnerOverviewPage(true);
    });

    $("#content_dinner_overview").find("input[type=button]").click(function() {
        gotoDinnerPreparationPage(true);
    });
    
    


});



// Page flow function
var gotoHomePage = function() {
    resetPage();
    $("#content_wrapper").addClass("content_wrapper_home");
    $("#content_home").show();
};

var gotoSelectDishPage = function(fadeEffect) {
    resetPage(fadeEffect);

    if (fadeEffect) {
        $("#sidebar").fadeIn(100);
        $("#content_select_dish").fadeIn(100);
    } else {
        $("#sidebar").show();
        $("#content_select_dish").show();
    }
};

var gotoDishDetailsPage = function(dishId) {
    resetPage();

    $("#sidebar").show();
    $("#content_dish_details").show();
   // model.selectedDishDetailId = dishId;
    

};

var gotoDinnerOverviewPage = function() {
    resetPage();

    $("#subheader").show();
    $("#content_dinner_overview").show();


};

var gotoDinnerPreparationPage = function() {
    resetPage();

    $("#subheader").show();
    $("#content_dinner_preparation").show();
};

var resetPage = function(fadeEffect) {
    $("#content_wrapper").removeClass("content_wrapper_home");

    if (fadeEffect) {

        $(".content").fadeOut(300);

        $("#subheader").fadeOut(300)
        $("#sidebar").fadeOut(300)
    } else {

        $(".content").hide();

        $("#subheader").hide();
        $("#sidebar").hide();
    }
};
