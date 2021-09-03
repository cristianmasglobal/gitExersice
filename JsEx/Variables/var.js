// var -> Sí puede cambiar de estado y el scope 
function prubVar(){
    var name = "Cristian"
    console.log(name)
}
// let -> Solo existe en el bloque donde se creó
function prubLet(){
    let secondName = "Ceballos"
    console.log(secondName)
}
// const -> No cambia el valor en todo el programa, es una constante en toda la ejecución, inmutable
function prubConst(){
    const phone = "123456789"
    console.log(phone)
}

function called(at){
    let val = prubVar()
    var val2 = prubLet()
    const val3 = prubConst()
    console.log(val)
    console.log(val2)
    console.log(val3)
}

called()