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
      <div className="flex p-2 bg-slate-100">
        <input
          type="text"
          className="w-[200px] border px-2 py-1 mr-2 rounded-sm"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-violet-600 text-white px-2 py-1 rounded-sm"
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
      <div className="flex py-6 px-3 flex-wrap">
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