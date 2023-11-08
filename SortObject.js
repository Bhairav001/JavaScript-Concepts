const products=[
    {
        id:1,
        name:"rice",
        price:40
    },
    {
        id:2,
        name:"tomato",
        price:60
    },
    {
        id:3,
        name:"bhajji",
        price:70
    }
]

function filterProductsByPrice(products){
    const filteredProductsName= products
    .filter((product)=>product.price>50)
    .map((product)=>product.name)
    return filteredProductsName
}

const productsAbove50 = filterProductsByPrice(products);
console.log(productsAbove50);
