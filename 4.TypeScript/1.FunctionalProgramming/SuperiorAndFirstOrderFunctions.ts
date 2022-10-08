interface Beer{
    name: string,
    alcohol: number
}
// Superior Order Function
const data: Beer[] = [
    {
        name: "Erdinger",
        alcohol: 7.5
    },
    {
        name: "Delirium",
        alcohol: 8.3
    },
    {
        name: "Corona",
        alcohol: 4
    },
];

// First Order Function, passing function parameters
function getInfo(beers: Beer[], fn: (b: string[]) => void) {
    const beersInfo = beers.map(e => `Cerveza: ${e.name}, con ${e.alcohol} de alcohol.`); 
    fn(beersInfo)
}

function show (beers: string[]) {
    beers.forEach(item => console.log(item));
}

function showUpperCase (beers: string[]) {
    beers.forEach(item => console.log(item.toUpperCase()));
}

function showOrdered (beers: string[]) {
    beers.sort().forEach((item, index) =>{
        console.log(`${index+1} ${item}`);
    })
}

// First Order Function, passing function parameters
getInfo(data, show);
getInfo(data, showUpperCase);
getInfo(data, showOrdered);