const form = document.getElementById('contact-form');

form.addEventListener('submit', () => {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  let errors = [];

  if (!name.value.trim()) errors.push("Name is required");
  if (!email.value.trim()) errors.push("Email is required");
  if (!message.value.trim()) errors.push("Message is required");

  // Highlight empty fields
  [name, email, message].forEach(field => {
    if (!field.value.trim()) {
      field.style.borderColor = 'red';
    } else {
      field.style.borderColor = '';
    }
  });

  // Show alert if there are errors (does NOT prevent submission)
  if (errors.length) {
    alert(errors.join("\n"));
  }
});