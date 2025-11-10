const items = document.querySelectorAll(".item");
const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");

const parques = [
  {
    nombre: "Acuaparque Ditaires",
    descripcion: "Este balneario es un centro recreativo con piscinas para toda la familia."
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
    nombre: "Parque de las Chimeneas",
    descripcion: "Cuenta con un escenario al aire libre, chorros de agua y una estructura metálica con efectos de luces y agua. También conserva las chimeneas históricas del lugar."
  }
];

items.forEach(item => {
  item.addEventListener("click", () => {
    
    items.forEach(i => i.classList.remove("activo"));
  
    item.classList.add("activo");

    const index = parseInt(item.dataset.index);
    titulo.textContent = parques[index].nombre;
    descripcion.textContent = parques[index].descripcion;
  });
});
