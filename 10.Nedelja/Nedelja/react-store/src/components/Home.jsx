import Products from "./Products"

const Home = ({ products }) => {
    return (
        <>
            <h1>Home</h1>
            {products ? <Products products={products} /> : null}
        </>
    )
}

export default Home