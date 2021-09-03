const data = [
    {
        id: 1,
        name: "Cristian"
    },
    {
        id:2,
        name: "Andres"
    }
]

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1500);
    })
}
getData((data)).then(data => console.log(data)).catch(error => console.error("error"));