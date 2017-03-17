function iterativeLog(arr){
  arr.forEach((elm, index, arr) =>{
    console.log(`${index}: ${elm}`);
  }
)}

function iterate(callback){
  var arr = ["Things", "stuff", "My Programming Skillz", "Steven"];
  arr.forEach(callback);
  return arr;
}

function doToArray(arr, callback){
  arr.forEach(callback);
}
