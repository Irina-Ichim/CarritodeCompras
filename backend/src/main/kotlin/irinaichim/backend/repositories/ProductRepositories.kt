package irinaichim.backend.repositories

import org.springframework.data.jpa.repository.JpaRepository
import irinaichim.backend.domain.Product

interface ProductRepository : JpaRepository<Product, Long> {

    // Puedes agregar métodos de consulta personalizados aquí si es necesario
}
