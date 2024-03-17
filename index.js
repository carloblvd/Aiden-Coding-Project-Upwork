function loadContent(page) {
  console.log("Loading content for page:", page);
  var content = document.getElementById("content");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", page + ".html", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        console.log("Content loaded successfully:", xhr.responseText);
        content.innerHTML = xhr.responseText;
      } else {
        console.error("Failed to load content. Status code:", xhr.status);
      }
    }
  };
  xhr.send();
}

function submitForm(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve the input field values
  var name = document.querySelector(".contact__name").value;
  var email = document.querySelector(".contact__email").value;
  var message = document.querySelector(".contact__form textarea").value;

  // Validate input values
  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Please fill in all fields.");
    return; // Exit function if any field is empty
  }

  // Validate email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return; // Exit function if email is invalid
  }

  // If all validations pass, submit the form
  document.forms["myContact"].submit();

  // Additional logic for form submission
  // For example, you might want to send the form data to a server

  // // Implement code to handle form submission here
  // document.getElementById("contactForm").style.display = "none"; // Hide the form
  // document.getElementById("thankYou").style.display = "block"; // Show the thank you message
}
