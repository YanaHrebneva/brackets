module.exports = function check(str, bracketsConfig) {
  let arrayOfBrasckets = bracketsConfig.map( e => e.join(''));

    for (let i = 0; i < arrayOfBrasckets.length; i++){
      if (str.includes(arrayOfBrasckets[i])) {
        str = str.replace(arrayOfBrasckets[i], '');
        i = -1;
      }
    } 

    return str.length != 0;    
}
