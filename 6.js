function getAngle(time) {
  const [hours, mins] = time.split(':');
  const parsedHours = Number(hours > 12 ? hours - 12 : hours);
  const parsedMins = Number(mins);
  const hoursAngle = (parsedMins + parsedHours * 60) * 0.5;
  const minsAngle = parsedMins * 6;
  return hoursAngle > minsAngle
    ? 360 - (hoursAngle - minsAngle)
    : minsAngle - hoursAngle;
}

function angles(times) {
  const result = times.reduce((angle, time) => {
    if (/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(time)) {
      return angle + getAngle(time);
    }
    return angle - 100;
  }, 0);

  return result;
}

export default angles;
