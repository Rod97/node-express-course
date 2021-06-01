const names = require('./3-names')
console.log(names)

const sayHi = require('./4-utils')

const data = require('./6-exports')

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)
sayHi(data.singlePerson.name)

console.log(data)

require('./7-add')