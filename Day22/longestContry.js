function logestCountry(array) {
    let longest = array[0];
    for (let i = 0; i < array.length; i++) {
        if(array[i].length > longestCountry.length ) {
            longest = array[i];
        }
        
    }
    return longest;
}

console.log(longestCountry(['a', 'ab', 'abc', 'abcd']));
