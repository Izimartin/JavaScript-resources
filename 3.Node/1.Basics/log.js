export const log = (...args) => globalThis.console.log(...args)
//Other Module
import { log } from '.log'
log('hola')