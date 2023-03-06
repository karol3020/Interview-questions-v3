/** Return true if a given string is a palindrome and return false if it
 * is not. Palindromes are strings that form the exact same string when reversed.
 * Make sure to include spaces and punctuation when determining if the given
 * string is a palindrome.
 *
 * @example
 * palindrome('abba') === true
 * palindrome('abcba') === true
 * palindrome('frontend') === false
 */

const palindrome = (str) => {
    // const reversed = str.split('').reverse().join('')
    // return reversed === str 
    // return str.split('').every((char, index) => {
    //     return char === str[str.length - 1 - index]
    // })
    const middle = Math.floor(str.length / 2)
    
    for (let i = 0; i < middle ; ++i) {
        const oppositeIndex = str[str.length - 1 - i]
        
        if (str[i] !== oppositeIndex) {
            return false
        }
    }
    return true
}

module.exports = palindrome;
