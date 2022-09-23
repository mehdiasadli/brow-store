import * as CryptoJS from 'crypto-js'

export const encrypt = (value: string, secret: string): string => {
    return CryptoJS.AES.encrypt(JSON.stringify(value), secret).toString()
}
export const decrypt = (crypt: string, secret: string): string => {
    const bytes = CryptoJS.AES.decrypt(crypt, secret)
    return bytes.toString(CryptoJS.enc.Utf8)
}
