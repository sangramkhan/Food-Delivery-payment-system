let cartCount = 0;

function addToCart() {
    cartCount++;
    const badge = document.querySelector('.cart-badge');
    badge.innerText = cartCount;
    
    // Add a little pop animation
    badge.style.transform = 'scale(1.5)';
    setTimeout(() => {
        badge.style.transform = 'scale(1)';
    }, 200);
}
