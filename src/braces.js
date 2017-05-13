'use strict';

const braces = (str) => {
  const tokens = Array.from(str);
  const stack = [];
  const EOS = 'EOS';
  const closeBraces = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  if (!tokens.length) return false;

  for (;;) {
    let nextToken = tokens.shift();

    switch (nextToken || EOS) {
      case '(':
      case '[':
      case '{': {
        stack.push(nextToken);
        break;
      }

      case ')':
      case ']':
      case '}': {
        const openToken = stack.pop();
        const expectedCloser = closeBraces[openToken];
        if (nextToken !== expectedCloser) {
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
