function a (b, c){
    c = function(d) {
        console.log(d + b)
    }
    console.log(c(3))
}

a(4, 3)