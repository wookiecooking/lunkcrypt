var p = function(n) {
      var a = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
      var i = (Math.random() * (a.length - 1)).toFixed(0);
      return n > 0 ? a[i] + p(n - 1, a) : '';
}
module.exports = p