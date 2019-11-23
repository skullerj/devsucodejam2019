function track(times) {
  let total = times.reduce(
    (sum, time) => sum + (!time || time < 0 ? 0 : time),
    0,
  );
  const result = [];
  // Days
  result.push(Math.floor(total / 86400000));
  total %= 86400000;
  // Hours
  result.push(Math.floor(total / 3600000));
  total %= 3600000;
  // Minutes
  result.push(Math.floor(total / 60000));
  total %= 60000;
  // Seconds
  result.push(Math.floor(total / 1000));
  total %= 1000;
  // MS
  result.push(total);
  return result;
}

export default track;
