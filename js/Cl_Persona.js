export default class Cl_Persona{
    constructor (anioActual, fechaNac){
        this.anioActual = anioActual;
        this.fechaNac = fechaNac;
    }

    set anioActual(a){
        this._anioActual = +a;
}

    get anioActual(){
        return this._anioActual;
    }

    set fechaNac(f){
        this._fechaNac = f;
    }

    get fechaNac(){
        return this._fechaNac;
    }

    edad(){
        return this.anioActual - this.fechaNac;
    }

    CategorizarEdad(){
        if(this.edad() < 13){
            return "Niño";
        }else if(this.edad() < 20){
            return "Adolescente";
        }else if(this.edad() < 40){
            return "Adulto joven";
        }else if(this.edad() < 60){
            return "Adulto medio";
        }else{
            return "Adulto mayor";
        }
    }
}