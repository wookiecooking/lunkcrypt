var crypto = require('crypto');

/**
 * Decrypts file
 * @param  value [String to be Encrypted]
 * @param  key [Encryption key]
 * @return  string [returns Encrypted string]
 */

var encryption= function (value, key) {
  var file= new Buffer(value,'binary').toString('base64'),
  cipher= crypto.createCipher('aes-256-cbc',key),
  encrypted= cipher.update(file,'utf8','hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

module.exports= encryption