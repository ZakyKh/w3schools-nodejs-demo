import http from 'http'
import formidable from 'formidable'
import fs from 'fs'

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = formidable(formidable.DEFAULT_OPTIONS);
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload[0].filepath;
      var newpath  = '/home/mzaky/Personal/Projects/ZakyKh/w3schools-nodejs/7-events' + oldpath;
      console.log(oldpath, newpath)
      console.log(typeof oldpath,typeof newpath)
      fs.exists(oldpath, (e) => {
        console.log(e ? 'it exists' : 'no passwd!');
      }); 
      fs.copyFile(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080); 