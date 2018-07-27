// ./src/helpers/filterMethods.js

export const filterCategories = (businesses) => {
    return [...(new Set(businesses.map(({ category }) => category.toLowerCase())))];
};

export const filterLocations = (businesses) => {
    return [...(new Set(businesses.map(({ location }) => location.toLowerCase())))];
};

