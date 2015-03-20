/**
 * Grabs randomly from the alphabet to generate password
 * ***********Needs to be enhanced/revisited.**************
 */

var generatePassword = function(n) {
      var alpha = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
      var i = (Math.random() * (alpha.length - 1)).toFixed(0);
      return n > 0 ? alpha[i] + generatePassword(n - 1, alpha) : '';
}
module.exports = generatePassword