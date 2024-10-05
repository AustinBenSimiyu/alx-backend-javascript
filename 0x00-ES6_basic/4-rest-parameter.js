export default function returnHowManyArguments(...theArgs) {
  let total = 0;
  for (let arg of theArgs) {
    total += 1;
    const arg2 = arg;
    arg = arg2;
  }
  return total;
}
