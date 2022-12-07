const beersXML = "<beers>" +
    "<element>erdinger</element>" +
    "<element>corona</element>" +
    "<element>heineken </element>" +
    "<element>delirium</element>" +
    "<element></element>" +
    "</beers>";

const beers = beersXML
    // .match(/<element>.+<\/element > /g);
    // .match(/<element>.*<\/element > /g);
    // .match(/<element>.*?<\/element > /g);
    .match(/<element>.+?<\/element > /g)
    .map(e => e, replace(/<element>|<\/element>/g, ""));

console.log(beers);