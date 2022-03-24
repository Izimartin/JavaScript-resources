const palindrome = str => {
    // const reversedStr = str
    //     .split("")
    //     .reverse()
    //     .join("");
    // return str === reversedStr;
    let checker = "";
    str = str.toLowerCase();
    checker = str;
    console.log(checker); checker = str.split('')
    console.log(checker);
    checker = checker.reverse();
    console.log(console.log); console.log
    checker = checker.join('');
    console.log(str === str.split('').reverse().join(''));
    return checker === str;
};
palindrome("Kayak");
