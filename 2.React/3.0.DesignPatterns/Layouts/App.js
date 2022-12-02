import { Modal } from "./Modal";
import { SplitScreen } from "./SplitScreen";
import ProductItems from ".";

const LeftHandComponent = () => {
    <h1> Left</h1>;
}
const RightHandComponent = () => {
    <h1> Right</h1>;

}

const products = [{
    name: 'Iphone 14',
    price: '$1500',
    rating: 4.9,
}];

function App() {
    return (
        <>
            <SplitScreen
                left={LeftHandComponent}
                right={RightHandComponent}
            />
            <Modal>
                <ProductItems product={products[0]} />
            </Modal>
        </>

    );
}
export default App;