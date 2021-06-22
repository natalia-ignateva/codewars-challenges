/*

Challenge: Write maxMatch, which takes an alphanumeric, spaceless, lowercased String as input and returns an Array of all the words found, in the order they were found. All valid words are in the Set VALID_WORDS, which only contains around 500 English words.

Note: This algorithm is simple and operates better on Chinese text, so accept the fact that some words will be segmented wrongly.

*/

function maxMatch(sentence, acc) {
    if (typeof acc === 'undefined') acc = [];
    if (sentence === '') return acc;
    for (let i = sentence.length - 1; i >= 0; i--) {
        const substr = sentence.slice(0, i + 1);
        if (VALID_WORDS.has(substr))
            return maxMatch(sentence.slice(i + 1), [...acc, substr]);
    }
    return maxMatch(sentence.slice(1), [...acc, sentence.slice(0, 1)]);
}
