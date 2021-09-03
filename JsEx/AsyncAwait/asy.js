//Disponibilidad del valor ahora o en el futuro

function sumaMayor (val1, val2) {
    return new Promise(function (resolve, reject) {
        if (val1 + val2 > 5){
            resolve(val1 + val2)
        }else {
            reject(new Error("El valor es menor"))
        }
    })
}

async function oper(){
    try {
        const result = await sumaMayor(4,0)
        console.log(result)
    } catch (err) {
        console.log(err.message)
    }
}

oper()