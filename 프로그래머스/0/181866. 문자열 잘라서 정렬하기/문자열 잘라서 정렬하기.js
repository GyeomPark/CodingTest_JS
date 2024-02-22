const solution = (myString) => {
  const res = myString.split('x').filter(Boolean).sort();
  return res;
}