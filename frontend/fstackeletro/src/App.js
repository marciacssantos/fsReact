import Menu from './Components/Menu';
import {BrowserRouter } from 'react-router-dom';
import Rotas from './Rotas'
import { Container} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Container>
      <div className="App">
          <header>
              <Menu />
          </header>
          <main>
            <Rotas />
          </main>
        </div>

      </Container>
      
    </BrowserRouter>
    
  );
}

export default App;
