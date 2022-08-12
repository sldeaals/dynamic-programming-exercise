function minCost(count, height, cost){
    let result = 0;

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
    return result;
}

const N = 4;
const H = [1,3,2,1000000000];
const M = [7,3,6,2];

console.log(minCost(N,H,M));