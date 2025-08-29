// contactForm.js
export async function setupContactForm() {
  const form = document.querySelector("#contact-form");

  if (!form) return; // prevent errors if form is not on the page

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      Name: document.querySelector("#name").value.trim(),
      Email: document.querySelector("#email").value.trim(),
      Message: document.querySelector("#message").value.trim()
    };

    try {
      const response = await fetch("http://localhost:5206/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errors = await response.json();
        console.error("Validation errors:", errors);
        alert("⚠️ Validation failed! Check the console for details.");
      } else {
        const data = await response.json();
        alert(`✅ ${data.message}`);
        form.reset();
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("❌ Something went wrong. Please try again later.");
    }
  });
}
