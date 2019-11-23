function series(n) {
  if (n <= 0) return -1;
  let startNumber = -3;
  let added = 1;
  let result;
  for (let i = 1; i <= n; i++) {
    result = startNumber;
    startNumber += added;
    added += 2;
  }
  return result;
}

export default series;
