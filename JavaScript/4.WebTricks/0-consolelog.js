const var0 = { name: "brealy", age: "18"};
const var1 = { name: "harry", age: "26"};
const var2 = { name: "fab", age: "36"};
console.group("Grupo de consolas");
console.groupCollapsed("Oculto");
console.log({ var0, var1, var2});
console.table({ var0, var1, var2});
console.groupEnd("Grupo de consolas");
console.groupEnd("Ciao");

console.time('looper')
let i = 0;
while (i < 100000000) {
  i++;
}
console.timeEnd('looper')

// Stack Trace logs
const deleteMe = () => consolo.trace('bye bye database')

deleteMe()



