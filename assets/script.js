var timeDisplayEl = $("#currentTime");
var currentHour = moment().format('HH');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  setInterval(displayTime, 1000);

  $(".timeBlock").each(function () {
    var timeDiv = $(this).attr("id").split('-')[1];
    console.log(timeDiv);
    console.log(currentHour);
    
    if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".textBlock").val();
    var time = $(this).parent().attr("id").split('-')[1];
    localStorage.setItem(time, value);
  });

  $("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });


  $("#hour-09 .textBlock").val(localStorage.getItem("09"));
  $("#hour-10 .textBlock").val(localStorage.getItem("10"));
  $("#hour-11 .textBlock").val(localStorage.getItem("11"));
  $("#hour-12 .textBlock").val(localStorage.getItem("12"));
  $("#hour-13 .textBlock").val(localStorage.getItem("13"));
  $("#hour-14 .textBlock").val(localStorage.getItem("14"));
  $("#hour-15 .textBlock").val(localStorage.getItem("15"));
  $("#hour-16 .textBlock").val(localStorage.getItem("16"));
  $("#hour-17 .textBlock").val(localStorage.getItem("17"));
