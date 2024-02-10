function solution(a, b) {
    let abString = String(a) + String(b);
    let baString = String(b) + String(a);
    if (parseInt(abString) > parseInt(baString)) {
        return parseInt(abString);
    } else if (parseInt(baString) > parseInt(abString)) {
        return parseInt(baString);
    } else if (parseInt(abString) === parseInt(baString)) {
        return parseInt(abString);
    }
}