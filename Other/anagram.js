// Задача выянить является ли слово анаграммой
// На вход  в функцию идут два string значения
// 1 слово с которым нужно сопоставить
// 2 слово которое нужно проверить
// При запусте формируются упрощенные объекты
// И впоследствии они уже сравниваются
const buildCharObject = (str) => {
  let charObj = {};
  for (let char of String(str).replace(/[^\w]/g).toLowerCase()) {
    charObj[char] = charObj[char] + 1 || 1;
  }
  return charObj;
};

const anagram = (strA, strB) => {
  if (String(strA).length === String(strB).length) {
    let aCharObject = buildCharObject(strA);
    let bCharObject = buildCharObject(strB);
    if (Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
      return false;
    }
    for (let char in aCharObject) {
      if (aCharObject[char] !== bCharObject[char]) {
        return false;
      }
    }
    return true;
  }
  return "Invalid value";
};

console.log(anagram(21, 12));
console.log(anagram('table', 'leabt'));
console.log(anagram('21', '123'));
console.log(anagram('21', '13'));
console.log(anagram('smart', 'arsmt'));
