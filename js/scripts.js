$(document).ready(function() {

    var caps = function(list) {
      return list.toUpperCase();
      alert(listFoods);
      debugger;
    }

  var items = [];

  $("form#form1").submit(function(event) {

    items.push($("input#item").val());


    var listFoods = items.map(function(item) {
      caps(items);
      // return item.toUpperCase();
      // alert(listFoods);
      // debugger;
    });

    $("#hidden").show();
debugger;
    event.preventDefault();
  });

});
