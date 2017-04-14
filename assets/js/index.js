// header event
document.getElementById('closing_cross').addEventListener("click", function removeHeadband() {
  document.getElementById('headband').parentNode.removeChild(document.getElementById("headband"));
  document.getElementById('main').style.height = ('94vh');
});

// var clientWidth = document.documentElement.clientWidth;
// if (clientWidth > 600) {
//   document.getElementById('burgerbutton').parentNode.removeChild(document.getElementById('burgerbutton'));
// }
