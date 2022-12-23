//Coleccion de superautos, solo se posee una unidad por superauto
class autosTotales{
    constructor(marca,modelo,anio,color,valoracionpersonal){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = parseInt(anio);
        this.color = color;
        this.valoracionpersonal = parseInt(valoracionpersonal); 

    }
    
}


const superautos = [

new autosTotales("Lamborghini","Diablo","2005","Negro","8"),
new autosTotales("Ferrari", "Rosso", "2013", "Rojo", "9.5"),
new autosTotales("Audi", "R8", "2022", "Blanco", "7"),    
new autosTotales("Mercedes Benz", "Class C", "2019", "Gris","10"),
new autosTotales("Mitsubishi", "Lancer 2000", "2008", "Rojo", "9"),
new autosTotales("Porsche", "911", "2017", "Negro", "10"),   
new autosTotales("Buggatti", "Veyron", "2017", "Gris", "10"),
]


let ingresarAutos = true
    while(ingresarAutos){
                let nuevoAuto = prompt('Ingresa los datos auto: marca, modelo, año, color, puntaje de 1 a 10, separados por una coma ( , ). Ingresa X para finalizar');
                if(nuevoAuto.toUpperCase() == "X"){
                    ingresarAutos = false;
                    break;
                }
            
                let datos = nuevoAuto.split(",");
                const adquisicion = new autosTotales(datos[0],datos[1],datos[2],datos[3],datos[4]);
                superautos.push(adquisicion);
                console.log(superautos)
                
                }

function elegir(array){
    let consultando = true
        while(consultando){
                let opcionConsulta = prompt("Ingrese: \n1. Para ver en orden alfabetico los autos (A-Z). \n2. Para ver en orden alfabetico invertido los autos (Z-A). \n3. Para ver en orden mas nuevo a mas antiguo \n4. Para ver en orden mas antiguo a mas nuevo \n5. Para ver de mayor a menor valoracion \n6. Para salir presione 6");
                let superautosOrdenados = superautos.slice(0)  

                        if(opcionConsulta == "1"){
                            let superautosAZ = superautosOrdenados.sort((a,b) => a.marca.localeCompare(b.marca));
                            return superautosAZ;

                        }   else if(opcionConsulta == "2") {
                            let superautosZA = superautosOrdenados.sort((a,b) => b.marca.localeCompare(a.marca));
                            return superautosZA;
                        }   else if(opcionConsulta == "3") {
                            let superautosMasNuevo = superautosOrdenados.sort((a,b) => b.anio - a.anio);
                            return superautosMasNuevo
                        }   else if(opcionConsulta == "4") {
                            let superautosMasViejo = superautosOrdenados.sort((a,b) => a.anio - b.anio);
                            return superautosMasViejo
                        }   else if(opcionConsulta == "5") {
                            let superautosMejorValorado = superautosOrdenados.sort((a,b) => b.valoracionpersonal - a.valoracionpersonal);
                            return superautosMejorValorado
                        }   else if(opcionConsulta == "6") {
                            alert("Vuelva pronto!")
                            consultando = false
                            break

                        } else {
                            alert("Opcion Incorrecta!")
                            let opcionConsulta = prompt("Ingrese: \n1. Para ver en orden alfabetico los autos (A-Z). \n2. Para ver en orden alfabetico invertido los autos (Z-A). \n3. Para ver en orden mas nuevo a mas antiguo \n4. Para ver en orden mas antiguo a mas nuevo \n5. Para ver de mayor a menor valoracion \n6. Para salir presione cualquier otra tecla");

                        }
                    }
    } 

function crearStringAutos(arrayAutos){
    let info = "";

    arrayAutos.forEach(superautos => {
        info += "Marca: " + superautos.marca + "\nModelo: " + superautos.modelo + "\nAño: " + superautos.anio + "\nColor: " + superautos.color + "\nValoración: " + superautos.valoracionpersonal + " Puntos. \n\n"
        
    });

    return info;
}

alert(crearStringAutos(elegir()))