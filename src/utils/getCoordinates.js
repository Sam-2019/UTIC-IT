import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { locationData } from "./redux/locationSlice";

export const GetCoordinates = (id) => {
  const [filter, setFilter] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const data = useSelector(locationData);

  useEffect(() => {
    if (data.length > 0) {
      const FilterData = data.filter((result) => result.name === id);
      const convertArraytoObject = Object.assign({}, FilterData[0]);

      const coordinate = convertArraytoObject.coordinates.split(",");

      setFilter(FilterData);
      setLatitude(Number(coordinate[0]));
      setLongitude(Number(coordinate[1]));
    }
  }, [data, id]);

  return {
    filter,
    latitude,
    longitude
  };
};
