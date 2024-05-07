document.addEventListener('DOMContentLoaded', function () {
    // Obtener usuario guardado o crear uno nuevo si no existe
    let usuarioEspecifico = JSON.parse(localStorage.getItem('usuarioEspecifico'));
    if (!usuarioEspecifico) {
        usuarioEspecifico = {
            correo: 'admin@admin.com',
            contraseña: '1817'
        };
        localStorage.setItem('usuarioEspecifico', JSON.stringify(usuarioEspecifico));
    }

    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); 
        
        const correo = this.userEmail.value;
        const contraseña = this.userPassword.value;

        if (correo === usuarioEspecifico.correo && contraseña === usuarioEspecifico.contraseña) {
            window.location.href = 'admin.html';
        } else {
        }
    });

    // Código para la barra lateral
    const links = document.querySelectorAll('.sidebar a');

    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const logoutLink = document.querySelector('.sidebar a[href="login.html"]');
    if (logoutLink) {
        logoutLink.addEventListener('click', function() {
            // Aquí puedes agregar la lógica para cerrar la sesión
            // Por ejemplo, puedes eliminar el usuario guardado de Local Storage
            localStorage.removeItem('usuarioEspecifico');
        });
    }
});
