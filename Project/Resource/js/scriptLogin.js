var i = 0;

function changeColor() {
  var Heading = document.getElementById("Heading");
  var color = ["#fff", "#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2", "#1565C0", "#0D47A1", "#0033cc", "#000099", "#000066", "#000033"];

  Heading.style.color = color[i];
  i = (i + 1) % color.length;
}
setInterval(changeColor, 1000);


function validateForm() {
  var un = document.loginform.username.value;
  var pw = document.loginform.password.value;
   
  if ((un == "Rayan") && (pw == "Rayan123")) {
      return true;
  }
  else {
      alert ("Login was unsuccessful, please check your username and password");
      return false;
  }
}