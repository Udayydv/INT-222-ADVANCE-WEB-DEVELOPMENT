var fs = require("fs");
console.log("Going to open a file");
fs.open('input.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("file opened succesfully");
});