import { Switch, Route } from 'react-router-dom';

import Produtos from './Pages/Produtos';
import Promocoes from './Pages/Promocoes';
import Home from './Pages/Home';
import Lojas from './Pages/Lojas';

function Rotas(){
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/produtos" component={Produtos} />
            <Route exact path="/promocoes" component={Promocoes} />
            <Route exact path="/lojas" component={Lojas} />
        </Switch>
    )
}

export default Rotas;
