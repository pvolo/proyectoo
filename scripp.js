document.addEventListener("DOMContentLoaded", function() {
    const agregarCarritoBtns = document.querySelectorAll('.agregar-carrito');
    const carrito = document.getElementById('lista-carrito').querySelector('tbody');

    agregarCarritoBtns.forEach(btn => {
        btn.addEventListener('click', agregarAlCarrito);
    });

    function agregarAlCarrito(event) {
        event.preventDefault();
        const btn = event.target;
        const producto = {
            id: btn.getAttribute('data-id'),
            nombre: btn.getAttribute('data-name'),
            precio: btn.getAttribute('data-price'),
            cantidad: 1
        };

        // Verificamos si el producto ya está en el carrito
        const filaExistente = carrito.querySelector(`[data-id="${producto.id}"]`);
        if (filaExistente) {
            const cantidad = parseInt(filaExistente.querySelector('.cantidad').innerText) + 1;
            filaExistente.querySelector('.cantidad').innerText = cantidad;
        } else {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td class="cantidad">1</td>
                <td><button class="borrar">X</button></td>
            `;
            fila.setAttribute('data-id', producto.id);
            carrito.appendChild(fila);
        }
    }
});