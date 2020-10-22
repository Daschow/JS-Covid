// Get the modal
var modal = document.querySelector("#id01");
var modal2 = document.querySelector("#id02");

//
let attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  if (username == "aze" && password == "aze") {
    alert("Login successfully");
    window.location = "map.html"; // Redirecting to other page.
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

const register = () => {
  const username = document.querySelector(".emailregister").value;
  const password = document.querySelector(".pwsregister2").value;
  if (myScript() === true) {
    addFirebaseUser(username, password);
    window.location = "map.html";
  } else {
    alert("Votre mots de passe n'est pas identique");
  }
};

const myScript = () => {
  const password1 = document.querySelector(".pwsregister1").value;
  const password2 = document.querySelector(".pwsregister2").value;
  if (password1 === password2) {
    return true;
  } else false;
};
