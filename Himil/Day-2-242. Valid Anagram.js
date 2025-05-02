//242. Valid Anagram


function IsAnagram(s, t) {

    let sortedStrOne = s.split('').sort().join('');
    let sortedStrTwo = t.split('').sort().join('');
    console.log(sortedStrOne);
    return sortedStrOne === sortedStrTwo;

}

console.log(IsAnagram("anagram", "nagaram"));
console.log(IsAnagram("rat", "car"));



//logic : sorted string so first i use str to convert into arr usng split('')
// 'rat' => ['r','a','t']  now i use sort it use ANCII values to sort arr so ['a','r','t']
//now i use join('') convert into string so 'art' now same as car
//now compare it so art === acr so give false

