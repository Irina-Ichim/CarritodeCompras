// Agregamos un evento clic a los botones "Ver Detalles"
const promoButtons = document.querySelectorAll(".promo-button");

promoButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const promotion = button.parentElement;
        const details = promotion.querySelector(".promo-details");

        if (details.style.display === "block" || details.style.display === "") {
            details.style.display = "none";
        } else {
            details.style.display = "block";
        }
    });
});
