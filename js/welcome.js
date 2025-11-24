let usu = document.getElementById("usu");
let usuname = document.createElement("h1");
usuname.textContent = localStorage.getItem("user");
usu.appendChild(usuname);

setTimeout(() => {
  presentation.style.display = "none";
  main.style.display = "block";

  // Crear cursor una sola vez
  let cursor = document.createElement("span");
  cursor.classList.add("cursor");
  lienzo.appendChild(cursor);

  escribirLetra(cursor);
}, 300);

let indice = 0;
let texto =
  "Airbus 320, viernes 19 de Julio de 1982. Te diriges a Estados Unidos desde España en un viaje empresarial. Después de 6 horas de viaje, la mayoria de " +
  "pasajeros se encontraban durmiendo cuando un golpe seco, sacudió el avión. Todos entran en pánico, las luces de emergencia y las máscarillas se activan. Un segundo golpe más violento que el primero rompe el avión por la mitad, y lo último que sientes es un golpe en la cabeza.";

let lienzo = document.getElementById("historia");

function escribirLetra(cursor) {
  if (indice < texto.length) {
    let letra = document.createElement("span");
    letra.textContent = texto[indice];
    letra.style.opacity = 0;
    letra.style.transition = "opacity 0.3s";

    // Insertamos la letra ANTES del cursor
    lienzo.insertBefore(letra, cursor);

    setTimeout(() => {
      letra.style.opacity = 1;
    }, 10);
    indice++;

    let delay = 10;
    if (
      texto[indice - 1] === "." ||
      texto[indice - 1] === "," ||
      texto[indice - 1] === ";"
    ) {
      delay = 30;
    }

    setTimeout(() => escribirLetra(cursor), delay);
  } else {
    setTimeout(() => {
      window.location.href = "scene1.html"; 
    }, 2000); 
  }
}
