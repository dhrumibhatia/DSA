# Valid Anagram
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
            return sorted((s).lower()) == sorted((t).lower())

s = "Anagram"
t = "nagaram"
res = Solution().isAnagram(s,t)
print(res)


from collections import Counter
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
            return Counter((s).lower()) == Counter((t).lower())

s = "anagram"
t = "nagaram"
res = Solution().isAnagram(s,t)
print(res)

#O(n)