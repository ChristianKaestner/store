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

export const getSlideCount = windowWidth => {
  switch (true) {
    case windowWidth >= 1200:
      return 6;
    case windowWidth <= 1199 && windowWidth >= 900:
      return 4;
    case windowWidth <= 899 && windowWidth >= 600:
      return 3;
    case windowWidth <= 599:
      return 2;
    default:
      return 6;
  }
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
