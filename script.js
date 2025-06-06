document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Thank you, " + name + "! Your message has been received.");
    this.reset(); // Optionally reset the form
  } else {
    alert("Please fill out all fields.");
  }
});
