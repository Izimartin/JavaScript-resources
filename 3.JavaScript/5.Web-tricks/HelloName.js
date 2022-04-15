const p = {
    name: 'Brealy',
    hello: () => console.log(`Hello ${p.name}!`)

} 

p.hello()
p.name = 'Fabian';
p.hello();

Object.freeze(p);
p.name = 'Fabian';
p.hello();
p.name = 'Tatan';
p.hello();