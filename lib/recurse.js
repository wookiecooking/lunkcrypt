var file  =  require('./file'),
wrench  =  require('wrench');

/**
 * Walk a directory and pass files to encryption/decryption
 * @param  path [which directory to walk]
 * @param  key  [key to encrypt/decrypt file with]
 * @param  next [everything is good to go]
 */

var recursiveDir = function(path, key, next) {
  wrench.readdirRecursive(path, function(err, files) {
    for(i in files) { file(p+files[i], key, next) }
  });
}

module.exports = recursiveDir