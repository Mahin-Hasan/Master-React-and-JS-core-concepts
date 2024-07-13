import { useEffect, useState } from "react";
import './filter.css'

const FilterProducts = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [currentSelectedCategory, setCurrentSelectedCategory] = useState('')
    const [filteredItems, setFilteredItems] = useState([])

    console.log(currentSelectedCategory);
    async function fetchProducts() {
        try {
            setLoading(true)
            const apiResponse = await fetch(`https://dummyjson.com/products`, {
                method: 'GET'
            })
            const result = await apiResponse.json()
            if (result && result.products && result.products.length > 0) {
                setLoading(false)
                setProducts(result.products)
                setFilteredItems(result.products)
            }
            // console.log(result);
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    useEffect(() => {
        const copyProducts = [...products]
        setFilteredItems(
            currentSelectedCategory !== ''
                ? copyProducts.filter(
                    (productItem) =>
                        productItem.category.toLowerCase() === currentSelectedCategory.toLowerCase()) : copyProducts
        )


    }, [currentSelectedCategory])

    //getting all types of category name in a array 
    const uniqueCategories =
        products && products.length > 0
            ?
            [...new Set(products.map(productItem => productItem.category))] //new set means create unique 
            :
            []


    console.log(uniqueCategories, "uniqueCategories");

    if (loading) {
        return <h3>Fetching the Products!!! Please Wait</h3>
    }

    return (
        <div className="filter-products-container">
            <h2>Filter Products by Category</h2>
            <div className="filter-categories-container">
                {uniqueCategories.map((uniqueCategories) => (<button
                    onClick={() => setCurrentSelectedCategory(currentSelectedCategory !== '' ? '' : uniqueCategories)}
                >
                    {uniqueCategories}
                </button>))}
            </div>
            <ul className="list-of-products">
                {
                    filteredItems && filteredItems.length > 0
                        ?
                        filteredItems.map((productItem, idx) =>
                            <li key={idx}>
                                <p>{productItem.title}</p>
                                <button
                                    onClick={() => setCurrentSelectedCategory(productItem.category)}
                                >{productItem.category}</button>

                            </li>)
                        :
                        null
                }
            </ul>
        </div>
    );
};

export default FilterProducts;