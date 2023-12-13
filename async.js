// require a fs

const { error } = require('console');
const fs = require('fs');


// fetch data through fs

fs.readFile('/Users/darvi/OneDrive/Desktop/guvi-BEnd/text.txt','utf8',(error,data)=>{
    if (error){
        console.log(error);
    }
    console.log(data);
});

