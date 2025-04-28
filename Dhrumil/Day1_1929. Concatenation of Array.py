class Solution:
    def getConcatenation(self, nums: list[int]) -> list[int]:
        ans = nums + nums
        return ans

class Solution:
    def getConcatenation(self, nums: list[int]) -> list[int]:
        return nums*2
    
class Solution:
    def getConcatenation(self, nums: list[int]) -> list[int]:
        n = len(nums)
        ans = [0] * (2 * n)  # Preallocate memory
        for i in range(n):
            ans[i] = nums[i]
            ans[i + n] = nums[i]
        return ans
    