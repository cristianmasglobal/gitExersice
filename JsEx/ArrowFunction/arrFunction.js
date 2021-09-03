hello = function() {
    console.log("hello world")
}

arrHello = () => {
    console.log("hello")
}

arrHelloParams = (val) => {
    console.log("hello number: ", val)
}

arrHelloWtParent = val => {
    console.log("hello value without parenthesis: ", val)
}

sum = (val1,val2) => {
    console.log("la suma es: ", val1 + val2)
}

ope = () => {
    sum(4,5)
}

//Diferencia : constructor, (this), returns
  
const coche = {
    marca: "Ford",
    modelo: "Mustang",
    arrancar: function() {
      console.log("Arrancando el coche", this.marca, this.modelo);
    },
    parar: () => {
      console.log("Parando el coche", this.marca, this.modelo);
    }
  }
  
hello()
arrHello()
arrHelloParams(4)
arrHelloWtParent(7)
ope()
coche.arrancar()
coche.parar()