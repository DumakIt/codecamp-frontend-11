// num을 입력받아 1부터 num까지의 숫자 중 홀수로 구성된 문자열을 만들어야 합니다.
// num이 5일 경우에는 "135"입니다.
// num은 숫자열입니다.
// for을 이용해서 문제를 풀어야 합니다.

function makeOdd(num) {
	let str = '';
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      str += i
    }
  }
  return str
}