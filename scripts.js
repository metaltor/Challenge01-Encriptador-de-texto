document.querySelector('#encriptar').onclick = encriptar
document.querySelector('#desencriptar').onclick = desencriptar
document.querySelector('#boton-copiar').onclick =copiarAlPortapapeles 
function encriptar(event){
    event.preventDefault()
    const $formulario = document.querySelector('#texto-para-encriptar');
    const texto = $formulario['texto-ingresado'].value;
    if(validador(texto) && texto !=''){
       const nuevoTexto =  texto
        .split('')
        .map(letra => letra === "a" ? letra = "ai" : letra === 'e' ? letra = 'enter': letra === 'i' ? letra = 'imes' : letra === 'o' ? letra = 'ober' : letra === 'u' ? letra = 'ufat' : letra)
        .join('');
        mostrarBotonCopiar()
       imprimirResultado(nuevoTexto) 
        
    } else if (texto === ''){
        pikachuVacio()
        setTimeout(() => {
            pikachuFeliz()
        }, 2000);

    }else {
        pikachuTriste()
        setTimeout(() => {
            pikachuFeliz()
        }, 2000);
    }
   
}
function desencriptar(event){
    event.preventDefault();
    const $formulario = document.querySelector('#texto-para-encriptar');
    let texto = $formulario['texto-ingresado'].value;
    if(validador(texto) && texto !=''){
    let textoEncriptado = texto
    .replaceAll(/imes/igm, "i")
    .replaceAll(/ai/igm, "a")
    .replaceAll(/enter/igm, "e") 
    .replaceAll(/ober/igm, "o")
    .replaceAll(/ufat/igm, "u")
    mostrarBotonCopiar()
    imprimirResultado(textoEncriptado) 
    }else if (textoEncriptado === ''){
        pikachuVacio()
        setTimeout(() => {
            pikachuFeliz()
        }, 2000);

    }else {
        pikachuTriste()
        setTimeout(() => {
            pikachuFeliz()
        }, 2000);
    }
        
}
function copiarAlPortapapeles(){
    const $textoResultado = document.querySelector('#mensaje2').textContent;
    navigator.clipboard.writeText($textoResultado).then(() => {  
    }, () => {    
    });
}

function validador(texto){
    if(/([^a-z\ñ\s])/g.test(texto) === false) {
        return true
    }else{
        return false
    }
}
function pikachuTriste(){
    document.querySelector('#pikachu').src="images/pikachu-triste.png";
    document.querySelector('#mensaje2').classList.add('hiden');
    document.querySelector('#mensaje1').textContent = "Ingresa solo minusculas...";
    document.querySelector('#mensaje1').classList.add('alerta-texto');
    document.querySelector('#alerta-minusculas').classList.add('alerta-fondo');
}
function pikachuFeliz(){
    document.querySelector('#pikachu').src="images/pikachu-feliz.png";
    document.querySelector('#mensaje2').classList.remove('hiden');
    document.querySelector('#mensaje1').textContent = "Ningún mensaje fue encontrado";
    document.querySelector('#mensaje1').classList.remove('alerta-texto');
    document.querySelector('#alerta-minusculas').classList.remove('alerta-fondo');
    document.querySelector('#texto-ingresado').value =''
}
function pikachuVacio(){
    document.querySelector('#pikachu').src="images/pikachu-triste.png";
    document.querySelector('#mensaje2').classList.add('hiden');
    document.querySelector('#mensaje1').textContent = "No ingresaste nada.";
    document.querySelector('#mensaje1').classList.add('alerta-texto');
}

function imprimirResultado(texto){
    document.querySelector('#pikachu').classList.add('hiden')
    document.querySelector('#mensaje1').classList.add('hiden');
    document.querySelector('#mensaje2').textContent = texto;
    
}
function mostrarBotonCopiar(){
document.querySelector('#boton-copiar').classList.remove('hiden')
document.querySelector('#texto-resultado').classList.add('resultado');
}