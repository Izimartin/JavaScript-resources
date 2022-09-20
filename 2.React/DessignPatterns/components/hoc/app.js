

import withSearch from "./withSearch";
import ProductList from "./productList";
import TodoList from "./todoList";

const products = [
    { id: 0, title: "carne", },
    { id: 1, title: "leche", },
    { id: 2, title: "verduras", },
];

const todos = [
    { id: 0, title: "Ejercicio", completed: false, },
    { id: 1, title: "Estudiar", completed: true, },
    { id: 2, title: "Limpiar", completed: false, },
];
const ProductListWithSearch = withSearch(ProductList, products);
const TodoListWIthSearch = withSearch(TodoList, todos);

function App() {
    return (
        <div>
            <h2>HOC</h2>
            <ProductListWithSearch />
            <TodoListWIthSearch />
        </div>
    );
}

export default App;