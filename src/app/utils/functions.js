export const addAlphabetIndex = brands => {
  let alphabetIndex = '';
  return brands
    .sort((a, b) => a.brand.localeCompare(b.brand))
    .map(item => {
      if (alphabetIndex !== item.brand[0]) {
        alphabetIndex = item.brand[0];
        return { ...item, letter: item.brand[0].toUpperCase() };
      }
      return item;
    });
};

export const filterByInput = (brands, filter) => {
  return brands.filter(item => {
    if (filter !== '') {
      return item.brand.toLowerCase().startsWith(filter.toLowerCase());
    }
    return item;
  });
};

export const chipColor = label => {
  switch (label) {
    case 'New':
      return 'primary.light';
    case 'Sale':
      return 'primary.accent';
    case 'Hot':
      return 'primary.hot';
    default:
      return 'primary.hot';
  }
};
