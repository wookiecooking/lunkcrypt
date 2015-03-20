var fs = require('fs'),
encrypt = require('./encrypt'),
decrypt = require('./decrypt');

var fileManagement = function (file, key, next) {
  fs.readFile(file, 'utf8', function (err, contents) {
    var method, message;
    if (err) {
      return console.log(err);
    }
    if (next){
      method= encrypt(contents, key)
      message= "encrypted";
    } else {
      method= decrypt(contents, key)
      message= "decrypted";
    }
    fs.writeFile(file, method, function (err) {
      if (err) {
          console.log(err);
      } else {
        console.log("%s was %s and saved!", file, message);
      }
    });
  });
}

module.exports = fileManagement