function solution(arr, queries) {
    var answer = [];
    queries.map((el) => {
        const [s, e, k] = el;
        const filterArr = arr.filter((curr, i) => 
                            s <= i && i <= e && k < curr);
        answer.push(filterArr.length ? Math.min(...filterArr) : -1);
    })
    
    return answer;
}