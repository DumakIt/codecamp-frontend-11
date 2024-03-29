// 최대공약수와 최소공배수

// 문제 설명
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.

// 입출력 예

// n	m	return
// 3,	12 =>	[3, 12]
// 2,	5 => [1, 10]

// 입출력 예 설명

// 입출력 예 #1
// 위의 설명과 같습니다.

// 입출력 예 #2
// 자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.

function solution(n, m) {
  let first = n;
  let second = m;
  let obj = {};
  let aaa = 1;
  let num = 2;

  let i = true;
  while (i) {
    if (Number.isInteger(first / num)) {
      obj[num] = aaa;
      first /= num;
      aaa++;
      console.log(first, "1");
    } else {
      num++;
      aaa = 1;
    }
    if (num >= n || num >= m) i = false;
  }
  return obj;
}

// 풀다가 다 못풀었다 이런 접근방식은 안좋다라는걸 깨닫고 시간이 지났다...
//-----------------------------------------------------------------------------------

// function solution(n, m) {
//   const biggest = Math.max(n, m);

//   let max = 0;
//   for (let i = 1; i <= biggest; i++) {
//     if (n % i === 0 && m % i === 0) {
//       max = i;
//     }
//   }

//   let min = 0;
//   for (let i = biggest; i <= n * m; i += biggest) {
//     if (i % Math.min(n, m) === 0) {
//       min = i;
//       break;
//     }
//   }
//   return [max, min];
// }

// function solution(n, m) {
//   let a = Math.max(n, m);
//   let b = Math.min(n, m);
//   let r = 0;

//   while (a % b > 0) {
//     r = a % b;
//     a = b;
//     b = r;
//   }

//   return [b, (n * m) / b];
// }

// 알고리즘 시간에 문제풀이
