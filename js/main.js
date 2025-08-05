// --- Apparition des sections au scroll ---
const sections = document.querySelectorAll("section");

const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// --- Gestion des modales projets ---
function openModal(title, desc, tech, link) {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-desc").textContent = desc;
  document.getElementById("modal-tech").textContent = "Technologies : " + tech;
  const linkElement = document.getElementById("modal-link");
  linkElement.href = link;
  linkElement.setAttribute("aria-label", "Accéder au dépôt GitHub du projet " + title);
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// --- Fermer la modale avec ESC ---
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});