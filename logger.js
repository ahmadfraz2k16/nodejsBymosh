var url = "http://mylogger.io/log"      //dummy url to showcase an endpoint which offers to log messages in cloud

function log(message){
    //assuming sent req and got response from above dummy url
    console.log(message)
}

// //as variables and functions are only scoped to this file (means private members) 
// //you need to make it public to access in other files
// module.exports.log = log; //now this function is listed in export key of module json array, and accessible in other files

//currently you are exporting a single function as object, object is usefull if we have multiple methods or properties
//so we can simply it for single function, only exporting single function
module.exports = log;