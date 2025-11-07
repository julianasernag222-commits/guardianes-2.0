const items = document.querySelectorAll(".item");
const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");

const parques = [
  {
    nombre: "Simón Bolívar",
    descripcion: "El Parque Simón Bolívar es uno de los pulmones verdes de Itagüí, ideal para caminar, descansar y disfrutar en familia."
  },
  {
    nombre: "Parque Obrero",
    descripcion: "El Parque Obrero es un punto emblemático rodeado de comercio local, donde se realizan actividades culturales y sociales."
  },
  {
    nombre: "Parque Principal",
    descripcion: "El Parque Principal de Itagüí es el corazón cultural del municipio, frente a la iglesia de Nuestra Señora del Rosario."
  },
  {
    nombre: "Parque del Artista",
    descripcion: "El Parque del Artista es uno de los escenarios más reconocidos por sus conciertos, ferias y eventos al aire libre."
  },
  {
    nombre: "Parque de Itagüí",
    descripcion: "El Parque de Itagüí combina naturaleza, arte y cultura, ofreciendo un espacio perfecto para el encuentro ciudadano."
  }
];

// Cuando se hace clic en una imagen
items.forEach(item => {
  item.addEventListener("click", () => {
    // Quita la clase activa de todas
    items.forEach(i => i.classList.remove("activo"));
    // Activa la seleccionada
    item.classList.add("activo");

    // Muestra la info correspondiente
    const index = parseInt(item.dataset.index);
    titulo.textContent = parques[index].nombre;
    descripcion.textContent = parques[index].descripcion;
  });
});
