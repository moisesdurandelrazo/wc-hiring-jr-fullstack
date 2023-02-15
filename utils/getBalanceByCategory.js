import getTotals from "./getTotals.js";
import _ from "lodash";

const getBalanceByCategory = (data) => {
  // Create an object with every category as key:
  // example: { category1: [], category2: [], nCategory: [] }
  const itemsByCategory = _.groupBy(data, (item) => item.category);

  // Iterate over each category to get the category data
  const arrayOfBalances = _.map(
    itemsByCategory,
    (categoryElements, categoryKey) => {
      // As we already have an utility to get the totals, we just reuse it and and take the values we need
      const { balance } = getTotals(categoryElements);
      return { [categoryKey]: balance };
    }
  );

  // Just merging into one object
  const mergedCategoriesObject = Object.assign({}, ...arrayOfBalances);

  return mergedCategoriesObject;
};

export default getBalanceByCategory;
