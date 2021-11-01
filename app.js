//Selectors

// Here, we are selecting the html classes and placing them in a js variable

var dayTime = document.querySelector(".d-time");
var hourTime = document.querySelector(".h-time");
var minuteTime = document.querySelector(".m-time");
var secondTime = document.querySelector(".s-time");

//Define Time

var secs = 1000;
var mins = secs * 60;
var hrs = mins * 60;
var days = hrs * 24;

//Function
/*This function saves both the new year date and today's date to a variable then subtract them and save that to a variable as well

Next we round the value for each equation to largest integer less than or equal to the specified result.
*/

function timer() {
  var endTime = new Date("January 1, 2022 00:00:00").getTime();
  var today = new Date().getTime();
  var timeLeft = endTime - today;

  var daysLeft = Math.floor(timeLeft / days);
  var hoursLeft = Math.floor((timeLeft % days) / hrs);
  var minsLeft = Math.floor((timeLeft % hrs) / mins);
  var secsLeft = Math.floor((timeLeft % mins) / secs);

  dayTime.innerHTML = daysLeft;
  hourTime.innerHTML = hoursLeft;
  minuteTime.innerHTML = minsLeft;
  secondTime.innerHTML = secsLeft;
}

//The setInterval calls the timer function and runs it every second
setInterval(timer, 1000);
