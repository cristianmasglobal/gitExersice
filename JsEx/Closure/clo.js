// Es una función que encapsula una serie de variables y definiciones locales que solo son accesibles si se devuelven con return, lo cual hace que sea difícil de acceder
//Es un patrón que permite modular la función y se acerca a ser una clase

const contador = (function(){
    let cont =0
    function incrementar() {
        console.log(cont++)
    }
    function decrementar() {
        console.log(cont--)
    }
    function valor() {
        console.log(cont) 
    }

    return {
        incrementar,
        decrementar,
        valor
    }
})()
contador.incrementar()
contador.incrementar()
contador.valor()