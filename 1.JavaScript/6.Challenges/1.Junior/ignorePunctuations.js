txt.addEventListener("input", event => {

    let text = event.target.value;

    text = text.replace(/[$\.¿\?,;]/g, " ");
    text = text.replace(/\s+/g, " ").trim();

    text = text.toUpperCase();

    const words = text.split(" ");

    const resultWords = words.reduce((ac, word) => {
        ac.filter(w => w.word === word).length === 0 ?
            ac.push({
                word: word, total: 1
            }) :
            ac.find(w => w.word === word).total++;

        return ac;
    }, []);

    console.log(resultWords);

    result.innerHTML = resultWords.reduce((ac, w) => {
        return ac + `<p>
        <label> ${w.word} </label>: ${w.total}
        <p>`
    }, "")
});