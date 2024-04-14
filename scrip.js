document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón "Agregar al Carrito"
    var addToCartButtons = document.querySelectorAll(".agregar-carrito");

    // Agregar un evento de clic a cada botón "Agregar al Carrito"
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", addToCartClicked);
    });

    // Función para manejar el clic en el botón "Agregar al Carrito"
    function addToCartClicked(event) {
        var button = event.target;
        var product = button.parentElement.parentElement.parentElement;
        var productImage = product.querySelector(".zoom-img").getAttribute("src");
        var productName = product.querySelector("h1").innerText;
        var productPrice = product.querySelector("p").innerText;

        agregarAlCarrito(productName, productPrice, productImage);
    }

    // Función para agregar un producto al carrito
    function agregarAlCarrito(nombre, precio, imagen) {
        var cartRow = document.createElement("tr");
        cartRow.innerHTML = `
            <td><img src="${imagen}" width="50"></td>
            <td>${nombre}</td>
            <td>${precio}</td>
        `;
        document.getElementById("lista-carrito").appendChild(cartRow);
        actualizarTotal();
    }

    // Función para actualizar el total del carrito
    function actualizarTotal() {
        var carritoItemContainer = document.getElementById("lista-carrito");
        var cartRows = carritoItemContainer.getElementsByTagName("tr");
        var total = 0;
        for (var i = 0; i < cartRows.length; i++) {
            var cartRow = cartRows[i];
            var precioElemento = cartRow.getElementsByTagName("td")[2];
            var precio = parseFloat(precioElemento.innerText.replace("$", ""));
            total += precio;
        }
        document.getElementsByClassName("total-carrito")[0].innerText = "$" + total.toFixed(2);
    }
});
