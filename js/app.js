var Views = {};

$(document).ready(function() {

    $(function() {
        //The global variable so we can access it from other controller and views
        window.stage = "starter";

        //We instantiate our model
        var model = new DinnerModel();

        //And create the needed controllers and views
        //var exampleView = new ExampleView($("#exampleView"),model);
        //var exampleViewControllSer = new ExampleViewController(exampleView,model);
        Views.selectDishView = new SelectDishView($("#content_select_dish"), model);
        var selectDishViewController = new SelectDishViewController(Views.selectDishView, model);


        Views.sideBarView = new SideBarView($("#sidebar"), model);
        var sideBarViewController = new SideBarViewController(Views.sideBarView, model);


        Views.subheaderView = new SubheaderView($("#subheader"), model);
        Views.dinnerPreparationView = new DinnerPreparationView($("#content_dinner_preparation"), model);
        Views.dinnerOverviewView = new DinnerOverviewView($("#content_dinner_overview"), model);
        Views.dishDetailsView = new DishDetailsView($("#content_dish_details"), model);
        var dishDetailsViewController = new DishDetailsViewController(Views.dishDetailsView, model);


        gotoHomePage();
//      gotoSelectDishPage();
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

var gotoSelectDishPage = function() {
    resetPage();

    Views.sideBarView.showView();
    Views.selectDishView.showView();
//        $("#sidebar").show();
//        $("#content_select_dish").show();

};

var gotoDishDetailsPage = function(dishId) {
    resetPage();

//    $("#sidebar").show();
//    $("#content_dish_details").show();

    Views.dishDetailsView.showView(dishId);
    Views.sideBarView.showView();

};

var gotoDinnerOverviewPage = function() {
    resetPage();

    Views.subheaderView.showView();
    Views.dinnerOverviewView.showView();
//    $("#subheader").show();
//    $("#content_dinner_overview").show();


};

var gotoDinnerPreparationPage = function() {
    resetPage();

    Views.subheaderView.showView();
    Views.dinnerPreparationView.showView();
//    $("#subheader").show();
//    $("#content_dinner_preparation").show();
};

var resetPage = function() {
    $("#content_wrapper").removeClass("content_wrapper_home");

    $(".content").hide();

    $("#subheader").hide();
    $("#sidebar").hide();

};
