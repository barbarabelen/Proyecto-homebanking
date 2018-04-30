//Declaración de variables
let saldoCuenta = 3800;
const nombreUsuario = "Barbara Imperatori";

let limiteExtraccion = 1000;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla(nombreUsuario);
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();


// funciones extra

function sumarDinero(ingresoDinero){
    saldoCuenta += ingresoDinero;
}

function restarDinero(egresoDinero){
    saldoCuenta -= egresoDinero;
}

function valorIngresadoNoEsNumero(valorIngresado){
    return isNaN(valorIngresado);
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    let limiteAnteriorAExtraccion = limiteExtraccion;
    let cambioLimite = parseInt(prompt("Ingrese el nuevo límite de extracción."));
    
    if (valorIngresadoNoEsNumero(cambioLimite)){
        return alert("Sólo se deben ingresar números");
    } else if (cambioLimite > saldoCuenta){
        return alert("Saldo insuficiente para realizar esta operación");
    } else {
        limiteExtraccion = cambioLimite;
    }

    alert("Nuevo límite de extracción: $" + cambioLimite);

    actualizarLimiteEnPantalla(); 
}


function extraerDinero(quitarDinero) {  
    let saldoAnteriorALaExtraccion = saldoCuenta;
    let cantidadAExtraer = parseInt(prompt("Ingresar la cantidad de dinero a extraer."));
    
    if (valorIngresadoNoEsNumero(cantidadAExtraer)){
        return alert("Sólo se deben ingresar números.");
    } else if(cantidadAExtraer > saldoCuenta){
        return alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
    } else if (cantidadAExtraer % 100 !== 0){
        return alert("Sólo puedes extraer billetes de 100.");
    } else {
        restarDinero(cantidadAExtraer);
    }

    let saldoDespuesDeLaExtraccion = saldoCuenta;
    alert("Saldo anterior: $"+ saldoAnteriorALaExtraccion + "\n" + 
    "Dinero extraído: $" + cantidadAExtraer + "\n" + 
    "Saldo actual: $" + saldoDespuesDeLaExtraccion); 

    actualizarSaldoEnPantalla();
}


function depositarDinero() {
    let saldoAnteriorAlDeposito = saldoCuenta;
    let cantidadADepositar = parseInt(prompt("Ingresar la cantidad de dinero a depositar."));
    if(valorIngresadoNoEsNumero(cantidadADepositar)){
        return alert("Sólo se deben ingresar números");
    } else {
    sumarDinero(cantidadADepositar);
    }

    let saldoDespuesDelDeposito = saldoCuenta;
    alert("Saldo anterior: $"+ saldoAnteriorAlDeposito + "\n" + 
    "Dinero depositado: $" + cantidadADepositar + "\n" + 
    "Saldo actual: $" + saldoDespuesDelDeposito);

    actualizarSaldoEnPantalla(); 
}


function pagarServicio() {
    const agua = 350;
    const telefono = 425;
    const luz = 210;
    const internet = 570;

    let numeroServicio = parseInt(prompt("Ingrese el número que corresponda con el servicio que queres pagar."  +
    "\n" + "1 - Agua" +
    "\n" + "2- Teléfono" + 
    "\n" + "3- Luz" + 
    "\n" + "4- Internet"));


    switch (numeroServicio) {
        case 1:
            pagoDeServicio(agua);
            break;
        case 2:
            pagoDeServicio(telefono);
            break;
        case 3:
            pagoDeServicio(luz);
            break;
        case 4:
            pagoDeServicio(internet);
            break;
        default:
            alert("No existe el servicio que se ha seleccionado.");
    }

    actualizarSaldoEnPantalla();

    }
    function pagoDeServicio (numeroServicio){
        let saldoAnterior = saldoCuenta;
        if(numeroServicio > saldoCuenta){
            alert("Su saldo es insuficiente para efectuar este pago.");
        } else {
            restarDinero(numeroServicio);
            alert("Tu pago ha sido efectuado" + "\n"+
            "Saldo anterior: $" + saldoAnterior + "\n"+
            "Dinero descontado: $" + numeroServicio + "\n"+
            "Saldo actual: $" + saldoCuenta);

    }
}

    
function transferirDinero() {
    const cuentaAmiga1 = 1234567;
    const cuentaAmiga2 = 7654321;

    let saldoAnterior = saldoCuenta;
    let cuentaATransferir = parseInt(prompt("Ingresa la cuenta a la que quieres hacer la transferencia:" +
                                            "\n" + cuentaAmiga1 +
                                            "\n" + cuentaAmiga2));

    if(cuentaATransferir !== cuentaAmiga1 && cuentaATransferir !== cuentaAmiga2){
       return alert("Solo puedes transferir dinero a cuentas amigas.");
    }
    
    let montoATransferir = parseInt(prompt("Ingresa el monto a transferir:"));

    if(montoATransferir > saldoCuenta){
        alert("Saldo insuficiente para realizar esa transferencia.");  
    } else if (montoATransferir < 1){
        alert("El monto ingresado es inválido");
    } else if (valorIngresadoNoEsNumero(montoATransferir)){
        return alert("Sólo se deben ingresar números");
    } else {
        restarDinero(montoATransferir); 
        alert("Se ha transferido $" + montoATransferir +
            "\n" + "Cuenta destino: " + cuentaATransferir);
    }

    actualizarSaldoEnPantalla();
    
}


function iniciarSesion() {
    const codigoDeCuenta = 1234;
    const ingresoDeCodigoDeCuenta = parseInt(prompt("Ingrese el código de su cuenta"));

    if (ingresoDeCodigoDeCuenta === 1234) {
        alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones");
    } else if (ingresoDeCodigoDeCuenta !== 1234) {
        saldoCuenta -= saldoCuenta;
        alert("Código incorrecto, tu dinero ha sido retenido por cuestiones de seguridad.");
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla(nombreUsuario) {
    iniciarSesion();
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}