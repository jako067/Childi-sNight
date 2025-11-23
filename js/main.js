let lineas = [
  { tipo: "Desconocida1", texto: "Desconocida1: Parece que comienza a abrir los ojos." },
  { tipo: "Desconocido2", texto: "Desconocido2: Ey, puedes oírnos? Te acuerdas de algo?" },
  { tipo: "narracion", texto: "Lentamente comienzas a diferenciar figuras, ves los restos de un avión con 5 personas alrededor..." },
  { tipo: "Desconocida1", texto: "Desconocida1: Tienes que levantarte rápido, no hay tiempo" },
  { tipo: "Desconocido2", texto: "Desconocido2: Tenemos que ponernos a recoger todo del avión lo antes posible..." },
  { tipo: "narracion", texto: "Te levantas y te diriges al avión" }
];

let lienzo = document.getElementById("textillo");

let indiceLinea = 0;   // ← EL ÍNDICE QUE RECORRE CADA LÍNEA
let indiceLetra = 0;   // ← EL ÍNDICE QUE RECORRE LAS LETRAS DE CADA LÍNEA
let spanActual;        // ← SPAN DONDE SE VA ESCRIBIENDO CADA LÍNEA

function escribirLinea() {

  // Si ya escribimos todas las líneas, termina.
  if (indiceLinea >= lineas.length) return;

  let linea = lineas[indiceLinea];

  // Si estamos empezando una línea, creamos el span una sola vez.
  if (indiceLetra === 0) {
    spanActual = document.createElement("span");
    spanActual.className = linea.tipo === "narracion" ? "narracion" : "personaje";
    spanActual.style.display = "block"; 
    lienzo.appendChild(spanActual);
  }

  // Añadir la letra actual
  spanActual.textContent += linea.texto[indiceLetra];
  indiceLetra++;

  // Si todavía quedan letras → seguir
  if (indiceLetra < linea.texto.length) {
    setTimeout(escribirLinea, 50);

  } else {
    // Terminó la línea → pasar a la siguiente
    indiceLinea++;
    indiceLetra = 0;
    setTimeout(escribirLinea, 300); // pequeña pausa antes de la siguiente
  }
}

// Empezar
escribirLinea();
