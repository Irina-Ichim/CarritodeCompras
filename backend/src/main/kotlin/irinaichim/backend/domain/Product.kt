package irinaichim.backend.domain

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id

@Entity
data class Product(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,
    val name: String,
    val description: String,
    val price: Double,
    val imageUrl: String
) {
    // Constructor sin argumentos
    constructor() : this(null, "", "", 0.0, "")
}
