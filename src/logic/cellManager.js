import {uniqueId} from 'lodash'

const create = (x, y, value, id) => ({
  x, y, value, id: id ? id : uniqueId()
})

export {create}
