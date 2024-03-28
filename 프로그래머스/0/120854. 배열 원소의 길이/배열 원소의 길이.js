function solution(strlist) {
    const arr = [];
    for (let i = 0; i < strlist.length; i++) {
        arr.push(strlist[i].length);
    }
    return arr;
}