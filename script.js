$(function () {
  // Save Button Click Event
  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).parent().attr("id");
    var userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);
  });

  // Apply Past, Present, or Future Classes
  var currentHour = dayjs().hour();

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
      $(this).removeClass("present future").addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }
  });

  // Retrieve User Input from Local Storage
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var storedInput = localStorage.getItem(timeBlockId);
    if (storedInput !== null) {
      $(this).find(".description").val(storedInput);
    }
  });

  // Display Current Date
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));
});
