/*
caja registradora
ingrese el total a pagar
ingrese el total abonado
devuelva el vuelto 
pregunte si quiere seguir operando */

let pregunta; let resultado; let cobro; let pago; let restante;
function calcularResultado(){
    cobro = parseInt(prompt("Ingrese el total a pagar"));
    pago = parseInt(prompt("Ingrese el total abonado"));
    resultado = pago - cobro;
    restante = cobro - pago;
}

let consola = parseInt(prompt("ingrese 1 para cobrar, ingrese otro numero para salir"));
while(consola == 1){

        if(consola == 1){
            calcularResultado()
                if(resultado > 0){
                    console.log("El vuelto es de: " + resultado + " pesos");
                } else if (resultado < 0){
                    console.log("ha pagado $" + pago + ", y debia pagar la suma de $", + cobro + ", por lo tanto le falta abonar un total de: $" + restante)
                }
                
                else{
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