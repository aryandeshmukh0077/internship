const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const demoForm = document.getElementById("demoForm");
const formMessage = document.getElementById("formMessage");

demoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.classList.remove("error");

  if (!demoForm.checkValidity()) {
    formMessage.textContent = "Please enter a valid name, work email, and team size.";
    formMessage.classList.add("error");
    demoForm.reportValidity();
    return;
  }

  const name = document.getElementById("name").value.trim();
  formMessage.textContent = `Thanks, ${name}! Your demo request has been recorded for this preview.`;
  demoForm.reset();
});
