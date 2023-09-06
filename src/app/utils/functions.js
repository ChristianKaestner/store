// export const brandsAlphabetIndex = brands => {
//   let alphabetIndex = '';
//   return brands
//     .sort((a, b) => a.brand.localeCompare(b.brand))
//     .map(item => {
//       if (alphabetIndex !== item.brand[0]) {
//         alphabetIndex = item.brand[0];
//         return { ...item, letter: item.brand[0].toUpperCase() };
//       }
//       return item;
//     });
// };
export const addAlphabetIndex = (arr, field) => {
  let alphabetIndex = '';

  return arr
    .sort((a, b) => a[field].localeCompare(b[field]))
    .map(item => {
      if (alphabetIndex !== item[field][0]) {
        alphabetIndex = item[field][0];
        return { ...item, letter: item[field][0].toUpperCase() };
      }
      return item;
    });
};

export const addCount = (arr, field, value) => {
  const filtred = arr.filter(n => {
    // console.log(n[field]);
    return n[field] === value;
  });
  return filtred.length;
};

// export const brandsInputFilter = (brands, filter) => {
//   return brands.filter(item => {
//     if (filter !== '') {
//       return item.brand.toLowerCase().startsWith(filter.toLowerCase());
//     }
//     return item;
//   });
// };

// const fieldArr = item[field].split(' ');
// if (fieldArr.length > 1) {
//   return console.log('qwe');
// }

export const filterByInput = (arr, filter, field) => {
  return arr.filter(item => {
    if (filter !== '') {
      const fieldArr = item[field].split(' ');
      const matches = fieldArr.find(n =>
        n.toLowerCase().startsWith(filter.toLowerCase())
      );
      if (matches) {
        return item;
      }
      return;
    }
    return item;
  });
};

// export const filterByInput = (arr, filter, field) => {
//   return arr.filter(item => {
//     if (filter !== '') {
//       return item[field].toLowerCase().startsWith(filter.toLowerCase());
//     }
//     return item;
//   });
// };

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

export const catSlug = (cat, subCat) => {
  const sub = subCat.name.toLowerCase().split(' ');
  return `${cat.name}?${sub.join('_')}`;
};
