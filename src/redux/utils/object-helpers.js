export const updateObjectInArray = (
  arr,
  searchedProp,
  propName,
  newObjProps,
) => {
  return arr.map((item) => {
    if (item[propName] !== searchedProp) return item;

    return {
      ...item,
      ...newObjProps,
    };
  });
};
