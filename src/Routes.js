import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Cart from './Cart';
import Shop from './Shop';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/Shop' component={Shop} />
                <Route path='/Cart' component={Cart} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;