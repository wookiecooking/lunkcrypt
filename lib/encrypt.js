var c = require('crypto');

module.exports = function(value, key) {
  var a  =  new Buffer(value,'binary').toString('base64')
    , b  =  c.createCipher('aes-256-cbc',key)
    , f  =  b.update(a,'utf8','hex');
      f +=  b.final('hex');
    return f;
}