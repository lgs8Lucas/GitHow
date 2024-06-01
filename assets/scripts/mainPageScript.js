function digita(tag, texto, fim) {
    tag.innerText = texto + (fim ? "" : "|")
}

function esperarPor(t = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), t)
    })
}


async function textoInterativo(tag, frase, t) {
    texto = "";
    for (i = 0; i < frase.length; i++) {
        texto += frase[i];
        await esperarPor(t);
        digita(tag, texto, i == frase.length - 1)
    }
    
}

frase = "Aprenda HTML, CSS e JavaScript de uma maneira simples e interativa|"
const textP = document.getElementById('textoInterativo')
textoInterativo(textP, frase, 75)