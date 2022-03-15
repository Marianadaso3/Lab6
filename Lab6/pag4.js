import 'animate.css';
import "bootstrap/dist/css/bootstrap.css";
import "./css/style.css";
const titulo = document.getElementById("titulo");
titulo.innerHTML = "¡Bienvenido has entrado a la anecdota de mi verguenza en el super! ";
titulo.style = "color:rgb(255, 255, 255)";
const subtitulo = document.getElementById("subtitulo");
subtitulo.innerHTML = "Estas a punto de formar parte de una de las mejores historias";
import imagen from "./img/sup.jpg";
const img = document.getElementById("img");
img.src = imagen;
const p1 = document.getElementById("p1");
p1.innerHTML = `Todo empieza cuando fui con mi compañera de cuarto Natasha a hacer el super. Ella es super linda pero es una persona
muy nerviosa. Cualquier cosa la altera, especialmente todo este tema del COVID. 
Pues estabamos justamente en la fila haciendo cola para pagar cuando me atoro con saliva 
y empiezo a toser y la Natasha se altera. `;
const p2 = document.getElementById("p2");
p2.innerHTML = `Me pregunta que qué me pasa pero no puedo 
responderle porque me estoy atorando. Luego, de manera agresiva me empieza a preguntar
nuevamente si he estado con mucha gente últimamente ¡EN MEDIA FILA DEL SUPER! Y claro no puedo contestar.
Me empieza a preguntar sobre mi temperatura corporal y la gente empieza a observarnos; 
luego empieza a preguntarme si perdi el gusto o si tengo algún tipo de dolor 
muscular... y yo estoy como de: ¡Natasha calmate por dios! Y luego del S H O W, 
me desatoro y trato de actuar como si no hubiera pasado nada. Sin embargo, Natasha
me la pone difícil ya que luego de que me calmé se ¡PONE A 3 METROS DE MI!`;
import audio from "./img/tos.ogg";
const sonido = document.getElementById("sonido");
sonido.src = audio;