function generatePDF(data) {
    const { nombre, fecha, descripcion } = data;

    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Informe Pericial", 20, 20);
    doc.setFontSize(12);
    doc.text(`Nombre: ${nombre}`, 20, 30);
    doc.text(`Fecha: ${fecha}`, 20, 40);
    doc.text(`Descripción:`, 20, 50);
    doc.text(descripcion, 20, 60);

    doc.save("informe_pericial.pdf");
}

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const data = {
        nombre: document.getElementById("nombre").value,
        fecha: document.getElementById("fecha").value,
        descripcion: document.getElementById("descripcion").value
    };

    generatePDF(data);
});