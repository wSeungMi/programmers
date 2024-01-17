function solution(code) {
    var ret = '';
    let mode = 0;
    // idx는 0 ~ code-1
    for(let i = 0; i <= code.length-1; i++) {     
        if (mode === 0) {
            // 조건 비교시에 1은 문자열이다.
            if (code[i] === "1") {
               mode = 1
            } else {
                if (code[i] !== "1" && i % 2 === 0) {
                    ret += code[i];
                }
            }
        } else {
            if (code[i] === "1") {
                mode = 0;
            } else {
                if (code[i] !== "1" && i % 2 !== 0) {
                    ret += code[i];
                }
            }
        }
      
    }
    return ret.length > 0 ? ret : 'EMPTY';
}