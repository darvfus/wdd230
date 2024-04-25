document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  // Verificar si los elementos existen antes de añadir el event listener
  if (menuToggle && menu) {
    menuToggle.addEventListener("click", function() {
      // Alternar la visibilidad del menú
      menu.classList.toggle("open");
    });
  } else {
    console.error("No se encontraron los elementos necesarios para el menú de hamburguesa.");
  }
});
