let NumeroSecreto = 0;
// Declara una variable `NumeroSecreto` y le asigna un valor generado por la función `GenerarNumeroSecreto`.
let Intentos = 0;
let ListaNumeroSorteados = [];
let NumeroMaximo = 10;


function AsignarTextoElementos(Elemento, Texto) {
    let titulo = document.querySelector(Elemento);
    // Selecciona el primer elemento del documento que coincide con el selector `Elemento` y lo asigna a la variable `titulo`.
    titulo.innerHTML = Texto;
    // Cambia el contenido HTML del elemento seleccionado por el valor de `Texto`.
    return;
    // Termina la ejecución de la función (opcional en este caso ya que no hay código adicional).
}

function VerificarIntento() {
    let NumeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);
    // Obtiene el valor del input con id `ValorUsuario`, lo convierte a un número entero y lo asigna a `NumeroDeUsuario`.
    
    console.log(Intentos);
   if(NumeroDeUsuario == NumeroSecreto){
    AsignarTextoElementos('p', `Acertaste el número en ${Intentos} ${(Intentos == 1) ? 'vez' : 'veces'}`);  

    document.getElementById('reiniciar').removeAttribute('disabled');
    // Elimina la propiedad `disabled` del elemento con id `reiniciar`
   }else{
    // El usuario no acertó 
    if (NumeroDeUsuario > NumeroSecreto) {
        AsignarTextoElementos('p', 'El número secreto es menor');
    }else{
        AsignarTextoElementos('p', 'El número secreto es mayor');
    }
    Intentos++;
    LimpiarCaja();
   }
    return;
    // Termina la ejecución de la función.
}

function LimpiarCaja (){
    document.getElementById('ValorUsuario').value = '';
    
}

function GenerarNumeroSecreto() {
    let NumeroGenerado = Math.floor(Math.random() * NumeroMaximo) + 1;
    // Genera un número aleatorio entre 1 y 10 (inclusive) y lo devuelve.
    console.log(NumeroGenerado);
    console.log(ListaNumeroSorteados);
    //Si ya sorteamos todos los numeros
    if(ListaNumeroSorteados.length == NumeroMaximo){
        AsignarTextoElementos('p', 'Ya se sortearon todos los Números posibles')
    }else {      
        if(ListaNumeroSorteados.includes(NumeroGenerado)){
            return GenerarNumeroSecreto();
        }else {
            ListaNumeroSorteados.push(NumeroGenerado);
            return NumeroGenerado;
        }
    }
}

function CondicionesIniciales(){
    AsignarTextoElementos('h1', 'Juego del número secreto');
// Llama a la función `AsignarTextoElementos` para cambiar el contenido del primer elemento `h1` del documento a 'Juego del número secreto'.
    AsignarTextoElementos('p', `Indica un numero del 1 al ${NumeroMaximo}`);
// Llama a la función `AsignarTextoElementos` para cambiar el contenido del primer elemento `p` del documento a 'Indica un numero del 1 al 10'.
    NumeroSecreto = GenerarNumeroSecreto();
    Intentos = 1;
}

function ReiniciarJuego(){
    // limpiar caja
    LimpiarCaja();
    // Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    // Inicializar el número intentos
    CondicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');

}

CondicionesIniciales();