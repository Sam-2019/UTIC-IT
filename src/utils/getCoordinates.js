import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { locationData } from "./redux/locationSlice";

const GetCoordinates = () => {
  const LocationList = useSelector(locationData);

  const [data] = useState(LocationList);
  const [id] = useState(null);

  const [Filter, setFilter] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

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
    Filter,
    latitude,
    longitude
  };
};

export default GetCoordinates;
