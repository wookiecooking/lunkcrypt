#!/usr/bin/env node
var gp  =  require('./lib/gpass')
  , f   =  require('./lib/file')
  , h   =  require('./lib/help')
  , r   =  require('./lib/recurse')
  , p   =  require('commander');


p
  .version('0.0.5')
  .option('-p, --password [pass]', 'Password for file')
  .option('-d, --decrypt [file]', 'decrypt')
  .option('-e, --encrypt [file]', 'encrypt')
  .option('-g, --generate', 'Generate Password')
  .option('-r, --recursive [folder]', 'recursive')
  .on('--help', h)
  .parse(process.argv);


if (p.encrypt) {
  var key;
  if(p.generate){
    key = gp(13);
  } else {
    key = p.password;
  }
  if(p.recursive) {
    r(p.recursive, key, true)
  } else {
    f(p.encrypt, key, true)  
  }
  if(p.generate) {
    console.log('Password is '+ key)
  }
}

if (p.decrypt) {
  if(p.recursive) {
    r(p.recursive, p.password)
  } else {
    f(p.decrypt, p.password)
  }
}
