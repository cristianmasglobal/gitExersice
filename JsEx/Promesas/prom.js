//Disponibilidad del valor ahora o en el futuro

function sumaMayor (val1, val2) {
    return new Promise(function (resolve, reject) {
        if (val1 + val2 > 5){
            resolve(val1 + val2)
        }else {
            reject(error)
        }
    })
}

sumaMayor(4,0)
.then((operacion) => console.log(operacion))
.catch(err => console.error("La suma es menor"));