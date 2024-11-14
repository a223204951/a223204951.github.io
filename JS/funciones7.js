function optionKey() {
    var selects = document.getElementsByTagName("select");
    for (let i = 0; i < selects.length; i++) {
        for (let j = 1; j < 26; j++) {
            var option = document.createElement("option");
            option.value = j;
            option.textContent = j;
            selects[i].appendChild(option);
        }
    }
}
function example1() {
    document.getElementById("originalMessage").value = `System of a Down es la mejor banda de todos los tiempos`.toUpperCase();
    document.getElementById("key1").value = 16;
    document.getElementById("key2").value = 12;
    document.getElementById("key3").value = 21;
    document.getElementById("key4").value = 6;
    document.getElementById("key5").value = 2;
    document.getElementById("key6").value = 1;
}
function example2() {
    document.getElementById("originalMessage").value = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra est lectus, at tincidunt mauris commodo aliquam. Praesent at neque sed ante sollicitudin congue id et eros. Phasellus a suscipit leo. Quisque condimentum bibendum sem nec accumsan. Phasellus finibus, nibh quis bibendum semper, ipsum libero luctus elit, ut ultrices quam urna sit amet enim. Etiam a aliquet dui. Phasellus comodo nec turpis a pharetra. Sed venenatis lectus vel ante consequat aliquet. Sed eget nibh vel lacus blandit elementum eget vehicula eros. Fusce dapibus feugiat mi, at dapibus dolor. Curabitur maximus, leo eget semper dignissim, libero nisl eleifend mauris, in viverra risus tortor vel eros. In pellentesque lectus tempor ante euismod aliquet. Ut blandit sapien et nisl vehicula rhoncus. Praesent nulla magna, volutpat eget condimentum vitae, pretium vitae turpis.`.toUpperCase();
    document.getElementById("key1").value = 1;
    document.getElementById("key2").value = 2;
    document.getElementById("key3").value = 3;
    document.getElementById("key4").value = 4;
    document.getElementById("key5").value = 5;
    document.getElementById("key6").value = 6;
}
function clear1() {
    document.getElementById("originalMessage").value = "";
    document.getElementById("encriptedMessage").value = "";
    document.getElementById("key1").value = 1;
    document.getElementById("key2").value = 1;
    document.getElementById("key3").value = 1;
    document.getElementById("key4").value = 1;
    document.getElementById("key5").value = 1;
    document.getElementById("key6").value = 1;
}
function allows(event) {
    var keycode = event.keyCode || event.which;
    var typeTool = String.fromCharCode(keycode);
    /*The condition is a regular expression
    13 = enter; 32 = white space; 8 = backspace; 27 = esc*/
    if (!/^[A-Z]$/.test(typeTool) && keycode != 13 && keycode != 32 && keycode != 8) {
        event.preventDefault();
    }
}
function capital(textArea) {
    //this function will recive a parameter (textArea)
    textArea.value = textArea.value.toUpperCase();
}
function encript() {
    var message = document.getElementById("originalMessage").value;
    var output = "", k = 1;
    for (let i = 0; i < message.length; i++) {
        var letter = message.charCodeAt(i);
        var displacement = parseInt(document.getElementById("key" + k++).value);
        if (/^[A-Z]$/.test(message[i]))
            if (letter + displacement > 90) output += String.fromCharCode(letter + displacement - 26);

            else output += String.fromCharCode(letter + displacement);

        else output += String.fromCharCode(letter);

        if (k == 7) k = 1;
    }
    document.getElementById("encriptedMessage").value = output.trim();
}
function saveKey() {
    var archive = document.createElement("a");
    var content = document.getElementById("key1").value + "," + document.getElementById("key2").value + ","
        + document.getElementById("key3").value + "," + document.getElementById("key4").value + ","
        + document.getElementById("key5").value + "," + document.getElementById("key6").value;
    archive.setAttribute("href", "data:text/plane;charset=uft-8," + encodeURIComponent(content));
    archive.setAttribute("download", "Key.txt");
    archive.style.display = "none";
    document.body.appendChild(archive);
    archive.click();
    document.body.removeChild(archive);
}
function saveMessage() {
    if (document.getElementById("encriptedMessage").value.trim() != "") {
        var archive = document.createElement("a");
        var content = document.getElementById("encriptedMessage").value;
        archive.setAttribute("href", "data:text/plane;charset=uft-8," + encodeURIComponent(content));
        archive.setAttribute("download", "EncriptedMessage.txt");
        archive.style.display = "none";
        document.body.appendChild(archive);
        archive.click();
        document.body.removeChild(archive);
    } else alert("There is no message to save")
}