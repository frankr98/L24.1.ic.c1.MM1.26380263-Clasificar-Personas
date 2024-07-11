export default class Cl_IPersona{
    leerAnioActual(){
        return prompt("Ingrese el año actual");
    }
    leerFechaNac(){
        return prompt("Ingrese el año de nacimiento");
    }

    reportePersona(e, ce){
        return`
        <h1>CLASIFICACIÓN DE PERSONAS</h1>
        <br> Edad: ${e}
        <br> Grupo de edad al que pertenece: ${ce}
        `
    }
}