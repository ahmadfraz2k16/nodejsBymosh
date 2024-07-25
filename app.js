//global objects in JS and NodeJS
console.log();
setTimeout()
clearTimeout();

setInterval();
clearInterval();

var message = '';
window.message  // we do it in JS, all above functions are prefixed with window. message var is globally available in JS
//NodeJS 
//global objects are prefixed with global. e.g. global.console.log()
global.console.log(message)  //it will show undefined, bcz variables are not global in NodeJS
// can do in node
global.setTimeout(); 
global.clearTimeout();
global.setInterval();
global.clearInterval();