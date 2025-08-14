const { jsPDF } = window.jspdf;

function generatePDF(formData) {
    const doc = new jsPDF();
    doc.text('Informe Pericial', 10, 10);

    let y = 20;
    formData.forEach((value, key) => {
        doc.text(`${key}: ${value}`, 10, y);
        y += 10;
    });

    doc.save('informe_pericial.pdf');
}

