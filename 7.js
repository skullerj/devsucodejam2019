function isCompleteGuy(index, mobMiddleIndex) {
  return Math.abs((mobMiddleIndex - index) % 3) === 0;
}

function getGuy(index, n) {
  const mobMiddleIndex = Math.floor(n / 2);
  if (mobMiddleIndex === index) {
    return '(-_-)';
  }
  if (n > 7) {
    if (index === 0) {
      return '(-';
    }
    if (index === n - 1) {
      return '-)';
    }
  }
  if (index > mobMiddleIndex) {
    if (isCompleteGuy(index, mobMiddleIndex)) {
      return '-_-)';
    }
    return '_-)';
  }
  if (isCompleteGuy(index, mobMiddleIndex)) {
    return '(-_-';
  }
  return '(-_';
}

function mob(n) {
  if (!n || n < 1 || n > 255) return '(O_o)';
  const resultGuys = [];
  for (let i = 0; i < n; i++) {
    resultGuys.push(getGuy(i, n));
  }
  return resultGuys.join('');
}

export default mob;
