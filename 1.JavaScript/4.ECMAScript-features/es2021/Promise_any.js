const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject(), 1000);
  });
  
  const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject(), 2000);
  });
  
  const thirdPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject(), 3000);
  });
  
  try {
    const first = await Promise.any([
      firstPromise, secondPromise, thirdPromise
    ]);
    // Any of the promises was fulfilled.
  } catch (error) {
    console.log(error);
    // AggregateError: All promises were rejected
  }