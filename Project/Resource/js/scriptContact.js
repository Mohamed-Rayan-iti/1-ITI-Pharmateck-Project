function validateForm() {
  const fname = document.getElementById("c_fname").value;
  const lname = document.getElementById("c_lname").value;
  const email = document.getElementById("c_email").value;
  const subject = document.getElementById("c_subject").value;
  const message = document.getElementById("c_message").value;
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (fname == "") {
    document.querySelector(".text-status-FN").innerHTML = "Can not be empty";
    return false;
  } else {
    document.querySelector(".text-status-FN").innerHTML = "";
  }

  if (lname == "") {
    document.querySelector(".text-status-LN").innerHTML = "Can not be empty";
    return false;
  } else {
    document.querySelector(".text-status-LN").innerHTML = "";
  }

  if (email == "") {
    document.querySelector(".text-status-E").innerHTML = "Can not be empty";
    return false;
  } else if (!re.test(email)) {
    document.querySelector(".text-status-E").innerHTML = "format invalid";
    return false;
  } else {
    document.querySelector(".text-status-E").innerHTML = "";
  }

  if (subject == "") {
    document.querySelector(".text-status-S").innerHTML = "Can not be empty";
    return false;
  } else {
    document.querySelector(".text-status-S").innerHTML = "";
  }

  if (message == "") {
    document.querySelector(".text-status-M").innerHTML = "Can not be empty";
    return false;
  } else {
    document.querySelector(".text-status-M").innerHTML = "";
  }
  
  Email.send("from@email.com",
    "to@email.com",
    "Message from " + name + " " + email,
    message,

    {
        token: "63cb3a19-2684-44fa-b76f-debf422d8b00",
        callback: function done(message) { alert("sent") }

    });
    
  alert("Send message has been done successfully");
}
