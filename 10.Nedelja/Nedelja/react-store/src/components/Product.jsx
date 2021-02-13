const Product = ({ product, length }) => {
    return length == 1 ?
        <h1>{product.name} --- {product.category}</h1>
        :
        <p>{product.name} --- {product.category}</p>
}

export default Product