import { Link } from "react-router-dom"

const Categories = ({ categories }) => {
    return (
        <>
            <h1>Categories</h1>
            {categories ?
                categories.map((category, index) => {
                    return (
                        <div key={index}>
                            <Link to={`/${category}`}>{category}</Link>
                        </div>
                    )
                })
                :
                null
            }
        </>
    )
}

export default Categories