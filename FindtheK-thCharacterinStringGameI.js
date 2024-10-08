/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {

    const map = {
        a: "b",
        b: "c",
        c: "d",
        d: "e",
        e: "f",
        f: "g",
        g: "h",
        h: "i",
        i: "j",
        j: "k",
        k: "l",
        l: "m",
        m: "n",
        n: "o",
        o: "p",
        p: "q",
        q: "r",
        r: "s",
        s: "t",
        t: "u",
        u: "v",
        v: "w",
        w: "x",
        x: "y",
        y: "z",
        z: "a"
      };

      let word="a"
 
      let p=""

      while(true){
        for(let i=0;i<word.length;i++){
            p=p+map[word[i]]

        }
        word=word+p
        
        if(word.length>=k){
            console.log(word)
            return word[k-1]
        }else{
           
            p=""
        }
      }
      
    
};



console.log(kthCharacter( k = 10))
