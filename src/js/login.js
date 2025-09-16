// Replace with SHA256 hash of your secret key
const correctHash = "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824"; // passkey = hello

async function hashInput(input) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
              .map(b => b.toString(16).padStart(2, "0"))
              .join("");
}

document.getElementById("keyForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputKey = document.getElementById("keyInput").value;
  const hash = await hashInput(inputKey);

  if (hash === correctHash) {
    sessionStorage.setItem("auth", "granted");
    window.location.href = "crud.html";
  } else {
    alert("Invalid Key");
  }
});
