import { useEffect, useState } from "react";
import useDebounce from "./use-debounce";
import './debounce.css'

const DebounceApiCall = () => {
  const [searchParam, setSearchParams] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [pending, setPending] = useState(false);

  const debounceParamValue = useDebounce(searchParam, 1000);

  async function fetchListOfRecipes() {
    try {
      setPending(true);
      const apiResponse = await fetch(
        `https://dummyjson.com/recipes/search?q=${debounceParamValue}`
      );
      const result = await apiResponse.json();
      //   console.log(result);
      if (result && result.recipes && result.recipes.length > 0) {
        setPending(false);
        setRecipes(result.recipes);
      } else {
        setPending(false);
        setRecipes([]);
      }
    } catch (error) {
      console.log(error);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchListOfRecipes();
  }, [debounceParamValue]);

  return (
    <div className="debounce-container">
      <h2>Debounce Api Call</h2>
      <div className="search-wrapper">
        <input
          type="text"
          value={searchParam}
          onChange={(e) => setSearchParams(e.target.value)}
          placeholder="Enter Recipe Name"
        />
      </div>
      {pending ? <h3>Pending ! Please Wait</h3> : null}
      <ul>
        {recipes && recipes.length > 0
          ? recipes.map((recipeItem) => <li>{recipeItem.name}</li>)
          : <h3>No Recipies Found!! Please try different Recipie</h3>}
      </ul>
    </div>
  );
};

export default DebounceApiCall;
