// Get the modal
var modal = document.querySelector("#id01");
var modal2 = document.querySelector("#id02");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

//
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
  var username = document.querySelector("#username").value;
  var password = document.querySelector("#password").value;
  if (username == "aze" && password == "aze") {
    alert("Login successfully");
    window.location = "index.html"; // Redirecting to other page.
    return false;
  } else {
    attempt--; // Decrementing by one.
    alert("You have left " + attempt + " attempt;");
    // Disabling fields after 3 attempts.
    if (attempt == 0) {
      document.querySelector("#username").disabled = true;
      document.querySelector("#password").disabled = true;
      document.querySelector("#submit").disabled = true;
      return false;
    }
  }
}
