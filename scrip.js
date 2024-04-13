// Obtener el botón Agregar al Carrito
const agregarCarritoBtn = document.querySelector('.agregar-carrito');

// Agregar evento al hacer clic en el botón
agregarCarritoBtn.addEventListener('click', agregarAlCarrito);

// Función para agregar al carrito
function agregarAlCarrito(event) {
    event.preventDefault();
    
    // Obtener datos del producto
    const id = agregarCarritoBtn.dataset.id;
    const name = agregarCarritoBtn.dataset.name;
    const price = agregarCarritoBtn.dataset.price;

    // Crear objeto de producto
    const producto = {
        id: id,
        name: name,
        price: price,
        quantity: 1 // Ajustar la cantidad según necesites
    };

    // Aquí puedes agregar la lógica para agregar el producto al carrito
    console.log('Producto agregado al carrito:', producto);
}
