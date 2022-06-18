export const checkObj = (obj: any, key: string | number): boolean => {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    return true
  }

  return false
}
