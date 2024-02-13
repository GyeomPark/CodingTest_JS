function solution(start_num, end_num) {
    
    let arr = Array.from(Array(end_num - start_num + 1).keys()).map(v=>v+start_num);
    return arr;
}