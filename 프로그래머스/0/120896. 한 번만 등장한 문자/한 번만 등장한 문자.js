function solution(s) {
  const arr = [];
  const res = s.split('');

  res.forEach((item) => {
    if(s.indexOf(item) === s.lastIndexOf(item)) {
      arr.push(item);
    }
  })
  return arr.sort().join('');
}