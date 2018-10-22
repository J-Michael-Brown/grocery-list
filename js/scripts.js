$(document).ready(function() {

  var items = [];

  $("form#form1").submit(function(event) {
    $(".item").empty();
    
    items.push($("input#item").val());

    var listFoods = items.map(function(item) {
      return item.toUpperCase();
    });

    listFoods.sort();

      console.log(list,listFoods);
    listFoods.forEach(function(food){
      $(".item").append("<li>" + food + "</li>");

    });
    $("#hidden").show();

    event.preventDefault();
  });
});
