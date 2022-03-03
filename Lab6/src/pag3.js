import 'animate.css';
import "bootstrap/dist/css/bootstrap.css";
import "./css/style.css";


const titulo = document.getElementById("titulo");
titulo.innerHTML = "¡Bienvenido has entrado a la anecdota de el corte de pelo!";
titulo.style = style = "color:#380c69";

const subtitulo = document.getElementById("subtitulo");
subtitulo.innerHTML =
  "Estas a punto de formar parte de una de las mejores historias";
subtitulo.style = "color:rgb(255, 255, 255)";

import imagen from "./img/cor.jfif";
const img = document.getElementById("img");
img.src = imagen;

const p1 = document.getElementById("p1");
p1.innerHTML = ` Todo empieza cuando..
Estaba en mi cuarto estudianto y mi pareja de cuarto (una amiga) me pide que le corte el cabello. Le pregunto si esta segura y me afirma.
Vamos a su baño e inicia el desastre. Mi amiga me empieza a pedir estilos específicos y trato de actuar normal pero 
me pongo tensa. En mi vida habia hehco esto y pense que si lo arruinaba se podia molestar y arruinar el ambiente. 
Hago lo MEJOR QUE PUEDO. 
Le meto detalle, pasión y seguridad. `;

const p2 = document.getElementById("p2");
p2.innerHTML = `Y luego despues de tanto manobrear queda torcido, parecian montañas
cuando ella me pidio un corte en forma de V. Me reír porque parecía mas
una cierra que un volcán. Al final lo logré componer y ahora estaba
contenta que pasé de ser un estudiante a peluquera.`;
p2.style = "color:rgb(255, 255, 255)";

import audio from "./img/tij.ogg";
const sonido = document.getElementById("sonido");
sonido.src = audio;
