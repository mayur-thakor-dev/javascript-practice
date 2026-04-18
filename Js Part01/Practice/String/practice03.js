// check to given string have all vowels or not

function checkHaveAllVowel(str) {
    let vowels = "aeiou";
    for (let item of vowels) {
        let checker = str.includes(item);
        if (!checker) {
            return false;
        }
    }
    return true;

}

console.log(checkHaveAllVowel("Hii i e o am mayur thakor from Gujarat"));