
$(function() {
    $("#addBtn").click(function(event) {
        event.preventDefault();
        $(".shopping-list").append("<li>" +
            "<span class=\"shopping-item\">" + $('#shopping-list-entry').val() +
            "</span>" +
            "<div class='shopping-item-controls'>" +
            "<button class='shopping-item-toggle'>" +
            "<span class='button-label'>check</span>" +
            "</button>" +
            "<button class='shopping-item-delete'>" +
            "<span class='button-label'>delete</span>" +
            "</button>" +
            "</div>" +
            "</li>");
    });

    $("body").on("click", ".shopping-item-toggle", function(event) {
        event.preventDefault();
       $(this).closest("li div").prev().toggleClass("shopping-item__checked")

    });
    $("body").on("click", ".shopping-item-delete", function(event) {
      event.preventDefault();
      $(this).closest("li").remove();
    }
    );

});