import ShoppingList from './components/ShoppingList'

const shoppingItems = [
  {
      name: 'Bread',
      price: 50
  },
  {
      name: 'Milk',
      price: 87
  },
  {
      name: 'Orange juice',
      price: 118
  },
  {
      name: 'Eggs',
      price: 120
  },
  {
      name: 'Flour',
      price: 54
  },
  {
      name: 'Peanut butter',
      price: 175
  },
]

const App = () => {
  return (
    <ShoppingList name='John' items={shoppingItems} />
  )
}

export default App