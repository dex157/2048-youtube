import {uniqueId} from 'lodash'

const create = (x, y, value) => ({
  x, y, value, id: uniqueId()
})

export {create}
