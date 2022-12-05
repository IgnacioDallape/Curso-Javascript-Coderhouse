/*
caja registradora
ingrese el total a pagar
ingrese el total abonado
devuelva el vuelto 
pregunte si quiere seguir operando */

let pregunta;
let consola = parseInt(prompt("ingrese 1 para cobrar, ingrese otro numero para salir"));
while(consola == 1){

        if(consola == 1){
            let cobro = parseInt(prompt("Ingrese el total a pagar"));
            let pago = parseInt(prompt("Ingrese el total abonado"));
            let resultado = pago - cobro;
                if(resultado > 0){
                    console.log("El vuelto es de: " + resultado + " pesos");
                } else {
                    console.log("Se pagaron " + pago + " pesos, no hay que devolver vuelto, gracias!");
                }
        } else {
            console.log("Gracias por su tiempo!")
        }
        consola = parseInt(prompt("Para ingresar otra compra ingrese 1 o ingrese otro numero para salir"));
            if(consola !== 1){
                console.log("Gracias por su compra, vuelva pronto!")
            }
}