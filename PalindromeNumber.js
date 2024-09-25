/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
   

    let numberStr = x.toString()   
    let length = numberStr.length

 
    for (let i = 0; i < length / 2; i++) {
        if (numberStr[i] !== numberStr[length - 1 - i]) {
            return false
        }
    }

    return true
};



console.log(isPalindrome(121))



