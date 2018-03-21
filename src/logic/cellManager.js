import { uniqueId } from 'lodash'

export const cellStates = {
  IDLE: 'IDLE',
  MOVING: 'MOVING',
  INCREASE: 'INCREASE',
  DYING: 'DYING',
}
export const create = (x, y, value, id) => ({
  id: id ? id : uniqueId(),
  state: cellStates.IDLE,
  x,
  y,
  value,
})
