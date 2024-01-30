function solution(arr, queries) {
    var answer = [];
    for(let i = 0; i < queries.length; i++) {
        let q1 = queries[i][0];
        let q2 = queries[i][1];
        
        let tmp = arr[q1];
        arr[q1] = arr[q2];
        arr[q2] = tmp;
        
        answer = arr;
    }    
    return answer;
}