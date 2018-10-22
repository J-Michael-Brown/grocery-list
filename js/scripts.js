$(document).ready(function() {

  var items = [];
  // var listFoods = [];

  $("form#form1").submit(function(event) {

    items.push($("input#item").val());

    var listFoods = items.map(function(item) {
      return item.toUpperCase();
    });

    listFoods.sort();//works up to this point

alert(listFoods);
  $(".item").append("<li>" + listFoods[0] + "</li>");
    $("#hidden").show();

    event.preventDefault();
  });
});
