const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const initApp = async() => {
    // Change here the function you want to depure
    useForEach(ids);
    //useForLoop(ids);
    //useForOfLoop(ids);
    //usePromiseAndMap(ids);
}

const getPost = async(id) => {
    return await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();
}

const useForEach = (ids) => {
    await ids.forEach(async(id) => {
        const data = await getPost(id);
        console.log(data);
    });
    console.log("I'm not waiting")
}

// Use a traditional for loop instead to work asynchronously with async/await
const useForLoop = async(ids) => {
    for (let i = 0; < ids.length; i++) {
        const data = await getPost(ids[i]);
        console.log(data);
    };
    console.log("I'll wait on you")
}

// Modern Solution For...of Loop
const useForOfLoop = async(ids) => {
        for (let i = 0; < ids.length; i++) {
            const data = await getPost(ids[i]);
            console.log(data);
        }
        for (const id of ids) {
            const data = await getPost(id);
            console.log(data);
        }
        console.log("I'll wait on you more eficiently")
    }
    // Better Modern Solution: Promise with Map
const usePromiseAndMap = async(ids) => {
    // const posts = await Promise.allSettled(ids.map(async (id) =>
    const posts = await Promise.all(ids.map(async(id) =>
        getPost(id)));
    console.log(posts);
    console.log("I'll wait on you more eficiently faster with promise and map")
}

// Another modern Solution: Reduce
const useReduce = () => {
    await ids.reduce(async(acc, id) => {
        // wait previous item to complete
        await acc;
        // get  the next item from the
        const posts = await Promise.getPost(id);
        console.log(posts);
    }, Promise.resolve());
    console.log("I'll wait on you more eficiently faster with Reduce")
}