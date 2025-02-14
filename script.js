// JavaScript for interactivity
function addToCart(product) {
    alert(`${product} has been added to your cart!`);
}

// Optional: Add 3D hover effect using mouse movement
const products = document.querySelectorAll('.product');

products.forEach(product => {
    product.addEventListener('mousemove', (e) => {
        const rect = product.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (offsetY - centerY) / centerY * 20;
        const rotateY = (offsetX - centerX) / centerX * 20;

        product.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    product.addEventListener('mouseleave', () => {
        product.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
});
