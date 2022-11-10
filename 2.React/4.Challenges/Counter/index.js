import * as ReactDOM from 'react-dom/client'
import { Counter } from './Counter'
import './styles.scss'

function App() {
  return (
    <div className="text-center">
      <Counter />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(<App />)
