const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function decrypt(key, message) {
  if (!message) return '';
  const finalKey = key || 'DCJ';
  vowels.forEach(vowel => {
    while (message.indexOf(`${finalKey}${vowel}`) >= 0) {
      message = message.replace(`${finalKey}${vowel}`, vowel);
    }
  });

  return message;
}

export default decrypt;
