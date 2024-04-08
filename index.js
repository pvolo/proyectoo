const btnCart = document.querySelector('.container-icon')
const containerCartsProducts=document.querySelector('.container-cart-products')
btnCart.addEventListener('click',()=>{
    containerCartsProducts.classList.toggle('hidden-cart')
})