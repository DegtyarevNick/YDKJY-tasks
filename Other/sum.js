// Задача сделать функцию суммы с каррированием

function sum(number) {
  let result = [typeof number === 'number' ?  number : NaN ];
  if (result.includes(NaN)) {
    console.log("Invalid value")
    return
  }
  console.log(result);
  return function sumWithСurrying() {
    const args = arguments;
    result.push(result[result.length-1] + args[0]);
    console.log(result);
    return sumWithСurrying;
  };
}

sum(1);
sum('asdf');
sum(1)(2)(3);