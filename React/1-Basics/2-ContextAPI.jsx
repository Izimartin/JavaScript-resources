import { createContext, useContext } from 'react';
// Context is data passed from a context provider
// to any component that consumes the context.

// Context allows us to access data anywhere in our app
// (if the provider is passed around the entire component tree), 
// without using props.

// Context data is passed down on the value prop using the Context.
// Provider component.It can be consumed using the Context.
// Consumer component or the useContext hook.
const PostContext = createContext();

function App() { 
    const post = { title: "My blog!"};
    return (
        <PostContext.Provider value={post}>
            <BlogPost />
        </PostContext.Provider>
    );
}

function BlogPost() {
    const post = useContext(PostContext);

    return <h1>{post.title}</h1>
}
export default App;
