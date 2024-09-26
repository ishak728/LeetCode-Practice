/**
 * @param {string} s
 * @return {number}
 */

/*
var romanToInt = function (s) {
   

    let x = 0;

    for (let i = 0; i < s.length;) {

        if (s[i] === "M") {
            x += 1000;
            i+=1
        } else if (s[i] === "D") {
            x += 500;
            i+=1
        } else if (s[i] === "C") {
            if(s[i+1]==="D"){
                x+=400
                i+=2
            }else if(s[i+1]==="M"){
                x+=900
                i+=2
            }else{
                x+=100
                i+=1
            }

        } else if (s[i] === "L") {
            x+=50
            i+=1
        } else if (s[i] === "X") {
            if(s[i+1]==="L"){
                x+=40
                i+=2
            }else if(s[i+1]==="C"){
                x+=90
                i+=2
            }else{
                x+=10
                i+=1
            }
        } else if (s[i] === "V") {
            x+=5
            i+=1
        } else if (s[i] === "I") {
            if(s[i+1]==="X"){
                x+=9
                i+=2
            }else if(s[i+1]==="V"){
                x+=4
                i+=2
            }else{
                x+=1
                i+=1
            }
        }
    }

    return x;
};
*/


var romanToInt = function(s) {
    const obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    
    for (let i = 0; i < s.length; i++) {
        let currentVal = obj[s[i]];
        let nextVal = obj[s[i + 1]];
        
        if (nextVal > currentVal) {
            total -= currentVal;  
        } else {
            total += currentVal;  
        }
    }
    
    return total;
};

console.log(romanToInt("MCMXCIV"));  


 



