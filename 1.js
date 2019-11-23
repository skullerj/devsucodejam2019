function encrypt(key, message) {
  let finalKey;
  if (!message) return '';
  if (!key) {
    finalKey = 'DCJ';
  } else {
    finalKey = key;
  }
  return message
    .split('')
    .map(l => (/[aeiouAEIOU]+/.test(l) ? `${finalKey}${l}` : l))
    .join('');
}

export default encrypt;
