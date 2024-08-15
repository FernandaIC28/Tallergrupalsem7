function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
document.addEventListener('DOMContentLoaded', () => {
    const regBtn = document.getElementById('regBtn');
    const alertSuccess = document.getElementById('alert-success');
    const alertDanger = document.getElementById('alert-danger');

    regBtn.addEventListener('click', () => {
        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const email = document.getElementById('email').value.trim();
        const password1 = document.getElementById('password1').value;
        const password2 = document.getElementById('password2').value;
        const terminos = document.getElementById('terminos').checked;

        // Limpiar alertas anteriores
        alertSuccess.classList.remove('show');
        alertDanger.classList.remove('show');

        // Validaciones
        if (!nombre || !apellido || !email || !password1 || !password2) {
            showAlertError('Todos los campos son obligatorios.');
            return;
        }

        if (password1.length < 6) {
            showAlertError('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        if (password1 !== password2) {
            showAlertError('Las contraseñas no coinciden.');
            return;
        }

        if (!terminos) {
            showAlertError('Debe aceptar los términos y condiciones.');
            return;
        }

        // Si todas las validaciones pasan
        showAlertSuccess('Datos guardados correctamente.');
    });

    function showAlertSuccess(message) {
        const p = alertSuccess.querySelector('p');
        p.textContent = message;
        alertSuccess.classList.add('show');
    }

    function showAlertError(message) {
        const p = alertDanger.querySelector('p');
        p.textContent = message;
        alertDanger.classList.add('show');
    }
});
