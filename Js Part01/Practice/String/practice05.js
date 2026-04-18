//! 4: Write a JavaScript function to check if the given sting is Pangram or not?

let checkPangram = (str) => {
    let newStr = str.toLowerCase().split("");
    // console.log(newStr);

    let values = newStr.filter((currElm) => {
        return currElm.charCodeAt() >= "a".charCodeAt() && currElm.charCodeAt() <= "z".charCodeAt()
    })
    // console.log(values);

    let unique = new Set(values);

    return unique.size == 26;
}

console.log(checkPangram("The quick brown fox jumps over theg")); 