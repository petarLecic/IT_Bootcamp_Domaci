import Product from "./Product"

const Products = ({ products, category}) => {
    let filteredProducts = []
    if (category) filteredProducts = products.filter(el => el.category === category)

    return category ?
        <>
            {filteredProducts.map(product => <Product key={product.id} product={product} length={filteredProducts.length}/>)}
        </>
        :
        <>
            {products.map(product => <Product key={product.id} product={product} />)}
        </>
}

export default Products