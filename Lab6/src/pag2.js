import 'animate.css';
import "bootstrap/dist/css/bootstrap.css";
import "./css/style.css";


const titulo = document.getElementById("titulo");
titulo.innerHTML =
  " ¡Bienvenido has entrado a la anecdota de mi casi secuestro!";
titulo.style = "color:rgb(255, 255, 255)";

const subtitulo = document.getElementById("subtitulo");
subtitulo.innerHTML =
  "Estas a punto de formar parte de una de las mejores historias";
subtitulo.style = "color:rgb(255, 255, 255)";

import second from "./img/sec.jpg";
const img = document.getElementById("img");
img.src = second;



const p1 = document.getElementById("p1");
p1.innerHTML =
  `Todo empieza cuando..
  Estaba saliendo de la discoteca a las 3 am con un grupo de estudiantes de intercambio de Italia, esa noche 
  se iban a quedar durmiendo en mi apartamento y decidimos pedir un taxi. Usualment no pedimos taxis a esa hora de la 
  madrugada por eso logramos contactar a una persona de confianza.`;
p1.style = "color:rgb(255, 255, 255)";


const p2 = document.getElementById("p2");
p2.innerHTML =
  `  En ese momento lo único que ocurria por mi mente es: ¡Hasta aqui llegaste Mariana
  ... estas secuestrada! Luego el hombre se mete nuevamente con la placa en y vuelve a arrancar 
  con velocidad. Vemos que se acerca a la garita del corredor y NO frena. Sigue agarrando velocidad,
  nos acercamos... ¡Se va a chocar pense! Pero nadie se atrevia a decirle nada. Teníamos miedo...
   Mi amiga empieza a llorar, y ¡PUM! Se choca contra la talanquera del corredor y se la pasa llevando.
   Ahi decidí hablar y le pregunto que ¿Por qué hizo eso? y me responde de que no tenia dinero para pagar
   el corredor. Lo primero que pense era que fue la peor excusa para "secuestrar a alguien", asi que le digo
   de forma callada a mi amigo  Italiano que se llamaba Susse, que si el hombre seguia recto y no cruzaba 
   a la siguiente calle a la derecha (para llegar a mi apartamento), signigicaba que era evidentemente un secuestro.
   Así que como el estaba detras del aciento del hombre le dije que lo agarara por detras y yo colocaba el freno 
   de emergencias y lo activo.`;
p2.style = "color:rgb(255, 255, 255)";


import audio from "./img/sur.ogg";
const sonido = document.getElementById("sonido");
sonido.src = audio;

import audio2 from "./img/vel.mp3";
const sonido2 = document.getElementById("sonido2");
sonido2.src = audio2;

