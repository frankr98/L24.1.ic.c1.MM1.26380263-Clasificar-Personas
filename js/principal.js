/** análisis
 *  desarrollar un programa que categorice a una persona en base a su edad
 * de acuerdo al año actual y su fecha de nacimiento.
 * 0 - 12 = niño, 13 - 19 = adolescente, 20 - 39 = adulto joven, 40 - 59 = adulto medio, 60+ = adulto mayor.
 */

import Cl_Persona from "./Cl_Persona.js";
import Cl_IPersona from "./Cl_IPersona.js";

let Iper = new Cl_IPersona(),
    a = Iper.leerAnioActual(),
    f = Iper.leerFechaNac(),

    Per = new Cl_Persona(a, f),
    salida = document.getElementById("salida")
    salida.innerHTML = Iper.reportePersona(Per.edad(), Per.CategorizarEdad())