/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//   haystack = "sadbutsad", needle = "sad"

var strStr = function (haystack, needle) {
    let p = -1
    let k = 0

    for (let i = 0; i < haystack.length; i++) {

        if (haystack[i] === needle[0]) {

            p = i
            k = i

            for (let j = 1; j < needle.length; j++) {

                k=k+1
                

                if (haystack[k] === needle[j]) {

                } else {

                    p = -1
                }
            }
            if (p !== -1) {

                return p
            }
        }

    }

    return -1

};

console.log(strStr(haystack = "mississippi", needle = "issip"))