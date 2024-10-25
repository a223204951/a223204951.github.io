const palabrasAleatorias = [
    "astro", "eclipse", "cosmos", "espacio", "planeta",
    "estrella", "infinito", "galaxia", "cometa", "luna",
    "sol", "satélite", "luz", "nebulosa", "cielo"
];

function Aleatorias() {
    var indice = Math.floor(Math.random() * palabrasAleatorias.length);
    document.getElementById("Elemento").value = palabrasAleatorias[indice];
}

function CambioTexto() {
    var texto = document.getElementById("Elemento").value;
    document.getElementById("mensaje").innerHTML = `★ Texto cambiado a: "${texto}" ` + ` !!`;
}

function Push() {
    if (document.getElementById("Elemento").value.trim() !== "") {
        document.getElementById("mensaje").innerHTML = "";

        var renglon = document.createElement("tr");
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        
        celda1.textContent = "Tope →";
        celda2.textContent = document.getElementById("Elemento").value;
        renglon.appendChild(celda1);
        renglon.appendChild(celda2);
        
        var rt = document.getElementById("tabla");

        if (rt.hasChildNodes()) {
            rt.firstChild.firstChild.textContent = "";
        }
        rt.insertBefore(renglon, rt.children[0]);

    } else {
        document.getElementById("mensaje").innerHTML = "★ No se aceptan cadenas vacías !!";
    }
}

function Pop() {
    var rt = document.getElementById("tabla");
    if (rt.hasChildNodes()) {
        document.getElementById("mensaje").innerHTML = `★ Se eliminó del tope: ${rt.firstChild.childNodes[1].textContent}` + ` !!`;
        rt.removeChild(rt.firstChild);
        if (rt.hasChildNodes()) {
            rt.firstChild.firstChild.textContent = "Tope →";
        }
    } else {
        document.getElementById("mensaje").innerHTML = "★ No hay elementos para hacer el Pop !!";
    }
}

function Peek() {
    var rt = document.getElementById("tabla");
    if (rt.hasChildNodes()) {
        document.getElementById("mensaje").innerHTML = `★ En el tope de la pila se encuentra: ${rt.firstChild.childNodes[1].textContent}` + ` !!`;
        rt.firstChild.firstChild.textContent = "Tope →";
    } else {
        document.getElementById("mensaje").innerHTML = "★ No hay elementos en la pila !!";
    }
}

function Clear() {
    document.getElementById("tabla").textContent = "";
    document.getElementById("mensaje").innerHTML = "★ Se hizo clear en la pila !!";
}

function Find() {
    var rt = document.getElementById("tabla");
    var control = false;
    if (rt.hasChildNodes()) {
        for (let i = 0; i < rt.childNodes.length; i++) {
            let nodo = rt.childNodes[i].childNodes[1].textContent;
            if (nodo === document.getElementById("Elemento").value) {
                document.getElementById("mensaje").innerHTML = "★ Sí se encuentra !!";
                control = true;
                break;
            }
        }
        if (!control) {
            document.getElementById("mensaje").innerHTML = "★ No se encuentra !!";
        }
    } else {
        document.getElementById("mensaje").innerHTML = "★ No hay elementos en la pila !!";
    }
}

function isEmpty() {
    var rt = document.getElementById("tabla");
    if (!rt.hasChildNodes()) {
        document.getElementById("mensaje").innerHTML = "★ Sí está vacío !!";
    } else {
        document.getElementById("mensaje").innerHTML = "★ No está vació !!";
    }
}
