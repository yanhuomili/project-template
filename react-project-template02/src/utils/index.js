export const formatNumber = (n) => {
  if (isNaN(n)) {
    return '00'
  }
  if (parseInt(n) > 9) {
    return n
  }
  return '0' + parseInt(n)
}
