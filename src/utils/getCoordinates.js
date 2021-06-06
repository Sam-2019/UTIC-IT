export const getCoordinates = function (data, id) {
  const FilterData = data.filter((result) => result.name === id);
  const convertArraytoObject = Object.assign({}, FilterData[0]);

  const coordinates = convertArraytoObject.coordinates.split(",");

  return {
    data: FilterData,
    latitude: Number(coordinates[0]),
    longitude: Number(coordinates[1])
  };
};
