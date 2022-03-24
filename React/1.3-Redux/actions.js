// Actions in React must have a type property that indicates the type of ACTION being performed.
// They must be defined as a String constant and you can add more properties to it as well.
// In Redux, actions are created using the functions called Action Creators.
// Below is an example of Action and Action Creator:

function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}