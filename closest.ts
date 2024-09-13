export function closest(nums: number[], target: number): number {
  let closeSum = Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (
          Math.abs(target - closeSum) >
          Math.abs(target - (nums[i] + nums[j] + nums[k]))
        ) {
          closeSum = nums[i] + nums[j] + nums[k];
        }
      }
    }
  }

  return closeSum;
}

module.exports = { closest };
