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

export const getSlideCount = (mediaXS, mediaS, mediaSM, mediaMD, mediaLG) => {
  if (mediaXS) return 1;
  if (mediaS) return 2;
  if (mediaSM) return 3;
  if (mediaMD) return 4;
  if (mediaLG) return 6;
};

export const fetchImageFiles = async (imageUrls, deafultURL) => {
  const fetchImageFile = async imageUrl => {
    const response = await fetch(deafultURL + imageUrl);
    const blob = await response.blob();
    const fileName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
    return new File([blob], fileName, { type: blob.type });
  };

  const fetchImageFilePromises = imageUrls.map(imageUrl =>
    fetchImageFile(imageUrl)
  );
  const imageFiles = await Promise.all(fetchImageFilePromises);

  return imageFiles;
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
    if (Array.isArray(values)) {
      values.forEach(value => {
        result.push({ name, value });
      });
    }
  });
  return result;
};

export const updatedFilterLabel = (name, value) => {
  if (name === 'weight') return value + ' gram';
  if (name === 'size') return value + ' mm';
  if (name === 'price') return 'price ' + value;
  return value;
};

export const brandsForMetaData = products => {
  const uniqBrands = [];
  products.forEach(product => {
    if (!uniqBrands.includes(product.brand)) {
      uniqBrands.push(product.brand);
    } else return;
  });
  return uniqBrands.join(', ');
};

export const defineCategory = product => {
  if (product?.accessories && product?.accessories !== null)
    return 'accessories';
  if (product?.coals && product?.coals !== null) return 'charcoals';
  if (product?.hookahs && product?.hookahs !== null) return 'hookahs';
  if (product?.tobacco && product?.tobacco !== null) return 'tobacco';
  return;
};

export const productWithCat = product => {
  if (!product) return;
  const category = defineCategory(product);
  return { ...product, category };
};

export const formatDate = date => {
  const originalDate = new Date(date);
  const day = originalDate.getUTCDate().toString().padStart(2, '0');
  const month = (originalDate.getUTCMonth() + 1).toString().padStart(2, '0');
  const year = originalDate.getUTCFullYear();
  const hours = originalDate.getUTCHours().toString().padStart(2, '0');
  const minutes = originalDate.getUTCMinutes().toString().padStart(2, '0');
  return `${day}-${month}-${year} ${hours}:${minutes}`;
};

export const getUserAddress = user => {
  const address = [];
  if (user?.address?.city) address.push(user?.address?.city);
  if (user?.address?.street) address.push(`street ${user?.address?.street}`);
  if (user?.address?.house) address.push(user?.address?.house);
  if (user?.address?.apartment)
    address.push(`app. ${user?.address?.apartment}`);

  if (address.length > 0) {
    return address.join(', ');
  } else {
    return null;
  }
};

export const getUserInfo = user => {
  const info = [];
  const { firstName, lastName, phone } = user;
  if (firstName && lastName) info.push(`${firstName} ${lastName}`);
  if (phone) info.push(`+380${phone}`);

  if (info.length > 0) {
    return info.join(', ');
  } else {
    return null;
  }
};
