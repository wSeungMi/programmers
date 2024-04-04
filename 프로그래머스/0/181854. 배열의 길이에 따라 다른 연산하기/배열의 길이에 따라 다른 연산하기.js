function solution(arr, n) {
    var answer = [];
    
    if(arr.length % 2 !== 0) {
      return answer = arr.map((val, idx) => idx % 2 === 0 ? val+n : val);
    } else {
      return answer = arr.map((val, idx) => idx % 2 !== 0 ? val+n : val);
    }
    

}