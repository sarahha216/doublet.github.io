/***********************Open modal***********************/
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

/***********************Open modal***********************/
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var user = document.getElementById("myUser");

// Get the <span> element that closes the modal
var dauX = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
user.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
dauX.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}