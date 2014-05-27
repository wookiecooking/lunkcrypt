var fs  =  require('fs')
  , en  =  require('./encrypt')
  , de  =  require('./decrypt');

module.exports = function(a, k, d) {
  fs.readFile(a, 'utf8', function (err,db) {
    var c,w;
    if (err) {
      return console.log(err);
    }
    if(d){
      c = en(db,k)
      w = "encrypted";
    } else {
      c = de(db,k) 
      w = "decrypted";
    }
    fs.writeFile(a,c, function(err) {
      if(err) {
          console.log(err);
      } else {
        console.log(a + " was "+w+" and saved!");
      }
    });
  });
}