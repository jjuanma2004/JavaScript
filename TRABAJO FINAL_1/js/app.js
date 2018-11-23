var display = document.getElementById("display")
var operandos = {
    operador: "",
    operadorAnt: "",
    numAnt: 0
}
var calculadora = {

    init: function() {
        var self = this
        var cero = document.getElementById("0")
        var uno = document.getElementById("1")
        var dos = document.getElementById("2")
        var tres = document.getElementById("3")
        var cuatro = document.getElementById("4")
        var cinco = document.getElementById("5")
        var seis = document.getElementById("6")
        var siete = document.getElementById("7")
        var ocho = document.getElementById("8")
        var nueve = document.getElementById("9")
        var punto = document.getElementById("punto")
        var on = document.getElementById("on")
        var sign = document.getElementById("sign")
        var raiz = document.getElementById("raiz")
        var div = document.getElementById("dividido")
        var por = document.getElementById("por")
        var menos = document.getElementById("menos")
        var mas = document.getElementById("mas")
        var igual = document.getElementById("igual")
        cero.addEventListener("click", function() {
            numero("0")
        })
        cero.addEventListener("mousedown", function() {
            cero.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        cero.addEventListener("mouseout", function() {
            cero.setAttribute("style", "transform:scale(1,1)")
        })
        uno.addEventListener("click", function() {
            numero("1")
        })
        uno.addEventListener("mousedown", function() {
            uno.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        uno.addEventListener("mouseout", function() {
            uno.setAttribute("style", "transform:scale(1,1)")
        })
        dos.addEventListener("click", function() {
            numero("2")
        })
        dos.addEventListener("mousedown", function() {
            dos.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        dos.addEventListener("mouseout", function() {
            dos.setAttribute("style", "transform:scale(1,1)")
        })
        tres.addEventListener("click", function() {
            numero("3")
        })
        tres.addEventListener("mousedown", function() {
            tres.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        tres.addEventListener("click", function() {
            tres.setAttribute("style", "transform:scale(1,1)")
        })
        cuatro.addEventListener("click", function() {
            numero("4")
        })
        cuatro.addEventListener("mousedown", function() {
            cuatro.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        cuatro.addEventListener("click", function() {
            cuatro.setAttribute("style", "transform:scale(1,1)")
        })
        cinco.addEventListener("click", function() {
            numero("5")
        })
        cinco.addEventListener("mousedown", function() {
            cinco.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        cinco.addEventListener("click", function() {
            cinco.setAttribute("style", "transform:scale(1,1)")
        })
        seis.addEventListener("click", function() {
            numero("6")
        })
        seis.addEventListener("mousedown", function() {
            seis.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        seis.addEventListener("click", function() {
            seis.setAttribute("style", "transform:scale(1,1)")
        })
        siete.addEventListener("click", function() {
            numero("7")
        })
        siete.addEventListener("mousedown", function() {
            siete.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        siete.addEventListener("click", function() {
            siete.setAttribute("style", "transform:scale(1,1)")
        })
        ocho.addEventListener("click", function() {
            numero("8")
        })
        ocho.addEventListener("mousedown", function() {
            ocho.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        ocho.addEventListener("click", function() {
            ocho.setAttribute("style", "transform:scale(1,1)")
        })
        nueve.addEventListener("click", function() {
            numero("9")
        })
        nueve.addEventListener("mousedown", function() {
            nueve.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        nueve.addEventListener("click", function() {
            nueve.setAttribute("style", "transform:scale(1,1)")
        })
        mas.addEventListener("click", function() {
            numero("+")
        })
        mas.addEventListener("mousedown", function() {
            mas.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        mas.addEventListener("click", function() {
            mas.setAttribute("style", "transform:scale(1,1)")
        })
        menos.addEventListener("click", function() {
            numero("-")
        })
        menos.addEventListener("mousedown", function() {
            menos.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        menos.addEventListener("click", function() {
            menos.setAttribute("style", "transform:scale(1,1)")
        })
        dividido.addEventListener("click", function() {
            numero("/")
        })
        dividido.addEventListener("mousedown", function() {
            dividido.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        dividido.addEventListener("click", function() {
            dividido.setAttribute("style", "transform:scale(1,1)")
        })
        por.addEventListener("click", function() {
            numero("·")
        })
        por.addEventListener("mousedown", function() {
            por.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        por.addEventListener("click", function() {
            por.setAttribute("style", "transform:scale(1,1)")
        })
        igual.addEventListener("click", function() {
            numero("=")
        })
        igual.addEventListener("mousedown", function() {
            igual.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        igual.addEventListener("click", function() {
            igual.setAttribute("style", "transform:scale(1,1)")
        })
        on.addEventListener("click", function() {
            limpiar("")
        })
        on.addEventListener("mousedown", function() {
            on.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        on.addEventListener("click", function() {
            on.setAttribute("style", "transform:scale(1,1)")
        })
        punto.addEventListener("click", function() {
            numero(".")
        })
        punto.addEventListener("mousedown", function() {
            punto.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        punto.addEventListener("click", function() {
            punto.setAttribute("style", "transform:scale(1,1)")
        })
        sign.addEventListener("click", function(){
            signo("-")
        })
        sign.addEventListener("mousedown", function() {
            sign.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        sign.addEventListener("click", function(){
          sign.setAttribute("style", "transform:scale(1,1)")
          var display1 = document.getElementById("display").innerHTML
          document.getElementById("display").innerHTML = -(parseFloat(display1))
        })
        function numero(numero) {
          if(display.textContent.length<8)
          display.textContent += numero;
          }
        function limpiar() {
          display.textContent = 0;
        }
        function sumar(a, b) {
    return (a + b);
}

function restar(a, b) {
    return (a - b);
}

function multiplicar(a, b) {
    return (a * b);
}

function dividir(a, b) {
    return (a / b);
}

function calc() {
    var x = parseFloat( document.getElementById("1").value );
    var operacionSeleccionada = document.getElementById("por").value;
    var z = parseFloat( document.getElementById("3").value );


    switch (operacionSeleccionada) {
        case '0':
            calculo = sumar(x, z);
            break;

        case '1':
            calculo = restar(x, z);
            break;

        case '2':
            calculo = multiplicar(x, z);
            break;

        case '3':
            calculo = dividir(x, z);
            break;

        default:
            calculo = "Hola";
    }

    document.getElementById("display1").value = calculo;
}
      }



}

  calculadora.init();
