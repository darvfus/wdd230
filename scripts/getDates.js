document.addEventListener("DOMContentLoaded", function() {
  var yearSpan = document.getElementById("year");
  var lastModifiedParagraph = document.getElementById("lastModified");
  
  var ultimaModificacion = new Date(document.lastModified);
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  var fechaFormato = ultimaModificacion.toLocaleString('en-US', options);

  lastModifiedParagraph.textContent = "Last Modified: " + fechaFormato;

  var year = new Date().getFullYear();
  yearSpan.textContent = year;
});
