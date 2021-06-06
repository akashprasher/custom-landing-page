var searchEngine = "https://www.google.com/search?q=";

let searchQuery = () => {
  var query = document.getElementById("query").value;
  if (query.length > 0) window.location.href = searchEngine + query;
};

//  Clock below

$(document).ready(function () {
  clockUpdate();
  setInterval(clockUpdate, 1000);
});

function clockUpdate() {
  var date = new Date();
  $(".digital-clock");
  // .css({ color: "#fff", "text-shadow": "0 0 6px #ff0" });
  function addZero(x) {
    if (x < 10) {
      return (x = "0" + x);
    } else {
      return x;
    }
  }

  function twelveHour(x) {
    if (x > 12) {
      return (x = x - 12);
    } else if (x == 0) {
      return (x = 12);
    } else {
      return x;
    }
  }

  var h = addZero(twelveHour(date.getHours()));
  var m = addZero(date.getMinutes());
  var s = addZero(date.getSeconds());
  var ampm = date.getHours() >= 12 ? "PM" : "AM";

  $(".digital-clock").text(h + ":" + m + " " + ampm);
}
