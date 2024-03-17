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
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue === "" || emailValue === "" || messageValue === "") {
    alert("Please fill in all fields.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    alert("Please enter a valid email address.");
    return;
  }

  event.target.submit();
}
