# Brow Store

Utility Functions for WEB STORAGE API

## Usage

- setLocal (key: string, value: any, enc: [ boolean, string ] = [ false, '' ])
  key: new key for the value adding into `localStorage`
  value: value adding into `localStorage`
  enc: if true value will be encoded,
- getLocal (key: string, defaultValue: any = null, enc: [ boolean, string ] = [ false, ''])
  key: key of the value in `localStorage`
  defaultValue: function will return default if the real value is null
  enc: if true value will be decoded
- removeLocal (key: string)
  key: will remove value with the this key
- clearLocal ()
  : will clear all `localStorage`
- getLocalLength ()
  : will return length of `localStorage`
- getLocalKey (index: number, defaultValue: any = null, log: boolean = false)
  index: index of the value in `localStorage`
  defaultValue: function will return default if the real value is null
  log: if true function will log the value, besides returning
- getLocalValue (index: number, defaultValue: any = null, log: boolean = false, enc: [ boolean, string ] = [ false, '' ])
  index: index of the value in `localStorage`
  defaultValue: function will return default if the real value is null
  log: if true function will log the value, besides returning
  enc: if true value will be decoded
- getLocalKeys (log: boolean = false)
  log: if true function will log the value, besides returning
  : will return all the keys in `localStorage`
- getLocalValues (log: boolean = false)
  log: if true function will log the value, besides returning
  : will return all the values in `localStorage`
- getAllLocal ()
  : will return all the key value pairs in `localStorage`
