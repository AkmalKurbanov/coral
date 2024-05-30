$(document).ready(function () {
  // Переключение класса у второго элемента при клике на первый элемент
  $(".notification-js").on("click", function (event) {
    event.stopPropagation(); // Остановка всплытия события клика
    $(".notification__dropdown").toggleClass("active");
  });

  // Удаление класса у второго элемента при клике вне него
  $(document).on("click", function (event) {
    if (!$(event.target).closest(".notification__dropdown").length) {
      $(".notification__dropdown").removeClass("active");
    }
  });

  // Остановка всплытия события клика для второго элемента
  $(".notification__dropdown").on("click", function (event) {
    event.stopPropagation(); // Остановка всплытия события клика
  });
});
