function solution(my_string) {
    const res = my_string.toLowerCase();
    return [...res].sort().join('');
}