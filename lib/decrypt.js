var crypto = require('crypto');

module.exports = function(value, key) {
  var f, a  = crypto.createDecipher('aes-256-cbc',key)
    , b     = a.update(value,'hex','utf8');
      b    += a.final('utf8');
      f     = new Buffer(b,'base64').toString('binary');
  return f
}

