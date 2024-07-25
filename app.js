// var logger = require('./logger') //you can now access logger here, because it made public in logger.js
// console.log(logger)
// logger.log('logged message from app.js using logger.js')


// //its better to use const instead of var, by using const it can be changed accidently
// var logger = require('./logger') 
// logger = 1 // assuming you have changed it accidently, you will have error
// logger.log('logged message from app.js using logger.js')

// //its better to use const instead of var, by using const it can be changed accidently
// const logger = require('./logger') 
// logger = 1 // assuming you have changed it accidently, you will have error
// logger.log('logged message from app.js using logger.js')

//logger is no longer object, because we are now exporting only single function log, in logger.js 'module.exports = log;'
const logger = require('./logger') 
//now logger is no longer obj, its a single function from logger.js
//you can use it like this, logger('message')  // it will call the log function from logger.js
logger('logged message from app.js using logger.js') //you can assign better name to function e.g. log     matches the actual func in logger.js