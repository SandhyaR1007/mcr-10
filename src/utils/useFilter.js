export const useFilter = () => {
  const filterByDepartment = (productsData, selectedDepartment) => {
    return selectedDepartment === "All Departments"
      ? productsData
      : productsData.filter(
          ({ department }) => department === selectedDepartment
        );
  };
  const filterByStock = (productsData, isStock) => {
    return isStock
      ? productsData.filter(({ stock }) => stock <= 10)
      : productsData;
  };
  const sortByCategory = (productsData, selectedCategory) => {
    return selectedCategory
      ? selectedCategory === "name"
        ? [...productsData].sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          })
        : [...productsData].sort(
            (a, b) => a[selectedCategory] - b[selectedCategory]
          )
      : [...productsData];
  };
  return { filterByDepartment, filterByStock, sortByCategory };
};
