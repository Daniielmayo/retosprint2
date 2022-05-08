import { hotelsData } from "./resources/data.js";

const cardImageHotel = document.getElementById("hotelImage");

hotelsData.forEach((e) => {
  const contenido = document.createElement("div");
  contenido.setAttribute("class", "card");

  const contenidoHotels = document.createElement("section");
  contenidoHotels.setAttribute("class", "cardHotel--contenido");

  const titleHotel = document.createElement("h3");
  titleHotel.setAttribute("class", "titleHotel");
  titleHotel.textContent = e.name;

  const imageHotel = document.createElement("img");
  imageHotel.setAttribute("class", "card__img");
  imageHotel.setAttribute("src", e.photo);
  imageHotel.setAttribute("alt", "imagen del hotel " + e.name);

  // imageHotel.addEventListener("click", ()=>contenido(e));

  cardImageHotel.appendChild(contenido);
  contenido.appendChild(titleHotel);
  contenido.appendChild(contenidoHotels);
  contenidoHotels.appendChild(imageHotel);
});
