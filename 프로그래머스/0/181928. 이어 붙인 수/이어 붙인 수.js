function solution(num_list) {
    var answer = 0;
    let odd = '';
    let even = '';
    num_list.map((list) => {
        if(list % 2 !== 0) {
         odd += list.toString();
        } else {
          even += list.toString();
        }
    })
    return answer = parseInt(odd) + parseInt(even);
}