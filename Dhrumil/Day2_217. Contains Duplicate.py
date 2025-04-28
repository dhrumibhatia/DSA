class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        return False if len(set(nums)) == len(nums) else True 
    

class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        c=[]
        for i in nums:
            if i in c:
                return True
            else:
                c.append(i)    
        return False
    
class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False

#o(n)
nums = [1,2,3]
res = Solution().containsDuplicate(nums)
print(res)