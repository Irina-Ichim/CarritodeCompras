package irinaichim.backend.controller


import org.springframework.web.bind.annotation.*
import irinaichim.backend.domain.Product

@RestController
@RequestMapping("/api/products")
class ProductController {

    // Lista de productos ficticios (puedes cargarlos desde una base de datos en la práctica)
    private val products = listOf(
        Product(1, "Producto 1", "Descripción del Producto 1", 19.99, "Img/producto1.jpg"),
        Product(2, "Producto 2", "Descripción del Producto 2", 24.99, "Img/producto2.jpg"),
        Product(3, "Producto 3", "Descripción del Producto 3", 29.99, "Img/producto3.jpg"),
        Product(4, "Producto 4", "Descripción del Producto 4", 14.99, "Img/producto4.jpg")
    )

    // Obtener todos los productos
    @GetMapping
    fun getAllProducts(): List<Product> {
        return products
    }

    // Obtener un producto por ID
    @GetMapping("/{id}")
    fun getProductById(@PathVariable id: Long): Product? {
        return products.find { it.id == id }
    }

    // Crear un nuevo producto (esto sería más complejo con una base de datos real)
    @PostMapping
    fun createProduct(@RequestBody product: Product): Product {
        // Lógica para crear un nuevo producto
        // Puedes agregarlo a la lista o guardar en una base de datos
        // Por simplicidad, solo retornamos el producto recibido
        return product
    }

    // Otros métodos CRUD (Actualizar y Eliminar) pueden agregarse aquí
}
