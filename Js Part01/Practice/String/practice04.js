//! 2: Write a function to count the number of vowels in a string?

function checkCountVowel(str) {
    let vowels = "aeiou";
    let count = 0;
    for (let item of str) {

        let checkVowel = vowels.includes(item)
        if (checkVowel) {
            count++;
        }
    }
    return count;

}

console.log(checkCountVowel("Hii am mayur thakor from Gujarat"));