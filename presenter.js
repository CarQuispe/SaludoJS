import saludo from "./saludo";


const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-saludo");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = Text.parseInt(nombre.value);
  const genero = Text.parseInt(genero.value);
  const edad = Number.parseInt(edad.value);

  div.innerHTML = "<p>" + saludar(nombre, genero,edad) + "</p>";
});