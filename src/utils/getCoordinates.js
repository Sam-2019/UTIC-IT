export const getCoordinates = function (data, id) {
  const FilterData = data.filter((result) => result.name === id);
  const convertArraytoObject = Object.assign({}, FilterData[0]);

  const newCoordinates = convertArraytoObject.coordinates.split(",");

  return {
    latitude: Number(newCoordinates[0]),
    longitude: Number(newCoordinates[1])
  };
};
