module.exports = function check(str, bracketsConfig) {
  // your solution
  let openarr = [];
  let flag = false;
  let result = false;
        
  for (let char of str) {    
    for (let i = 0;i<bracketsConfig.length;i++){ 
      if (char == bracketsConfig[i][0]){
        if (char != bracketsConfig[i][1] || char != openarr[openarr.length-1]) {
          openarr.push(char);
          flag = true;
          break;
        }
      }
      if (char == bracketsConfig[i][1]){
        if (openarr[openarr.length-1] == bracketsConfig[i][0]) {        
          openarr.splice(-1,1);
          flag = true;
          break;
        }      
      }
    }
    if (flag == false){
      openarr.push('error');
      break;
    }
    else {
      flag = false;
    }  
  }
  if (openarr.length<1){
    result = true;
  }
  return result;
}
