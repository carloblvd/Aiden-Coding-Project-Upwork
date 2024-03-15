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
  event.preventDefault(); // Prevent the form from submitting normally

  // Implement code to handle form submission here
  document.getElementById("contactForm").style.display = "none"; // Hide the form
  document.getElementById("thankYou").style.display = "block"; // Show the thank you message
}
