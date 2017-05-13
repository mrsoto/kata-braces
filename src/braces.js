'use strict';

const braces = (str) => {
  const tokens = Array.from(str);
  const stack = [];
  const EOS = 'EOS';

  if (!tokens.length) return false;

  for (;;) {
    let nextToken = tokens.shift();

    switch (nextToken || EOS) {
      case '{': {
        stack.push(nextToken);
        break;
      }

      case '}': {
        const openner = stack.pop();
        if (openner !== '{') {
          return false;
        }
        break;
      }

      case EOS: {
        return !stack.length;
      }

      default: {
        return false;
      }
    }
  }
};

module.exports = braces;
