document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const notification = document.getElementById("notification");

  function showNotification(text, type = 'success') {
    notification.textContent = text;
    notification.className = `notification ${type}`;
    notification.style.display = 'block';

    setTimeout(() => {
      notification.style.display = 'none';
    }, 5000); // Hide after 3 seconds
  }

  if (!name || !email || !message) {
    showNotification("Please fill in all fields.", "error");
    return;
  }

  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!emailRegex.test(email)) {
    showNotification("Please enter a valid email.", "error");
    return;
  }

  showNotification("Message sent successfully!", "success");

  document.getElementById("contactForm").reset();
});
