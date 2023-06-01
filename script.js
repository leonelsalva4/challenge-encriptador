const textoIngresado = document.getElementById("ingresarTexto");
const botonEncriptar = document.getElementById("botonEncripto");
const botonDesencriptar = document.getElementById("botonDesencripto");
const textoFinal = document.getElementById("textoSalida");
const botonCopiar = document.getElementById("botonCopio");


function encriptar(text){
    for (var i=0;i<listaCambios.length;i++){
        if (text.includes(listaCambios[i][0])){
            text = text.replaceAll(listaCambios[i][0], listaCambios[i][1]);
        }
    }
    return text;

}

function MostrarEncriptado(text){
    textoFinal.value = text;
    textoFinal.style.backgroundImage="none";
}


function desencriptar(text){
    for (var i=0;i<listaCambios.length;i++){
        if (text.includes(listaCambios[i][1])){
            text = text.replaceAll(listaCambios[i][1], listaCambios[i][0]);
        }
    }
    return text;

}

let listaCambios=[
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
]

const contenido=textoFinal;

botonEncriptar.addEventListener("click", () =>{
    const texto = textoIngresado.value.toLowerCase();
    const textoEncriptado = encriptar(texto);
    MostrarEncriptado(textoEncriptado);
    botonCopiar.style.display = "inline-block";
});

botonDesencriptar.addEventListener("click", () =>{
    const texto = textoIngresado.value.toLowerCase();
    const TextoDesencriptado = desencriptar(texto);
    MostrarEncriptado(TextoDesencriptado);
    botonCopiar.style.display = "inline-block";
})

botonCopiar.addEventListener("click", () =>{
    
    contenido.select();
    document.execCommand('copy');
    alert("Texto copiado!");

})


