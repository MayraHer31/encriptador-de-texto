function encriptarTexto(texto) {
    let textoEncriptado = texto.replace(/e/g, 'enter')
                               .replace(/i/g, 'imes')
                               .replace(/a/g, 'ai')
                               .replace(/o/g, 'ober')
                               .replace(/u/g, 'ufat');
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    let textoDesencriptado = texto.replace(/enter/g, 'e')
                                  .replace(/imes/g, 'i')
                                  .replace(/ai/g, 'a')
                                  .replace(/ober/g, 'o')
                                  .replace(/ufat/g, 'u');
    return textoDesencriptado;
}

function toggleOutputElements() {
    const resultado = document.getElementById("resultado").value.trim();
    const mensajeEncontrado = document.querySelector(".mensaje-encontrado");
    const instrucciones = document.querySelector(".instrucciones");
    const muneco = document.querySelector(".output-section img");
    const botonCopiar = document.getElementById("copiar");

    if (resultado !== "") {
        mensajeEncontrado.style.display = 'none';
        instrucciones.style.display = 'none';
        muneco.style.display = 'none';
        document.querySelector("textarea#resultado").style.display = 'block';
        botonCopiar.style.display = 'block';
    } else {
        mensajeEncontrado.style.display = 'block';
        instrucciones.style.display = 'block';
        muneco.style.display = 'block';
        document.querySelector("textarea#resultado").style.display = 'none';
        botonCopiar.style.display = 'none';
    }
}

document.getElementById("encriptar").addEventListener("click", function() {
    const inputTexto = document.getElementById("inputTexto").value;
    const textoEncriptado = encriptarTexto(inputTexto);
    document.getElementById("resultado").value = textoEncriptado;
    toggleOutputElements(); // Verifica los elementos después de encriptar
});

document.getElementById("desencriptar").addEventListener("click", function() {
    const inputTexto = document.getElementById("inputTexto").value;
    const textoDesencriptado = desencriptarTexto(inputTexto);
    document.getElementById("resultado").value = textoDesencriptado;
    toggleOutputElements(); // Verifica los elementos después de desencriptar
});


document.getElementById("copiar").addEventListener("click", function() {
    // Selecciona el texto en el área de salida
    const resultado = document.getElementById("resultado");
    resultado.select();
    resultado.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto al portapapeles
    navigator.clipboard.writeText(resultado.value).then(() => {

        // Cambia el texto del botón cuando se ha copiado un texto
        this.textContent = "¡Texto copiado!";

        // Restaura el texto del botón después de segundos
        setTimeout(() => {
            this.textContent = "Copiar";
        }, 8000);

    }); // Cierra el bloque then()
});


// Restringir entrada a solo letras minúsculas y espacios
document.getElementById("inputTexto").addEventListener("input", function() {
    this.value = this.value.toLowerCase();
    this.value = this.value.replace(/[^a-z\s]/g, '');
});