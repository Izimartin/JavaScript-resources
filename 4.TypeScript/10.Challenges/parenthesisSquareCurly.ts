let test1 = '(())';
let test2 = '({()()}[()])';
let test3 = '{[}()]';

function isopen(character: string){
    return ['(', '{', '['].includes(character)
}

function closes(characterA: string, characterB: string){
    let pairs: Record<string, string> = {'(':')', '{':'}', '[':']'};
    return pairs[characterA] ===characterB;
}

function validate(text: String){
    let stack = [];
    for (let character of text.split('')) {
        if (isopen(character)) {
            stack.push(character);
        } else {
            let topChar = stack.pop();
            if (!closes(topChar, character)) {
                return false;
            }
        }
    }
    return stack.length == 0;
}
console.log(validate(test1));
console.log(validate(test2));
console.log(validate(test3));