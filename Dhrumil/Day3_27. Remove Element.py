# 27. Remove Element

class Solution:
    def removeElement(self, nums: list[int], val: int) -> int:
        return len([i for i in nums if i != val])

#oneliner



nums = [3,2,2,3]
val = 3
nums=[0,1,2,2,3,0,4,2]
val=2
res = Solution().removeElement(nums,val)
print(res)
#o(n)



class Solution:
    def removeElement(self, nums: list[int], val: int) -> int:
        k = 0
        for i in range(len(nums)):
            if nums[i] != val:
                nums[k] = nums[i]
                k+=1
        return k

        

nums = [3,2,2,3]
val = 3
nums=[0,1,2,2,3,0,4,2]
val=2
res = Solution().removeElement(nums,val)
print(res)
#o(n)



class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        
        for i in range(len(nums) - 1, -1, -1):  # iterate backwards
            if nums[i] == val:
                del nums[i]
        return len(nums)