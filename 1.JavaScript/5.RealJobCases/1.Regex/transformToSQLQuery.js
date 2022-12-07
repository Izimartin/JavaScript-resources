const beersXML = "<beers>" +
    "<element>erdinger</element>" +
    "<element>corona</element>" +
    "<element>heineken </element>" +
    "<element>delirium</element>" +
    "<element></element>" +
    "</beers>";

const sql = beersXML
    .match(/<element>.*?<\/element > /g)
    .map(e => e.replace(/<element>|<\/element>/g, ""))
    .reduce((query, b) => {
        return query + "('" + b + "'),"
    }, "INSERT INTO Beer(name) VALUES")
    .slice(0, -1);

console.log(sql);