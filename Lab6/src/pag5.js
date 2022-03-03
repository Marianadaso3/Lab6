import 'animate.css';
import "bootstrap/dist/css/bootstrap.css";
import "./css/style.css";


const titulo = document.getElementById("titulo");
titulo.innerHTML =
  " ¡Comentario!";
titulo.style = "color:hsl(267, 78%, 11%)";

const subtitulo = document.getElementById("subtitulo");
subtitulo.innerHTML = " ¿Cómo creen que afecta en la interacción con los usuarios? ";

import imagen from "./img/sup.jpg";
const img = document.getElementById("img");
img.src = imagen;

const p1 = document.getElementById("p1");
p1.innerHTML = ` Considero que esta interaccion es de suma importancia ya que 
las estrategias enfocadas en la experiencia de los usuarios traen muchos beneficios siemre a las empresas,
pero aparentemente no muchos no saben cómo demostrar esta "efectividad" 
en relación a la inversión de recursos que significa. Pienso que si afecta a la 
interaccion de los usaurios ya que si las empresas vieran con 
claridad las oportunidades que están perdiendo y lo que les cuesta 
cada error en este ámbito mejorarían para "complacer" al usuario. 

Por ende para poder determinar la eficiencia de las medidas orientadas a mejorar la UX es necesario tener una estrategia de medición. Si no están definidos los objetivos ni una forma de evaluar el efecto de los cambios, será muy difícil calcular el retorno.

Por eso son importantes las estrategias y los pasos como entender el negocio y sus objetivos.
o analizar las conversiones y costos, recolectando los datos actuales.
o definir los intereses particulares del proyecto.
o determinar los indicadores (métricas) asociadas a cada una de las dimensiones.
entre otroas. Además es importante para intereactuar tambien con los usuarios en este ámbito el hacer un seguimiento de las medidas aplicadas y analizar su efecto e inclusive crear reportes cada cierto tiempo para ver los avances.
Todo esto para ir tomando las métricas de esos reportes, definir el ROI de las medidas implementadas.`;

const p2 = document.getElementById("p2");
p2.innerHTML = ` El ROI depende mucho de la forma en que se calcula. Las cifras con las que se compara, los factores analizados y los rangos de tiempo afectan directamente a los cálculos.
Al definir una estrategia de medición con parámetros claros y preestablecidos, se tendría la oportunidades
de obtener información confiable que respalde tu inversiones que complaceran deuna manera mas interactica a los usarios, por ello es importante
`;
