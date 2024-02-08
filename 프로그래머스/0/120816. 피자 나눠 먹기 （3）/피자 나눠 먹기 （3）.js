function solution(slice, n) {
   return (slice > n) ? 1 : (n % slice === 0) ? parseInt(n / slice) : parseInt(n / slice) +1;
}