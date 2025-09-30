// contactForm.js
export async function setupContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  const errorName = document.querySelector("#error-name");
  const errorEmail = document.querySelector("#error-email");
  const errorMessage = document.querySelector("#error-message");

  // Container voor algemene meldingen
  let generalMessage = document.querySelector("#form-message");
  if (!generalMessage) {
    generalMessage = document.createElement("div");
    generalMessage.id = "form-message";
    form.prepend(generalMessage);
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Reset fouten
    errorName.textContent = "";
    errorEmail.textContent = "";
    errorMessage.textContent = "";
    generalMessage.textContent = "";
    generalMessage.className = "";

    const formData = {
      name: document.querySelector("#name").value.trim(),
      email: document.querySelector("#email").value.trim(),
      message: document.querySelector("#message").value.trim()
    };

    try {
      const response = await fetch("http://localhost:5206/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errors = await response.json();

        // Laat inline foutmeldingen zien
        if (errors.name) errorName.textContent = errors.name;
        if (errors.email) errorEmail.textContent = errors.email;
        if (errors.message) errorMessage.textContent = errors.message;

        generalMessage.textContent = "⚠️ Please fix the errors below.";
        generalMessage.className = "error-message general";
      } else {
        const data = await response.json();
        generalMessage.textContent = `✅ ${data.message}`;
        generalMessage.className = "success-message general";
        form.reset();
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      generalMessage.textContent = "❌ Something went wrong. Please try again later.";
      generalMessage.className = "error-message general";
    }
  });
}
