import RestaurantsTable from "../components/RestaurantsTable";
import axios from "axios";
import { useEffect } from "react";

export const HomePage = () => {
  
  const fetchData = async (url) => {
    try {
      const { data } = await axios(url);
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    fetchData("/api/v1/restaurants/")
  }, [])
  
  return (
    <>
      <h3>HOME</h3>
      <RestaurantsTable />
    </>
  );
};
