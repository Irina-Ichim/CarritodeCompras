// Obtener elementos del formulario
const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Obtener elementos de los enlaces
const registerLink = document.getElementById('register-link');
const forgotPasswordLink = document.getElementById('forgot-password-link');

// Agregar evento de clic al enlace de registro
registerLink.addEventListener('click', () => {
    // Redirigir a la página de registro (reemplaza 'registro.html' con la URL correcta)
    window.location.href = 'registro.html';
});

// Agregar evento de clic al enlace de olvidó la contraseña
forgotPasswordLink.addEventListener('click', () => {
    // Redirigir a la página de recuperación de contraseña (reemplaza 'recuperar.html' con la URL correcta)
    window.location.href = 'recuperar.html';
});

// Agregar evento de envío al formulario
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar el envío por defecto

    // Validar el formulario aquí (agregar tu lógica de validación)

    // Ejemplo simple: verificar si los campos no están vacíos
    if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('Por favor, complete todos los campos.');
    } else {
        // Enviar el formulario (puedes agregar tu lógica de inicio de sesión aquí)
        alert('Inicio de sesión exitoso.');
        form.reset(); // Restablecer el formulario después del inicio de sesión
    }
});
