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

export const chipColor = label => {
  switch (label.promotion) {
    case 'new':
      return 'light';
    case 'sale':
      return 'subsidiary';
    case 'hot':
      return 'hot';
    default:
      return 'hot';
  }
};

export const catSlug = (cat, subCat) => {
  const sub = subCat.name.toLowerCase().split(' ');
  return `${cat.name}?${sub.join('_')}`;
};

export const getSlideCount = (mediaXS, mediaSM, mediaMD, mediaLG) => {
  if (mediaXS) return 2;
  if (mediaSM) return 3;
  if (mediaMD) return 4;
  if (mediaLG) return 6;
};

export function rotateImage(image, angle = 90) {
  return new Promise(resolve => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = URL.createObjectURL(image);

    img.onload = function () {
      if (angle === 90 || angle === -90) {
        canvas.width = img.height;
        canvas.height = img.width;
      } else {
        canvas.width = img.width;
        canvas.height = img.height;
      }

      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.drawImage(img, -img.width / 2, -img.height / 2);

      canvas.toBlob(blob => {
        const rotatedImage = new File([blob], image.name, { type: image.type });
        resolve(rotatedImage);
      }, image.type);
    };
  });
}

export const getAllFilesSize = files => {
  let filesSize = 0;
  Object.values(files).forEach(file => (filesSize += file.size));
  return filesSize;
};

export const getSearchParams = (searchParams, field) => {
  const matched = searchParams.get(field);
  if (!matched) return [];
  return matched.split(',');
};

export const objectToArray = obj => {
  const result = [];
  Object.entries(obj).forEach(([name, values]) => {
    if (name === 'page' || name === 'limit') return;
    values.forEach(value => {
      result.push({ name, value });
    });
  });
  return result;
};

export const updatedFilterLabel = (name, value) => {
  if (name === 'weight') return value + ' gram';
  if (name === 'size') return value + ' mm';
  if (name === 'price') return 'price ' + value;
  return value;
};

// export const getGoods = (data, promoted, category) => {
//   if (promoted) return data.filter(n => n.isPromoted);
//   if (category) return data.filter(n => n.categories === category);
//   return data;
// };

export const brandsForMetaData = products => {
  const uniqBrands = [];
  products.forEach(product => {
    if (!uniqBrands.includes(product.brand)) {
      uniqBrands.push(product.brand);
    } else return;
  });
  return uniqBrands.join(', ');
};

export const profileFavoritePerRow = (lg, md, sm) => {
  if (lg) return '23%';
  if (md) return '30%';
  if (sm) return '30%';
  return '47%';
};

export const defineCategory = product => {
  if (product.accessories !== null) return 'accessories';
  if (product.coals !== null) return 'coals';
  if (product.hookahs !== null) return 'hookahs';
  if (product.tobacco !== null) return 'tobacco';
  return;
};
