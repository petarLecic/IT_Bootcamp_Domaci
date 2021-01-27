import ShoppingItem from "./ShoppingItem"
import {v1 as uuidv1} from 'uuid'

const ShoppingList = ({name, items}) => {
    return (
        <>
            <h1>Shopping list for {name}</h1>
            <hr/>
            {
                items.map(item => <ShoppingItem key={uuidv1()} item={item} />)
            }
        </>
    )
}

export default ShoppingList