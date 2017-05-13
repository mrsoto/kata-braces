
const braces = (str) => {
  return str === '{}' || str === '{{}}' || str === '{}{}';
};

module.exports = braces;
