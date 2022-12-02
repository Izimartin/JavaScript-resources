txt.addEventlistener("input", event => {

    let text = event.target.value;
    // Regex to eliminate all punctuations
    text = text.replace(/[$\.¿\?,;]/g, " ");
    // Regex to trim with space
    text = text.replace(/\s+/g, " ").trim();

    text = text.toUpperCase();

    const resultWords = words.reduce((ac, word) => {
        ac.filter(w = w.word === word).length === 0 ?
            ac.push({
                word: word, total: 1
            }) :
            ac.find(w => w.word === word).total++;

        return ac;
    }, []);
    // Show in console
    console.log(resultWords())
    // Show in div
    resultWords.innerHTML = resultWords.reduce((ac, w) => {
        return ac + `<p>
        <label>${w.word}</label>: ${w.total}
        </p>`
    }, "")
});