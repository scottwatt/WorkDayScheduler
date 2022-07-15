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

  $("#hour-00 .textBlock").val(localStorage.getItem("00"));
  $("#hour-01 .textBlock").val(localStorage.getItem("01"));
  $("#hour-02 .textBlock").val(localStorage.getItem("02"));
  $("#hour-03 .textBlock").val(localStorage.getItem("03"));
  $("#hour-04 .textBlock").val(localStorage.getItem("04"));
  $("#hour-05 .textBlock").val(localStorage.getItem("05"));
  $("#hour-06 .textBlock").val(localStorage.getItem("06"));
  $("#hour-07 .textBlock").val(localStorage.getItem("07"));
  $("#hour-08 .textBlock").val(localStorage.getItem("08"));
  $("#hour-09 .textBlock").val(localStorage.getItem("09"));
  $("#hour-10 .textBlock").val(localStorage.getItem("10"));
  $("#hour-11 .textBlock").val(localStorage.getItem("11"));
  $("#hour-12 .textBlock").val(localStorage.getItem("12"));
  $("#hour-13 .textBlock").val(localStorage.getItem("13"));
  $("#hour-14 .textBlock").val(localStorage.getItem("14"));
  $("#hour-15 .textBlock").val(localStorage.getItem("15"));
  $("#hour-16 .textBlock").val(localStorage.getItem("16"));
  $("#hour-17 .textBlock").val(localStorage.getItem("17"));
  $("#hour-18 .textBlock").val(localStorage.getItem("18"));
  $("#hour-19 .textBlock").val(localStorage.getItem("19"));
  $("#hour-20 .textBlock").val(localStorage.getItem("20"));
  $("#hour-21 .textBlock").val(localStorage.getItem("21"));
  $("#hour-22 .textBlock").val(localStorage.getItem("22"));
  $("#hour-23 .textBlock").val(localStorage.getItem("23"));
  $("#hour-24 .textBlock").val(localStorage.getItem("24"));