function solution(my_string) {
    // my_string 안의 모든 자연수들의 합
    let num = 0;
    const result = my_string.replace(/[^0-9]/g, "");
    for (let i = 0; i < result.length; i++) {
        num += Number(result[i]);
    }
    return Number(num);
} 