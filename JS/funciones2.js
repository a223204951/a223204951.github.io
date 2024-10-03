function Generar() {
    //Borra todas las columnas y renglones de la tabla.
    document.getElementById("cuadrado").innerHTML = "";

    // Agregamos renglones y columnas.
    var tabla = document.getElementById("cuadrado");
    var lado = parseInt(document.getElementById("lados").value);
    var celda = "", nuevaFila = "", r = 0, c = 0;
    for (r = 0; r < lado; r++) {
        nuevaFila = tabla.insertRow(-1);
        celda = nuevaFila.insertCell(0);
        celda.innerHTML = "";
        celda.style.border = "none";
        for (c = 0; c < lado; c++) {
            celda = nuevaFila.insertCell(-1);
            var entrada = document.createElement("input");
            entrada.setAttribute("type", "number");
            entrada.setAttribute("value", Aleatorio());
            entrada.setAttribute("required", "required");
            // Asignamos los estilos al input.
            entrada.setAttribute("style", "width:50px; color:blue; font-weight: bold; text-align: center;");
            celda.appendChild(entrada);
        }
        var celda = nuevaFila.insertCell(-1);
        celda.innerHTML = "suma";

    }

    nuevaFila = tabla.insertRow(-1);
    for (c = 0; c < lado + 2; c++) {
        celda = nuevaFila.insertCell(-1);
        celda.innerHTML = "suma";
    }
    tabla.rows[lado].cells[c - 1].innerHTML = "diagonal1";
    tabla.rows[lado].cells[0].innerHTML = "diagonal2";
    Calcular();
}

function Aleatorio() {
    return Math.floor(Math.random() * 100);
}

function EjemploMagico() {
    var tabla = document.getElementById("cuadrado");
    for (let r = 0; r < document.getElementById("lados").value; r++) {
        for (let c = 1; c <= document.getElementById("lados").value; c++) {
            tabla.rows[r].cells[c].querySelector('input').value =
                document.getElementById("lados").value;
        }
    }
    document.getElementById("verificar").innerHTML = "★ Si es cuadrado magico !!";
    document.getElementById("verificar").style = "color: blue;";
    Calcular();
}

function EjemploCuadrado() {
    var tabla = document.getElementById("cuadrado");
    var r = 0, c = 0;
    for (r = 0; r < document.getElementById("lados").value; r++) {
        for (c = 1; c <= document.getElementById("lados").value; c++) {
            tabla.rows[r].cells[c].querySelector('input').value =
                Aleatorio();
        }
    }
    tabla.rows[r - 1].cells[c - 1].querySelector('input').value = -1;
    document.getElementById("verificar").innerHTML = "★ No es cuadrado magico !!";
    document.getElementById("verificar").style = "color: crimson;";
    Calcular();
}

function Calcular() {
    var tabla = document.getElementById("cuadrado");
    var lado = tabla.rows.length;
    var r = 0, c = 0;

    // Suma de filas.
    for (r = 0; r < lado - 1; r++) {
        var sumaFila = 0;
        for (c = 1; c < lado; c++) {
            sumaFila += parseInt(tabla.rows[r].cells[c].querySelector('input').value);
        }
        tabla.rows[r].cells[lado].innerHTML = sumaFila;
    }

    // Suma de columnas.
    for (c = 1; c < lado; c++) {
        var sumaColumna = 0;
        for (r = 0; r < lado - 1; r++) {
            sumaColumna += parseInt(tabla.rows[r].cells[c].querySelector('input').value);
        }
        tabla.rows[lado - 1].cells[c].innerHTML = sumaColumna;
    }

    // Suma de la diagonal1.
    var sumaDiagonal1 = 0;
    for (r = 0; r < lado - 1; r++) {
        sumaDiagonal1 += parseInt(tabla.rows[r].cells[r + 1].querySelector('input').value);
    }
    tabla.rows[lado - 1].cells[lado].innerHTML = sumaDiagonal1;

    // Suma de la diagonal2.
    var sumaDiagonal2 = 0;
    for (r = 0; r < lado - 1; r++) {
        sumaDiagonal2 += parseInt(tabla.rows[r].cells[lado - 1 - r].querySelector('input').value);
    }
    tabla.rows[lado - 1].cells[0].innerHTML = sumaDiagonal2;
}