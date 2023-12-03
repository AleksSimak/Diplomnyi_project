

$(".page-btn").on("click", function () {
    var target = $(this).data("target");
    $(".page").removeClass("page_active");
    $("." + target).addClass("page_active");
    return false;
});