var crypto = require('crypto');

/**
 * Decrypts file
 * @param  value [String to be decrypted]
 * @param  key [Decryption key]
 * @return  string [returns decrypted string, or empty]
 */

var decryption= function (value, key) {
  var file;
  var cipher= crypto.createDecipher('aes-256-cbc',key),
  utf8Support= cipher.update(value,'hex','utf8');
  utf8Support += cipher.final('utf8');
  file = new Buffer(utf8Support,'base64').toString('binary');
  return file
}

module.exports= decryption

