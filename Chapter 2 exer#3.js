// Closure (PART 2)
// You will pass one or more values (as arguments) into toggle(..), and get back a function.
// That returned function will alternate/rotate between all the passed-in values in order, one at a time, as it's called repeatedly.



function toggle(...args) {
  let stateout = -1

  return function argsOutNext() {
    if(args.length === stateout + 1) stateout = 0
    else stateout++
    return args[stateout]
    }
}

var hello = toggle("hello");
var onOff = toggle("on","off");
var speed = toggle("slow","medium","fast");

console.log(hello());      // "hello"
console.log(hello());      // "hello"


console.log(onOff());    // "on"
console.log(onOff());      // "off"
console.log(onOff());      // "on"

console.log(speed());      // "slow"
console.log(speed());      // "medium"
console.log(speed());      // "fast"
console.log(speed());     // "slow"