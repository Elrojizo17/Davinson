document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const selected = dropdown.querySelector(".dropdown-selected");
  const list = dropdown.querySelector(".dropdown-list");

  // Abrir/cerrar menú
  selected.addEventListener("click", () => {
    list.style.display = list.style.display === "block" ? "none" : "block";
  });

  // Cerrar si se hace clic fuera
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      list.style.display = "none";
    }
  });
});
