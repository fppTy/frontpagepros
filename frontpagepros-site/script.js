// mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // close on link click
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// year
document.getElementById("year").textContent = new Date().getFullYear();

// contact form: free default behavior = opens user's email app
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = encodeURIComponent(document.getElementById("name").value.trim());
    const email = encodeURIComponent(document.getElementById("email").value.trim());
    const business = encodeURIComponent(document.getElementById("business").value.trim());
    const message = encodeURIComponent(document.getElementById("message").value.trim());

    const subject = encodeURIComponent(`Front Page Pros Inquiry - ${decodeURIComponent(name)}`);
    const body =
      encodeURIComponent(
`Name: ${decodeURIComponent(name)}
Email: ${decodeURIComponent(email)}
Business/Website: ${decodeURIComponent(business)}

Message:
${decodeURIComponent(message)}
`);

    // change this email anytime
    window.location.href = `mailto:hello@frontpagepros.com?subject=${subject}&body=${body}`;

    if (note) {
      note.textContent = "Email draft opened in your email app. If it didn’t open, make sure a default mail app is set up on your device.";
    }
  });
}
