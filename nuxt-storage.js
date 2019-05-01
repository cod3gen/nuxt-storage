import {
  getData as getDataLocal,
  setData as setDataLocal,
  removeItem as removeItemLocal,
  clearKeys as clearKeysLocal,
  clear as clearLocal
} from './src/local-storage'

import {
  getData as getDataSession,
  setData as setDataSession,
  removeItem as removeItemSession,
  clear as clearSession
} from './src/session-storage'

export default {
  localStorage: {
    getData: getDataLocal,
    setData: setDataLocal,
    removeItem: removeItemLocal,
	clearKeys: clearKeysLocal,
    clear: clearLocal
  },
  sessionStorage: {
    getData: getDataSession,
    setData: setDataSession,
    removeItem: removeItemSession,
    clear: clearSession
  }
}
