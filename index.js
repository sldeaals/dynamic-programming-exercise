function minCost(count, height, cost){
    let result = 0;

    try {
        const isCountConstraint = count < 1 || count > 10**5;
        const isHeightConstraint = height.some((value) => value < 1) || height.some((value) => value > 10**9);
        const isCostConstraint = cost.some((value) => value < 1) || cost.some((value) => value > 10**9);
        
        if (isCountConstraint){
            throw 'Constraint Error: count must follow constraint 1 ≤ N ≤ 10^5';
        } else if (isHeightConstraint){
            throw 'Constraint Error: height must follow constraint 1 ≤ H_i ≤ 10^9';
        } else if (isCostConstraint){
            throw 'Constraint Error: cost must follow constraint 1 ≤ M_i ≤ 10^9';
        }

        for (let i = 0; i < count - 1; i++) {
            if (height[i] === height[i+1]){
                if (cost[i] > cost[i+1]){
                    height[i+1]++;
                    result += cost[i+1];
                } else {
                    height[i]++;
                    result += cost[i];
                }
            }
        }
    } catch (error){
      console.log(error);
    }
    
    return result;
}

const N = 4;
const H = [1,3,2,1000000000];
const M = [7,3,6,2];

console.log(minCost(N,H,M));