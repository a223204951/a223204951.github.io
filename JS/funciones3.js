var tarjetas = [
    "../IMG/1.jpeg", "../IMG/1.jpeg", "../IMG/2.jpeg", "../IMG/2.jpeg",
    "../IMG/3.jpeg", "../IMG/3.jpeg", "../IMG/4.jpeg", "../IMG/4.jpeg",
    "../IMG/5.jpeg", "../IMG/5.jpeg", "../IMG/6.jpeg", "../IMG/6.jpeg",
    "../IMG/7.jpeg", "../IMG/7.jpeg", "../IMG/8.jpeg", "../IMG/8.jpeg"
];

var imagen_temporal, esperando = false;
var contador = 0;
var fondo = Math.floor(Math.random() * 3) + 1;  // Definir la variable 'fondo' para evitar errores

function CambiarImagen(imagen, indice) {
    imagen.src = tarjetas[indice];
    imagen.removeAttribute("onclick");
    if (!esperando) imagen_temporal = imagen;
    else {
        if (imagen_temporal.src == imagen.src) {
            setTimeout(function () { EliminarPar(imagen_temporal, imagen) }, 500);
        } else {
            setTimeout(function () { Regresar(imagen_temporal, imagen) }, 500);
        }
    }
    esperando = !esperando;
}

function Regresar(imagen1, imagen2) {
    imagen1.src = "../IMG/0.jpeg";
    imagen2.src = "../IMG/0.jpeg";
    imagen1.setAttribute("onclick", `CambiarImagen(this,${imagen1.id})`);
    imagen2.setAttribute("onclick", `CambiarImagen(this,${imagen2.id})`);
}

function EliminarPar(imagen1, imagen2) {
    // Desaparece imagen pero no ajusta tabla
    imagen1.style.visibility = "hidden";
    imagen2.style.visibility = "hidden";
    imagen1.removeAttribute("onclick");
    imagen2.removeAttribute("onclick");
    contador++;
    
    if (contador != 8) {
        document.getElementById("contador").innerHTML = `★ Pares Encontrados: ` + ` ` + contador + ` ` + ` !!`;
    } else {
        document.getElementById("contador").innerHTML = "Encontraste todos los pares !! ^_<☆";
        document.getElementById("tablita").style.backgroundImage = `url("../IMG/fondo${fondo}.jpeg")`;  // Mostrar fondo al ganar
    }
}

function Revolver() {
    var j = 0;
    for (let i = 15; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        [tarjetas[i], tarjetas[j]] = [tarjetas[j], tarjetas[i]];
    }
}

function Fondo() {
    document.getElementById("tablita").style.backgroundImage = `url("../IMG/fondo${fondo}.jpeg")`;
}

function Reiniciar() {
    location.reload();
}