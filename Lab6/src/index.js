import 'animate.css';
import "bootstrap/dist/css/bootstrap.css";
import "./css/style.css";


const saludo = document.getElementById("saludo");
saludo.innerHTML = "¡Bienvenido!";
saludo.style = "color:rgb(9, 24, 87);";
saludo.align = "center";

const titulo = document.getElementById("titulo");
titulo.innerHTML =
  "Estas a punto de formar parte de una de las mejores anécdotas ";

import image from "./img/travel.jpg";
const img = document.getElementById("img");
img.src = image;

const contenido = document.getElementById("contenido");

const p1 = document.createElement(p1);
p1.innerHTML = `A continuación vas a presenciar historias inolvidables que me ocurrieron en un viaje de intercammbio.
Acomodate y selecciona las diferentes anecdotas que te gustaría leer.`;

const subtitulo = document.getElementById("titulo");
subtitulo.innerHTML = "Conoce mas sobre las experiencias de intercambios";

const detalle = document.getElementById("detail");
detalle.innerHTML =
  " Un intercambio te permite vivir de manera condensada, experiencias que permiten desarrollar aptitudes necesarias para la vida.Aprenderás sobre finanzas personales, normas de convivencia y gestión de recursos. Probablemente sea tu primera vez viviendo sólo, con un presupuesto reducido y con personas que hace un mes atrás no conocías.";
