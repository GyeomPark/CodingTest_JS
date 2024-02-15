function solution(l, r) {
    let answer = [];
    for(i = l; i <= r; i++) {
        let arr = String(i)
        if (![...arr].every(x => x === '5' || x === '0')) continue;
        answer.push(i);
    }
    return answer.length ? answer : [-1];
}