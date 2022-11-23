# nodejs-the-net-ninja

https://www.youtube.com/watch?v=-lRgL9kj_h0&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=28&ab_channel=TheNetNinja

using this reference i have used static file to link our css to index.js
// using app.use to serve up static CSS files in public/assets/ folder when /public link is called in ejs files
// app.use("/route", express.static("foldername"));
app.use('/stuff', express.static('stuff'));
