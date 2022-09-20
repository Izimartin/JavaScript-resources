import withSearch from "./components/hoc/withSearch";
import ProductList from "./components/hoc/productList";
import TodoList from "./components/hoc/todoList";
import TodoContainer from "./components/PresentationalContainer/todoContainer";
import TodosView from "./components/Provider/todosView";
import Store from "./components/Provider/store";
import Menu from "./components/Compound/menu";

const products = [
  {
    id: 0,
    title: "carne",
  },
  {
    id: 1,
    title: "leche",
  },
  {
    id: 2,
    title: "verduras",
  },
];
const todos = [
  {
    id: 0,
    title: "hacer tarea",
    completed: false,
  },
  {
    id: 1,
    title: "crear video",
    completed: true,
  },
  {
    id: 2,
    title: "limpiar casa",
    completed: false,
  },
];

const ProductListWithSearch = withSearch(ProductList, products);
const TodoListWithSearch = withSearch(TodoList, todos);

function App() {
  return (
    <div>
      <h2>HOC</h2>
      <ProductListWithSearch />
      <TodoListWithSearch />
      <h2>Presentation-container</h2>
      <TodoContainer />
      <h2>Provider</h2>
      <Store>
        <TodosView />
      </Store>
      <h2>Compound</h2>
      <Menu>
        <Menu.Item title="Elemento 1" />
        <Menu.Item title="Elemento 2" />
        <Menu.Item title="Elemento 3" />
      </Menu>
    </div>
  );
}

export default App;
