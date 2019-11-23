function nthCase(n, message) {
  if (n <= 0) return message;
  if (!message) return '';
  return message
    .split('')
    .map((char, index) => {
      if ((index + 1) % n === 0) {
        if (/[A-Z]+/.test(char)) {
          return char.toLowerCase();
        }
        return char.toUpperCase();
      }
      return char;
    })
    .join('');
}

export default nthCase;
