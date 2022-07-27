import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';



function App() {
  return (
    
    <div className="App">
          <NavBar />
          <ItemListContainer />
          <ItemCount />


      
    </div>
  );
}

export default App;
