function solution(n, k) {
    let arr = [];
    for (i = 1; i <= n; i++) {
        if (i % k === 0) {
            arr.push(i);
        } else false;
    }
    return arr;
}