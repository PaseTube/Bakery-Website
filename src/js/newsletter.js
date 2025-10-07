export async function initNewsletterForm() {
    const form = document.querySelector(".news-form");
    const popup = document.querySelector(".newsletter-popup");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // voorkomt page refresh

        const email = document.querySelector("#newsletter-email").value.trim();
        if (!email) {
            showPopup("❌ Vul een geldig e-mailadres in.");
            return;
        }

        try {
            // const response = await fetch("https://localhost:5206/api/Newsletter/Subscribe", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({ email })
            // });

            // const data = await response.json();

            if (data.success) {
                showPopup("✅ " + data.message);
                form.reset();
            } else {
                showPopup("❌ " + data.message);
            }
        } catch (err) {
            console.error(err);
            showPopup("❌ Er is iets misgegaan, probeer opnieuw.");
        }
    });

    function showPopup(message) {
        popup.textContent = message;
        popup.classList.add("show");

        setTimeout(() => {
            popup.classList.remove("show");
        }, 3000);
    }
}
