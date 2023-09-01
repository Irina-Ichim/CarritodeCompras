const eventos = [
  {
    fecha: "2023-09-20",
    hora: "10:00",
    titulo: "Adopción de Mascotas",
    descripcion:
      "Ven y encuentra a tu nuevo amigo peludo. ¡Habrá muchas mascotas esperando un hogar amoroso!",
    ubicacion: "Tienda de Mascotas",
  },
  {
    fecha: "2023-09-25",
    hora: "14:30",
    titulo: "Taller de Cuidado de Mascotas",
    descripcion:
      "Aprende consejos y trucos para mantener a tus mascotas felices y saludables.",
    ubicacion: "Sala de Capacitación",
  },
  {
    fecha: "2023-09-30",
    hora: "16:00",
    titulo: "Concurso de Disfraces para Mascotas",
    descripcion:
      "¡Viste a tu mascota con el disfraz más creativo y gana increíbles premios! Habrá desfiles y diversión para todos.",
    ubicacion: "Parque Central",
  },
];

// Función para mostrar los eventos en la página
function mostrarEventos() {
  const eventList = document.getElementById("event-list");
  eventList.innerHTML = "";

  eventos.forEach((evento) => {
    const eventItem = document.createElement("li");
    let eventoHTML = `
            <h3>${evento.titulo}</h3>
            <p ><strong>Fecha:</strong> ${evento.fecha} a las ${evento.hora}</p>
            <p><strong>Ubicación:</strong> ${evento.ubicacion}</p>
            <p>${evento.descripcion}</p>
            <p><a href="contacto.html" style="color: #007f7e;">¡Regístrate aquí para más información!</a></p>
        `;
    eventItem.innerHTML = eventoHTML;
    eventList.appendChild(eventItem);
  });
}

// Mostrar los eventos al cargar la página
document.addEventListener("DOMContentLoaded", mostrarEventos);
