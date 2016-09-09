function decode(a){
  var keys = a.match(/\d+/g),
      keyNum = [],
      trunc = a,
      buff,
      letter,
      word='';

  keys.forEach(function(item){
    keyNum.push(item[0]);
  });

  for(var i = 0; i<keyNum.length; i++){
    buff = trunc.split(keyNum[i]);
    letter = buff[1][keyNum[i]];
    trunc = buff.slice(1).join(keyNum[i]);
    word += letter;
  }

  return word;
}

module.export = decode;
// decode('0h2zyi2467');
