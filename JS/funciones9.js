function CambioTexto() {
    var texto = document.getElementById("Elemento").value;
    document.getElementById("pushh").value = `Push(${texto})`;
    document.getElementById("unshiftt").value = `Unshift(${texto})`;
    document.getElementById("indexx").value = `indexOf(${texto})`;
    document.getElementById("includess").value = `includes(${texto})`;

    var numero = document.getElementById("Posicion").value;
    document.getElementById("insertt").value = `insert_at(${texto},${numero})`;
}

    function pushhh(){
        var lista = document.getElementById("tabla");
        var renglon = "";
        if (lista.hasChildNodes()) {
            renglon = lista.firstChild;
        } else {
            renglon = document.createElement("tr");
            lista.appendChild(renglon);
        }

        //Crear la celda
        var celda = document.createElement("td");
        celda.style.border = "1px solid black";

        //Agregarle contenido a la celda
        celda.textContent = document.getElementById("Elemento").value;
        renglon.appendChild(celda);

    }