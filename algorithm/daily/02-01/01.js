// K번째수

// 문제 설명
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항

// array의 길이는 1 이상 100 이하입니다.
// array의 각 원소는 1 이상 100 이하입니다.
// commands의 길이는 1 이상 50 이하입니다.
// commands의 각 원소는 길이가 3입니다.

// 입출력 예

// array,	commands =>	return
// [1, 5, 2, 6, 3, 7, 4],	[[2, 5, 3], [4, 4, 1], [1, 7, 3]] => [5, 6, 3]

// 입출력 예 설명

// [1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
// [1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
// [1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.

function solution(array, commands) {
  let sliceArr = [];
  let result = [];
  for (let i = 0; i < commands.length; i++) {
    sliceArr = array.slice(commands[i][0] - 1, commands[i][1]).sort();
    result.push(sliceArr[commands[i][2] - 1]);
  }
  return result;
}

// 테스트 케이스 1개 통과 실패했다;;; 어떤게 문제인지 찾다가 시간초과;
// 다시 보니 정렬 문제였다 sort((a,b)=>(a-b))를 해야했다

//------------------------------------------------

// function solution(array, commands) {
//   const answer = [];

//   for (let idx = 0; idx < commands.length; idx++) {
//     const i = commands[idx][0];
//     const j = commands[idx][1];
//     const k = commands[idx][2];

//     const result = array.slice(i - 1, j).sort((a, b) => {
//       return a > b ? 1 : -1;
//     });
//     answer.push(result[k - 1]);
//   }
// }

function solution(array, commands) {
  const answer = commands.map((el) => {
    const result = array.slice(el[0] - 1, el[1]).sort((a, b) => {
      return a > b ? 1 : -1;
    });
    return result[el[2] - 1];
  });
  return answer;
}

// 알고리즘 시간에 문제풀이
