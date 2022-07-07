// Props are data passed from a component's immediate parent. 
// Props are declared on the child component, can be named
// anything, and can accept any valid value.

function Blog() { 
    const post = { title: "My blog!"};
    return <Blogpost post={post} />
}

// Props are consumed within the child component.
// Props are always available within the child as properties on an object.
function BlogPost(props) {
    return <h1>{props.post.title}</h1>
}

// Since props are plain object properties, they can be destructured for more immediate access.
function BlogPost({ post }) {
    return <h1>{props.post.title}</h1>
}