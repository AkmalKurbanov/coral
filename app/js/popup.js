$(".trade-js").on('click', function(){
  $(".popup-js").addClass('active');
  $("body").addClass('no-scroll');
});
$(".popup-cancel-js").on("click", function () {
  $(".popup-js").removeClass("active");
  $("body").removeClass('no-scroll');
});