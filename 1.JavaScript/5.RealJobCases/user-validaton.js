function ValidationFunc(str) {

    let len = str.length;
    let FirstChar = str.charAt(0); //a
    let LastChar = str.charAt(len - 1); //c
    // username beetwen 4 and 24 characters. 
    if (len >= 4 && len <= 25) &&
        // first character must be a letter. It can only contains letters, numbers, underscores and can't end in underscore
        (FirstChar.match(/[a-z]/i)) && (str.match("^[A-Za-z0-9_]*$")) && (!LastChar.match(/_/i)) {
            {
                str = true;
            } else {
                str = false;
            }
            return str;

        }

    console.log(ValidationFunc(readline()));