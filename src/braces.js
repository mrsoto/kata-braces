'use strict';

const braces = (str) => {
  const tokens = Array.from(str);
  const stack = [];

  if (!tokens.length) return false;
  do {
    let nextToken = tokens.shift();

    switch (nextToken) {
      case '{': {
        stack.push(nextToken);
        break;
      }

      case '}': {
        const openner = stack.pop();
        if (openner !== '{') {
          return false;
        }
      }
    }
  } while (tokens.length);
  return !stack.length;
};

module.exports = braces;
