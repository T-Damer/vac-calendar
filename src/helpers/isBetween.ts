export default function isBetween(
  number: number,
  first: number,
  second: number
) {
  return (number - first) * (number - second) <= 0
}
