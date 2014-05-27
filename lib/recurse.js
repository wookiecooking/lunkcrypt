var f  =  require('./file')
  , w  =  require('wrench');

module.exports = function(p, k, a) {
  w.readdirRecursive(p, function(err, d) {
    for(i in d){
      f(p+d[i], k, a)
    }
  });
}