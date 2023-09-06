

// Función para cargar y mostrar productos
function loadProducts() {
    fetch('http://localhost:8080/api/products') // Ajusta la URL según la ubicación de tu backend
        .then(response => response.json())
        .then(data => {
            // Procesa y muestra los datos en la página
            displayProducts(data);
        })
        .catch(error => {
            console.error('Error loading products:', error);
        });
}
function displayProducts(products) {
    const productList = document.getElementById('product-list'); // Supongamos que tienes un elemento <ul> con el ID 'product-list'

    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span>Precio: $${product.price}</span>
        `;
        productList.appendChild(listItem);
    });
}
