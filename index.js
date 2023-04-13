// $("h1").addClass("big-title");

$("h1").html("<em>Bye</em>");
$("button").on("click", function() {
  $("h1").css("color", "purple");
  $("h1").animate({
    opacity: 0.25,
  });
})

// $("button").attr("disabled", true);

$(document).keydown((event) => {
  $("h1").text(event.key);
});