// This will attach the handlers to the DOM after it is loaded
$(function() {
	$(".change-devour").on("click", function(event) {
		var id = $(this).data("id");
		var newBurger = $(this).data("newBurger");

		var newBurgerState = {
			devour: newBurger
		};

		// Send the PUT request.
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: newBurgerState
		}).then(
		function() {
			console.log("changed devour to", newBurger);
			location.reload();
		}
	);
});

	$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      burger: $("[name=burger]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/cats", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Created New Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});