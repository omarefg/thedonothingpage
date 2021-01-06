export const filterCodeBlock = (str, times = 1) => {
  if (times < 2) {
    return str.substring(str.indexOf('{') + 1, str.lastIndexOf('}'));
  }
  return filterCodeBlock(str.substring(str.indexOf('{') + 1, str.lastIndexOf('}')), times - 1);
};

export const filterClassCodeBlock = (str = '') => {
  const arr = str.split('return');
  arr.shift();
  return arr.join('');
};
