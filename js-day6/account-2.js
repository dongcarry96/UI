export let count = 0;
export /* default */function increase() {
  count++;
  console.log('increase :'+ count);
}
export function getCount() {
  return count;
}