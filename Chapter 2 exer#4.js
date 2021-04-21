// Closure (PART 3)
// In this third and final exercise on closure, we're going to implement a basic calculator. The calculator() function will produce an instance of a calculator that maintains its own state, in the form of a function

function useCalc(calc, keys) {
  return [...keys].reduce(function showDisplay(display, key) {
    var ret = String(calc(key));
    return display + (ret != "" && key == "=" ? "=" : "") + ret;
  }, "");
}

function formatTotal(display) {
  if (Number.isFinite(display)) {
    // constrain display to max 11 chars
    let maxDigits = 11;
    // reserve space for "e+" notation?
    if (Math.abs(display) > 99999999999) {
      maxDigits -= 6;
    }
    // reserve space for "-"?
    if (display < 0) {
      maxDigits--;
    }

    // whole number?
    if (Number.isInteger(display)) {
      display = display.toPrecision(maxDigits).replace(/\.0+$/, "");
    }
    // decimal
    else {
      // reserve space for "."
      maxDigits--;
      // reserve space for leading "0"?
      if (Math.abs(display) >= 0 && Math.abs(display) < 1) {
        maxDigits--;
      }
      display = display.toPrecision(maxDigits).replace(/0+$/, "");
    }
  } else {
    display = "ERR";
  }
  return display;
}

function calculator() {
  let doneValue = 0;
  let digit = "";
  let operation = "=";

  return input;

  function input(value) {
    if (/\d/.test(value)) {
      digit += value;
      return value;
    } else if (/[+-/*]/.test(value)) {
      if (operation !== "=" && digit !== "") {
        input("=");
      } else if (digit !== "") {
        doneValue = Number(digit);
      }
      operation = value;
      digit = "";
      return value;
    } else if (value === "=" && operation !== "=") {
      doneValue = operExec(doneValue, operation, Number(digit));
      operation = "=";
      digit = "";
      return formatTotal(doneValue);
    }
    return "";
  }

  function operExec(digit1, opValue, digit2) {
    let operator = {
      "+": (dig1, dig2) => dig1 + dig2,
      "-": (dig1, dig2) => dig1 - dig2,
      "*": (dig1, dig2) => dig1 * dig2,
      "/": (dig1, dig2) => dig1 / dig2,
    };
    return operator[opValue](digit1, digit2);
  }
}

let calc = calculator();

console.log(calc("4")); // 4
console.log(calc("+")); // +
console.log(calc("7")); // 7
console.log(calc("3")); // 3
console.log(calc("-")); // -
console.log(calc("2")); // 2
console.log(calc("=")); // 75
console.log(calc("*")); // *
console.log(calc("4")); // 4
console.log(calc("=")); // 300
console.log(calc("5")); // 5
console.log(calc("-")); // -
console.log(calc("5")); // 5
console.log(calc("=")); // 0
console.log(useCalc(calc, "4+3=")); // 4+3=7
console.log(useCalc(calc, "+9=")); // +9=16
console.log(useCalc(calc, "*8=")); // *5=128
console.log(useCalc(calc, "7*2*3=")); // 7*2*3=42
console.log(useCalc(calc, "1/0=")); // 1/0=ERR
console.log(useCalc(calc, "+3=")); // +3=ERR
console.log(useCalc(calc, "51=")); // 51
