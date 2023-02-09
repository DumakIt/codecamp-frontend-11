// 예산

// 문제 설명

// S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다. 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다. 그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.

// 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다. 예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.

// 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.

// 제한사항

// d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
// d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
// budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.

// 입출력 예

// d, budget =>	result
// [1,3,2,5,4],	9 => 3
// [2,2,3,3],	10 =>	4

// 입출력 예 설명

// 입출력 예 #1
// 각 부서에서 [1원, 3원, 2원, 5원, 4원]만큼의 금액을 신청했습니다. 만약에, 1원, 2원, 4원을 신청한 부서의 물품을 구매해주면 예산 9원에서 7원이 소비되어 2원이 남습니다. 항상 정확히 신청한 금액만큼 지원해 줘야 하므로 남은 2원으로 나머지 부서를 지원해 주지 않습니다. 위 방법 외에 3개 부서를 지원해 줄 방법들은 다음과 같습니다.

// 1원, 2원, 3원을 신청한 부서의 물품을 구매해주려면 6원이 필요합니다.
// 1원, 2원, 5원을 신청한 부서의 물품을 구매해주려면 8원이 필요합니다.
// 1원, 3원, 4원을 신청한 부서의 물품을 구매해주려면 8원이 필요합니다.
// 1원, 3원, 5원을 신청한 부서의 물품을 구매해주려면 9원이 필요합니다.

// 3개 부서보다 더 많은 부서의 물품을 구매해 줄 수는 없으므로 최대 3개 부서의 물품을 구매해 줄 수 있습니다.

// 입출력 예 #2
// 모든 부서의 물품을 구매해주면 10원이 됩니다. 따라서 최대 4개 부서의 물품을 구매해 줄 수 있습니다.

function solution(d, budget) {
  let answer = 0;
  let result = 0;
  d.sort((a, b) => a - b).map((el) => {
    if (answer + el <= budget) {
      answer += el;
      result++;
    }
    return result;
  });
  return result;
}

//---------------------------------------------------
