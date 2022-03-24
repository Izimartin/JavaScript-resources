store.dispatch() //enviar una action a la store

					// Action Example: (No repetir actions)
Cont ADD_ITEM = ‘ADD_ITEM’;

{
    type: ADD_ITEM,
        item: { id: 1, value: ‘Example’ }
}

						// Action Creators
Function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

// Reducer Example: funciones puras toman el estate anterior y la action y regresan un nuevo state.(previousState, action) => newState

// NUNCA: mutar los argumentos, realizar SideEffects, llamar funciones No Puras(API calls, etc). 	

