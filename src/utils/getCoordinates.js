export const getCoordinates = function (data, id) {
  const FilterData = data.filter((result) => result.name === id);
  const convertArraytoObject = Object.assign({}, FilterData[0]);

  const coordinate = convertArraytoObject.coordinates.split(",");

  return {
    data: FilterData,
    latitude: Number(coordinate[0]),
    longitude: Number(coordinate[1])
  };
};
