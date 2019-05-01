import { __getData, __setData, __removeItem, __clear } from './unified-storage'

function getStorage () {
  return 'localStorage' in window && window.localStorage
    ? window.localStorage
    : null
}

export const getData = key => {
  try {
    const ls = getStorage()
    return __getData(ls, key)
  } catch (e) {}

  return null
}

export const setData = (key, value = '', expiryInMinutes = 5, expiryUnit = 'm') => {
  try {
    const ls = getStorage()
    return __setData(ls, key, value, expiryInMinutes, expiryUnit)
  } catch (e) {}
  return null
}

export const removeItem = key => {
  try {
    const ls = getStorage()
    __removeItem(ls, key)
  } catch (e) {}
}

export const clearKeys = () => {
	try {
		const ls = getStorage()
		for ( var i = 0, len = ls.length; i < len; ++i ) {
			const item = ls.getItem(ls.key(i))
			const cacheParsed = JSON.parse(cache)
			const dateCache = cacheParsed.created
			const timeExpire = cacheParsed.expiry
			if (dateCache !== undefined && timeExpire !== undefined) {
				let milisMultiplier = (1000 * 60) // default is in minutes unit

				if (cacheParsed.unit || cacheParsed.unit === 's') { // in second unit
				  milisMultiplier = (1000)
				} else if (cacheParsed.unit || cacheParsed.unit === 'm') { // in minute unit
				  milisMultiplier = (1000 * 60)
				} else if (cacheParsed.unit || cacheParsed.unit === 'h') { // in hour unit
				  milisMultiplier = (1000 * 60 * 60)
				} else if (cacheParsed.unit || cacheParsed.unit === 'd') { // in day unit
				  milisMultiplier = (1000 * 60 * 60 * 24)
				}

				const expiryInMilis = parseInt(timeExpire, 10) * milisMultiplier
				const expiryTime = parseInt(dateCache, 10) + expiryInMilis

				if (expiryTime < timeNow) {
					__removeItem(ls, ls.key(i))
				}
			}
			__getData(ls, ls.key(i))
		}
	} catch (e) {}
	return null
}

export const clear = () => {
  try {
    const ls = getStorage()
    __clear(ls)
  } catch (e) {}
}
