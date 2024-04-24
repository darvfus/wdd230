document.addEventListener("DOMContentLoaded", function() {
    var yearSpan = document.getElementById("year");
    var lastModifiedParagraph = document.getElementById("lastModified");
    
    var ultimaModificacion = new Date(document.lastModified);
    var fechaFormato = ultimaModificacion.toLocaleString('es-ES', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
  
    lastModifiedParagraph.textContent = "lastModified: " + fechaFormato;
  
    var year = new Date().getFullYear();
    yearSpan.textContent = year;
  });