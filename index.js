const add = require('./add')
const sub = require('./sub')
const mul = require('./multiply')
const div = require('./div')

const log = console.log;
// log((process.argv))

let a = Number(process.argv[2]) , b = Number(process.argv[3]);
log(add(a,b))
log(sub(a,b))
log(mul(a,b))
log(div(a,b))










