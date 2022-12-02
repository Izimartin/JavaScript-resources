const prom1 = new Promise((resolve, reject) => {
    setTimeout(
      () => resolve("this is the first promise"),
      Math.floor(Math.random() * 100)
    );
  });
  const prom2 = new Promise((resolve, reject) => {
    setTimeout(
      () => resolve("this is the second promise"),
      Math.floor(Math.random() * 100)
    );
  });
  const prom3 = new Promise((resolve, reject) => {
    setTimeout(
      () => resolve("this is the third promise"),
      Math.floor(Math.random() * 100)
    );
  });
  
  (async function() {
    const result = await Promise.any([prom1, prom2, prom3]);
    console.log(result); // Prints "A", "B" or "C"
  })();