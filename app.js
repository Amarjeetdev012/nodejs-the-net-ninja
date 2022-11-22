var fs = require("fs");

// sync opertaions
// var sample = fs.readFileSync("sample.txt","utf8")

// console.log(sample)

// first give the file name and second give the value of the file o content of the file
// fs.writeFileSync("writeFile.txt", sample)

// async operations
// readfile
// fs.readFile("sample.txt", "utf8", function(err, data) {
//     console.log(data)
// })

//  writefile data
let readfile = fs.readFileSync("sample.txt", "utf8");

fs.writeFile("writeme.txt" , readfile, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
    }
})
