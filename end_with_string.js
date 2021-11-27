function confirmEnding(str, target) {
	//str is given string.In this program we simply match the whether the target string is at the end of giver string or not. 
  str=str.split("" ).reverse();
  target=target.split("").reverse();
  let count=0;
  let jcount=0;
    for(let j=0;j<target.length;j++){
        jcount+=1;
      if(str[j]==target[j]){
        count+=1;
      }
  }
  console.log(jcount);
  console.log(count);
  if(count==jcount){
    return true
  }
  return false;
}
confirmEnding("we fly high","high")
//output is true