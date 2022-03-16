var ddown = document.getElementsByClassName("ddown-btn");
var k;

for (k = 0; k < ddown.length; k++) {
  ddown[k].addEventListener("click", function() {
  var dropdownSidenav = this.nextElementSibling;
  if (dropdownSidenav.style.display === "block") {
  dropdownSidenav.style.display = "none";
  } else {
  dropdownSidenav.style.display = "block";
  }
  });
}