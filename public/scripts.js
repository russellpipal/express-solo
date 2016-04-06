

$(function(){
  $("button").on("click", function(){
    console.log("Button Pressed");
    var theMin = $("#min").val();
    var theMax = $("#max").val();
    $.post({
      url: "/balance",
      data: {
        min: theMin,
        max: theMax}
      }).done(function(response){
      $("body").append("<p>" + response + "</p>");
    });
    // $.ajax("/balance").done(function(response){
    //   $("body").append("<p>" + response + "</p>");
    // });
  });
});
