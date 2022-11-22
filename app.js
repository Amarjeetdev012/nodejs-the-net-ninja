var fs = require("fs");

// delete file
// fs.unlink("writeme.txt", (err => {
//     if (err) console.log(err);
//     else {
//       console.log(`file Deleted succesfully`)}
//     }
//     )
//     )

// make directory sync
// fs.mkdirSync("filesystem")

// delete directory sync
// fs.rmdirSync("filesystem")

// make directory async

// fs.mkdir("stuff", function(){
//     fs.readFile("sample.txt", "utf8", function(err, data){
//         fs.writeFileSync("./stuff/writeme.txt", data)
//     })
// })

// delete directory

// fs.unlink("./stuff/writeme.txt")
fs.rmdirSync("stuff");
