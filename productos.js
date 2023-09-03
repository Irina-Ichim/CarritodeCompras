

// Función para cargar y mostrar productos
function loadProducts() {
    fetch('/api/products') // Ajusta la URL según la ubicación de tu backend
      .then(response => response.json())
      .then(data => {
        // Procesa y muestra los datos en la página
        displayProducts(data);
      })
      .catch(error => {
        console.error('Error loading products:', error);
      });
  }
  
  // Función para mostrar productos en la página
  function displayProducts(products) {
    // Tu lógica para mostrar los productos en la página
    // Esto podría incluir manipulaciones del DOM para agregar elementos HTML, etc.
  }
  
  // Llama a la función para cargar productos cuando la página se carga completamente
  window.addEventListener('load', loadProducts);
  