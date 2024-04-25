//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500115     Name: Lalita Benjamanukul

function findVowels(word) {
    //your code here...

    const vowels = ['a', 'e', 'i', 'o', 'u']
    const result = {}

    for (index = 0; index < word.length; index++) {
        const char = word[index].toLowerCase()
        // console.log(char);

        if (vowels.includes(char)) {
            if (!result[char]) {
                result[char] = [index.toString()]
            } else {
                result[char].push(index.toString())
            }
        }

    }
    return result
}

console.log(findVowels("Heleelaeiouo"));
// Output
// {
//   e: [ '1', '3', '4', '7' ],
//   a: [ '6' ],
//   i: [ '8' ],
//   o: [ '9', '11' ],
//   u: [ '10' ]
// }
