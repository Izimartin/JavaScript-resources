const objectExample = {name: "Juanito", lastname: "Jordan"};
const refObj = new WeakRef(objectExample);
const obj = refObj.deref();
obj.name

// Output: 'Juanito'