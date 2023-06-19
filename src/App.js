import './App.css'
import Header from '../src/components/Header/Header'
import Searcher from '../src/components/Searcher/Searcher'
import List from '../src/components/List/List'

function App() {
  return (
    <div className="App">
      <Header />
      <Searcher />
      <List />
    </div>
  )
}

export default App
