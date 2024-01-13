import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { RES_DATA_URL } from "../utils/constants";
import RES_LIST from "../utils/mock_data";
// What is state
// what is React Hooks? - functions,
// What is useState
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
}
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(()=>{
    const fetch_data = async () => {
      setRestaurants(RES_LIST);
}
fetch_data();
  }, [])
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, restaurants);
            // update the state - restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;