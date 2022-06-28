const products = [
    {id:"01", name:"producto1", description:"Descripcion de producto, no tan largo.", img:"https://picsum.photos/200", stock:5},
    {id:"02", name:"producto2", description:"Descripcion de producto, no tan largo.", img:"https://picsum.photos/201", stock:15},
    {id:"03", name:"producto3", description:"Descripcion de producto, no tan largo.", img:"https://picsum.photos/202", stock:8},
    {id:"04", name:"producto4", description:"Descripcion de producto, no tan largo.", img:"https://picsum.photos/203", stock:2},
    {id:"05", name:"producto5", description:"Descripcion de producto, no tan largo.", img:"https://picsum.photos/204", stock:3},
    {id:"06", name:"producto6", description:"Descripcion de producto, no tan largo.", img:"https://picsum.photos/205", stock:2}
]

export const getData = new Promise((resolve, reject) => {
    let condition = true
    setTimeout(() => {
        if (condition) {
            resolve(products)
        }else{
            reject("error - rechazado")
        }
    }, 3000)
})