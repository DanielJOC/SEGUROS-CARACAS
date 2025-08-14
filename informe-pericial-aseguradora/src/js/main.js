// main.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reportForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            const formData = new FormData(form);
            generatePDF(formData);
        } else {
            alert('Por favor, complete todos los campos requeridos.');
        }
    });
});

function validateForm() {
    const fields = document.querySelectorAll('#reportForm input, #reportForm textarea');
    let isValid = true;

    fields.forEach(field => {
        if (!field.value) {
            isValid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });

    return isValid;
}
