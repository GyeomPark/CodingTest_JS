function solution(my_string) {
    let res = my_string;
    for(let gather of ['a', 'e', 'i', 'o', 'u']) {
        res = res.replace(new RegExp(gather, 'g'), "");
    }
    return res;
}