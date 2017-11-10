function validateForm() {
  var name = document.forms["contactForm"]["name"].value;
  var number = document.forms["contactForm"]["number"].value;
  var email = document.forms["contactForm"]["email"].value;
  var message = document.forms["contactForm"]["message"].value;
  if (name == "") {
    alert("Please input a name");
    return false;
  } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) ) {
    alert("Please enter a valid Email");
    return false;
  } else if (message == "") {
    alert("Please enter a message");
    return false;
  } else if (number!="" && !(/^\d{10}$/.test(number))) {
    alert("Please enter valid mobile number");
    return false;
  } else {
    alert('Message sent.');
    return true;
  }
} 