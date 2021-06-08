import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { locationData } from "./redux/locationSlice";

export const GetCoordinates = (id) => {
  const [filter, setFilter] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const data = useSelector(locationData);
  // console.log(data);
  // console.log(data.length);

  useEffect(() => {
    async function LoadData() {
      if (data.length === 0) {
        setFilter({});
        setLatitude(Number(0));
        setLongitude(Number(0));
      }

      if (data.length > 0) {
        const FilterData = await data.filter((result) => result.name === id);
        const convertArraytoObject = await Object.assign({}, FilterData[0]);
        console.log(convertArraytoObject);
        const coordinate = await convertArraytoObject.coordinates.split(",");

        setFilter(convertArraytoObject);
        setLatitude(Number(coordinate[0]));
        setLongitude(Number(coordinate[1]));
      }
    }
    LoadData();
  }, [data, id]);

  return {
    filter,
    latitude,
    longitude
  };
};
