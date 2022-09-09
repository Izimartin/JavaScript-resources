
function log(content) {
    console.log(content);
}

function print(content) {
    let htmlContent = "";

    content.forEach(element => {
        htmlContent += `<div> Print: ${element.title}</div>`;
    });
    // myDiv is the id of the html element
    myDiv.innerHTML = htmlContent;
}

function printClosure(htmlElement, fields) {
    return (content) => {
        let htmlContent = "";

        content.forEach(element => {
            let text = fields.reduce((ac, e) => {
                ac + element[e] + " "
            }, '');
            htmlContent += `<div> PrintClosure:${text}</div>`;
        });
        // myDiv is the class element of the html
        htmlElement.innerHTML = htmlContent;
    };
}

async function requests(url, fn) {

    let response = await fetch(url);
    let json = await response.json();

    fn(json);
}

let url = "https://jsonplaceholder.typicode.com/todos/";

requests(url, log);
// requests(url, print);
requests(url, printClosure(myDiv), ['userId', 'title', 'userId']);
