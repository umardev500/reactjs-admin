import { checkObj } from './checkObj'

export const checkState = (
  id: string | number,
  key: string,
  data: any
): boolean => {
  const checkdata = checkObj(data, key)
  const checkKey: boolean = checkdata ? checkObj(data[key], id) : false
  const elState: boolean = checkKey && data[key][id].state

  return elState
}
