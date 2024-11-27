function reset(){
    window.location.reload();
}

function saveMessage() {
    if (document.getElementById("originalMessage").value.trim() != "") {
        var archive = document.createElement("a");
        var content = document.getElementById("originalMessage").value;
        archive.setAttribute("href", "data:text/plane;charset=uft-8," + encodeURIComponent(content));
        archive.setAttribute("download", "DecriptedMessage.txt");
        archive.style.display = "none";
        document.body.appendChild(archive);
        archive.click();
        document.body.removeChild(archive);
    } else alert("There is no message to save")
}

function load(){
    //Definimos una inner function para cargar las llaves
    document.getElementById("keyFile").addEventListener("change" , function(event){
        var archivo = event.target.files[0];
        if (archivo) {
            var reader = new FileReader();
            reader.onload = function(e) { 
                var contenido = e.target.result;
                var keys = contenido.split(","); 
                var selects = document.getElementsByTagName('select');
                for (let i = 0, k=0; i < selects.length; i++) {
                    var option = document.createElement("option");
                    option.value = keys[k];
                    option.textContent = keys[k++];
                    option.defaultSelected = true;
                    selects[i].appendChild(option);
                }
            }

            reader.onerror = function (e) {
                alert("error al abrir el archivo");
            }

            reader.readAsText(archivo);
        }
        else{
            alert("Seleccione una archivo");
            
        }
    });

    //Funcion para cargar el archivo encriptado
    document.getElementById("encryptedfile").addEventListener("change" , function(event){
        var archivo = event.target.files[0];
        if (archivo) {
            var reader = new FileReader();
            reader.onload = function(e) { 
                var contenido = e.target.result;
                document.getElementById("EncryptedMessage").value = contenido;
            }

            reader.onerror = function (e) {
                alert("error al abrir el archivo");
            }

            reader.readAsText(archivo);
        }
        else{
            alert("Seleccione una archivo");
            
        }
    });

}
//Funcion para desencriptar
function decrypt() {
        var message = document.getElementById("EncryptedMessage").value;
        var output = "", k = 1;
        for (let i = 0; i < message.length; i++) {
            var letter = message.charCodeAt(i);
            var displacement = parseInt(document.getElementById("key" + k++).value);
            if (/^[A-Z]$/.test(message[i]))
                if (letter - displacement < 65) output += String.fromCharCode(letter - displacement + 26);

                else output += String.fromCharCode(letter - displacement);

            else output += String.fromCharCode(letter);

            if (k == 7) k = 1;
        }
        document.getElementById("originalMessage").value = output.trim();
    }