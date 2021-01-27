const ShoppingItem = ({item}) => {
    return (
        <div>
            <p>{item.name}</p>
            <p>Price: {item.price.toFixed(2)} RSD</p>
            <hr/>
        </div>
    )
}

export default ShoppingItem