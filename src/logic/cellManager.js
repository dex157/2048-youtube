import { uniqueId } from 'lodash'
export const create = (x, y, value) => ({
  id: uniqueId(),
  x,
  y,
  value,
})
