class Vehiculo{

    constructor(tipo,marca,referencia,modelo){
        this._tipo=tipo;
        this._marca=marca;
        this._referencia=referencia;
        this._modelo=modelo;
        this._cilindraje=cilindraje;
    }

    mostrar(){

        console.log(`El tipo del vehículo es ${this._tipo}, la marca es: ${this._marca}, la referencia es: ${this._referencia}, el modelo es: ${this._modelo}`);
    }

    acelerar(){

        console.log(`${this._marca} ${this._referencia} ${this._modelo} aceleró `);
    }

    frenar(){

        console.log(`${this._marca} ${this._referencia} ${this._modelo} frenó `);
    }
}


class Combustion extends Vehiculo{
    constructor(tipo, marca,referencia,modelo,cilindraje){
        super(tipo,marca,referencia,modelo,cilindraje);
        this._cilindraje=cilindraje;
    }

    combustionMostrar(){

        console.log(this.mostrar() + ", el cilindraje es: "+cilindraje); 
    }
}

carro1 = new Vehiculo("sedan","mazda","323","2002");
carro1.mostrar();


carro = new Combustion("sedan","mazda","323","2002","2000");
carro.combustionMostrar();











/* carros=[];

let n=parseInt(prompt("Ingresa cuantos carros quieres de comalmacenar"));

for(let i=0;i<n;i++){

    carro = new Vehiculo();
    carro._tipo=prompt("Ingrese el tipo del vehículo");
    carro._marca=prompt("Ingrese la marca del vehículo");
    carro._referencia=prompt("Ingrese la referencia del vehículo");
    carro._modelo=prompt("Ingrese el modelo del vehículo");
    carro._cilindraje=prompt("Ingrese el cilindraje del vehículo");
    carros.push(carro);

}


console.log(`Los carros son ${carros}`); */


