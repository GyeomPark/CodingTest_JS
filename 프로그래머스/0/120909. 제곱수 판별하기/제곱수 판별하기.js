function solution(n) {
    let result = 0;
    for (let i = 0; i <= n / 2; i++) {
        if (i * i === n) {
            result = 1;
            break;
        } else {
            result = 2;
        }
    }
    return result;
}