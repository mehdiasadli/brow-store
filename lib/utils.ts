import { encrypt, decrypt } from "./cryp"

type isEncrpyted = [ boolean, string ]

export const setLocal = (key: string, value: any, enc: isEncrpyted = [ false, '' ]) => {
  enc[0]
    ? localStorage.setItem(key, encrypt(JSON.stringify(value), enc[1]))
    : localStorage.setItem(key, JSON.stringify(value))
}

export const getLocal = (key: string, defaultValue = null, enc: isEncrpyted = [ false, '' ]): any => {
  const result = localStorage.getItem(key)
  if (!result) return defaultValue

  return enc[0]
    ? JSON.parse(decrypt(result, enc[1]))
    : JSON.parse(result)
}

export const removeLocal = (key: string) => {
    localStorage.removeItem(key)
}

export const clearLocal = () => {
    localStorage.clear()
}

export const getLocalLength = (): number => localStorage.length

export const getLocalKey = (index: number, defaultValue: any = null, log = false): string | null => {
    const result = localStorage.key(index) || defaultValue
    if(log) console.log('KEY: ', result)

    return result
}

export const getLocalValue = (index: number, defaultKey: any = null, log = false) => {
    const key = getLocalKey(index)
    if(!key) {
        if(log) console.log('VALUE: ', defaultKey)
        return defaultKey
    }

    const result = getLocal(key)

    if (log) console.log('VALUE: ', result)
    return result
}

export const getLocalKeys = (log = false): string[] => {
    let result: string[] = []
    const length = getLocalLength()

    for(let i = 0; i < length; i++) {
        const key = getLocalKey(i)
        if(key) {
            result.push(key)
        }

        if(log) {
            console.log(`KEY ${i + 1}: ${key} `)
        }
    }

    return result
}

export const getLocalValues = (log = false): any[] => {
    let result: any[] = []
    const length = getLocalLength()

    for(let i = 0; i < length; i++) {
        const value = getLocalValue(i)
        if(value) {
            result.push(value)
        }

        if(log) {
            console.log(`VALUE ${i + 1}: ${value} `)
        }
    }

    return result
}

interface LocalObject {
    [key: string]: any
}

export const getAllLocal = () => {
    let result: LocalObject = {}
    const length = getLocalLength()

    for(let i = 0; i < length; i++) {
        const key = getLocalKey(i)
        const value = getLocalValue(i)

        if(key && value) {
            result[key] = value
        }
    }

    return result
}