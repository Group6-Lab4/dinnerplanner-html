// JavaScript Document
var SelectDishView = function(container, model) {

    var type = new String();

    var model = model;

    this.typeSelect = container.find("select[name='dishType']");

    this.searchForm = container.find("form.searchForm");
    this.searchButton = this.searchForm.find("input[type=button]");
    this.searchText = this.searchForm.find("input[name=searchDish]");

    this.dishItemContainer = container.find(".dishes_container");



    //add rows of dishes into html and load data from dinnerModel

    //div we just store in temporary variable because we won't need it later
    this.displayDishesByType = function(type, filter) {
        var allDishes = model.getAllDishes(type, filter);
//        alert(allDishes.length);
//        console.log(allDishes);

        for (var i = 0; i < allDishes.length; i += 6)
        {
            var row = $("<div>");
            ;
            row.addClass("row");

            var numInRow;

            if (allDishes.length < 6) {
                numInRow = allDishes.length
            } else {
                numInRow = 6
            }
            ;
            for (var g = 0; g < numInRow; g++) {
                var dishItemView = $("<div>");
                dishItemView.addClass("col-md-2");
                dishItemView.addClass("col-lg-2");
                // var imgsrc = "images" + allDishes[g].image;

                var img = $("<img>");
                img.addClass("img-thumbnail");
                img.addClass("btnDishImg");
                img.attr("dish-id", allDishes[g].id);

                var string1 = new String('images/');
                //Todo: load dishes from model and get the src of the image, replace the "toast.jpg" with the src get from the model;
                var imgsrc = new String(string1.concat(allDishes[g].image));
                //  var string2 = new String(string1.concat('toast.jpg'));

                img.attr("src", imgsrc);

                var dishName = $("<h4>");
                dishName.html(allDishes[g].name);

                var descrp = $("<p>");
                descrp.html(allDishes[g].description);

                dishItemView.append(img);
                dishItemView.append(dishName);
                dishItemView.append(descrp);
                row.append(dishItemView);


            }
            //finally we add the div to the view container
            container.find(".dishes_container").append(row);
        }
    }

    this.displayDishes = function(type, filter) {
//        alert("displayDishes( " + type + ", " + filter + ")" );

        //every time when the function is called, empty the content in div showDishes
        container.find(".dishes_container").empty();
        if (type == 'all') {

            this.displayDishesByType("starter", filter);
            this.displayDishesByType("main dish", filter);
            this.displayDishesByType("dessert", filter);
        }
        else {
            this.displayDishesByType(type, filter)
        }
    }

    //show all dishes initially
    this.displayDishes("all");



};

